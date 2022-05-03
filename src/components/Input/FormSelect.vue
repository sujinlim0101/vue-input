<template>
  <div>
    <FormLabel v-if="label" :for="uuid">
      {{ label }}
    </FormLabel>
    <select
      :id="uuid"
      :name="name"
      :value="inputValue"
      :aria-describedby="error ? `${uuid}-error` : undefined"
      :aria-invalid="error ? true : false"
      class="ui-select-control"
      :class="{
        icon: icon,
        'invalid': errorMessage,
        'valid': meta.valid,
      }"
      v-bind="{ ...$attrs }"
      v-on="validationListeners"
    >
      <option v-for="option in options" :key="option.label" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
  <FormError v-if="errorMessage" :id="`${uuid}-error`">
    {{ errorMessage }}
  </FormError>
</template>

<script lang="ts" setup>
import { Options } from './BaseFormType'
import useUniqueId from '../../composables/useUniqueId'
import { FormLabel, FormError } from '.'
import useFormValue from '../../composables/useFormValue'

const props = defineProps<{
  options: Options,
  label: string,
  value: string,
  name: string,
  error: string,
  icon: boolean
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
.ui-select-control {
  display: block;
  width: 100%;
  padding: $form-select-padding-y $form-select-padding-right $form-select-padding-y
    $form-select-padding-x;
  border: 1px solid $form-select-border-color;
  border-radius: $form-select-border-radius;
  background-image: $form-select-indicator-icon;
  background-repeat: no-repeat;
  background-position: $form-select-background-position;
  background-size: $form-select-indicator-icon-size;
  outline: 0;
  appearance: none;
  color: $input-text-color;
  font-size: 16px;
  &:focus {
    border-color: $input-focus-color;
  }
}

.invalid {
  border: 1px solid $form-error-color;
  &.icon {
    background-image: $form-invalid-icon, $form-select-indicator-icon;
    background-position: center right $form-select-icon-padding-right,
      center right $form-select-padding-x;
    background-size: $form-icon-size, $form-select-indicator-icon-size;
  }
}
.valid {
  &.icon {
    background-image: $form-valid-icon, $form-select-indicator-icon;
    background-position: center right $form-select-icon-padding-right,
      center right $form-select-padding-x;
    background-size: $form-icon-size, $form-select-indicator-icon-size;
  }
  &:focus {
    border-color: $input-focus-color;
  }
}
</style>
