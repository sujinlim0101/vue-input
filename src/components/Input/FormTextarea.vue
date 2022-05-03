<template>
  <FormLabel v-if="props.label" :for="uuid" class="form-label">
    {{ props.label }}
  </FormLabel>
  <textarea
    :id="uuid"
    :name="props.name"
    :value="inputValue"
    :aria-describedby="errorMessage ? `${uuid}-error` : undefined"
    :aria-invalid="errorMessage ? true : false"
    class="ui-textarea-control"
    :class="{
      icon: props.icon,
      'invalid': errorMessage,
      'valid': meta.valid
    }"
    v-bind="{ ...$attrs }"
    v-on="validationListeners"
  ></textarea>
  <FormError v-if="errorMessage" :id="`${uuid}-error`">
    {{ errorMessage }}
  </FormError>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import useFormValue from '../../composables/useFormValue'
import useUniqueId from '../../composables/useUniqueId'

import { FormLabel, FormError } from '../Input'

const props = defineProps<{
  label: string,
  value: string,
  name: string,
  icon: boolean,
}>()

const uuid = useUniqueId.get()

const {
  value: inputValue,
  errorMessage,
  meta,
  validationListeners,
} = useFormValue(props.name, props.value)

</script>

<style lang="scss" scoped>
@import './variable.scss';

::placeholder {
  color: $textarea-placeholder-color;
}
.ui-textarea-control {
  display: block;
  border: 1px solid $textarea-border-color;
  border-radius: $textarea-border-radius;
  padding: $textarea-padding-y $textarea-padding-x;
  font-size: $textarea-font-size;
  color: $input-text-color;
  &:focus {
    outline: 0;
    border-color: $textarea-focus-color;
  }
}
.icon {
  padding-right: $textarea-icon-padding-x;
  background-repeat: no-repeat;
  background-position: $textarea-background-position;
  background-size: $form-icon-size;
}
.valid {
  &.icon {
    background-image: $form-valid-icon;
  }
  &:focus {
    border-color: $input-focus-color;
  }
}
.invalid {
  border: 1px solid $form-error-color;
  &.icon {
    background-image: $form-invalid-icon;
  }
  &:focus {
    border: 1px solid $form-error-color;
  }
}
</style>
