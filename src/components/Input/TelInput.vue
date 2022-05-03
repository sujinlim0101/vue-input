<template>
  <fieldset :aria-describedby="errorMessage ? uuidError : undefined">
    <FormLabel :for="uuid" class="ui-form-tel-legend">{{ label }}</FormLabel>
    <div class="ui-form-tel-input" :class="calculatedClassTelWrapper">
      <TelDropdown
        :land="land"
        :preferred-list="props.preferredList"
        :update-land="updateLand"
        :update-form-value="updatePhoneVal"
      />
      <input
        :id="uuid"
        v-model="inputValue"
        :name="props.name"
        type="tel"
        maxlength="18"
        class="ui-form-tel-input-field"
        @blur="updatePhoneVal"
        @input="UpdatedLazy"
      />
    </div>
    <FormError v-if="errorMessage" :id="uuidError">{{ errorMessage }}</FormError>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import { useField } from 'vee-validate'
import useUniqueId from '../../composables/useUniqueId'

import { FormLabel, FormError } from '../Input'

import TelDropdown from './TelDropdown.vue'
import { CountryInfo } from './countries'

import {
  CountryCode,
  parsePhoneNumberWithError,
  formatIncompletePhoneNumber,
} from 'libphonenumber-js/min'

type Props = {
  name: string
  label: string
  icon: boolean
  preferredList: CountryInfo
}

const props = withDefaults(defineProps<Props>(), {
  icon: false,
  value: undefined,
})

const uuid = useUniqueId.get()
const uuidError = uuid + '-error'

const { value: phoneVal, errorMessage } = useField(props.name, {})

const inputValue = ref<string>('')

const land = ref<CountryCode>('KR')
const updateLand = (country: CountryCode) => {
  land.value = country
}

const setInitials = () => {
  if (typeof phoneVal.value === 'string' && phoneVal.value) {
    try {
      const parsed = parsePhoneNumberWithError(phoneVal.value, land.value)
      phoneVal.value = parsed.number
      inputValue.value = parsed.format('NATIONAL')
      if (parsed.country) {
        land.value = parsed.country
      }
    } catch (e) {
      return
    }
  }
}

const formatByChange = () => {
  const formatLocale = (value: string, landInfo: CountryCode) => {
    const formated = formatIncompletePhoneNumber(value, landInfo)
    if (formated) inputValue.value = formated
  }
  watch([land, inputValue], ([land, inputValue]) => {
    try {
      formatLocale(inputValue, land)
    } catch (e) {
      return
    }
  })
}

const UpdatedLazy = () => {
  if (errorMessage.value) {
    updatePhoneVal()
  }
}

const updatePhoneVal = () => {
  try {
    const parsed = parsePhoneNumberWithError(inputValue.value, land.value)
    phoneVal.value = parsed.number
  } catch (e) {
    phoneVal.value = inputValue.value
  }
}

setInitials()
formatByChange()

const calculatedClassTelWrapper = computed(() => ({
  'invalid': errorMessage.value,
  'valid': !errorMessage.value && phoneVal.value,
  icon: props.icon,
}))

</script>

<style lang="scss" scoped>
@import './variable.scss';

fieldset {
  border: none;
  padding: 0;
  margin: 0;
}
.dropdown {
  position: static;
}
.ui-form-tel-input {
  position: relative;
  display: flex;
  border: 1px solid $input-border-color;
  padding: 1px;
  height: 40px;
  &.icon {
    padding-right: $input-icon-padding-x;
    background-repeat: no-repeat;
    background-position: $input-background-position;
    background-size: $form-icon-size;
  }
  border-radius: $input-border-radius;
  &:focus-within {
    border: 1px solid $input-focus-color;
  }
  &.invalid {
    border: 1px solid $form-error-color;
    &.icon {
      background-image: $form-invalid-icon;
    }
  }
  &.valid {
    &.icon {
      background-image: $form-valid-icon;
    }
  }
}
.ui-form-tel-input-field {
  width: 100%;
  padding: $input-padding-y - 1px $input-padding-x - 1px;
  flex-grow: 1;
  border: none;
  margin-right: 1px;
  font-size: $input-font-size;
  &:focus {
    outline: none;
  }
}
.dropdown-menu {
  width: 100%;
}
</style>
