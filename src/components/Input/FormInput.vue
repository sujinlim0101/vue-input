<template>
  <FormLabel v-if="label" :for="uuid">
    {{ label }}
  </FormLabel>
  <input
    :id="uuid"
    :name="name"
    :value="inputValue"
    :aria-describedby="errorMessage ? `${uuid}-error` : undefined"
    :aria-invalid="errorMessage ? true : false"
    class="ui-input-control"
    :class="{
      'invalid': errorMessage,
      'valid': meta.valid && meta.validated,
      icon: icon,
    }"
    v-bind="{ ...$attrs }"
    v-on="validationListeners"
  />
  <FormError v-if="errorMessage" :id="`${uuid}-error`">
    {{ errorMessage }}
  </FormError>
</template>

<script lang="ts" setup>
import { FormLabel, FormError } from '.'
import useUniqueId from '../../composables/useUniqueId'
import useFormValue from '../../composables/useFormValue'

const props = defineProps<{
  label: string,
  name: string,
  icon: string,
  value?: string
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
  color: $input-placeholder-color;
}
.ui-input-control {
  display: block;
  border: 1px solid $input-border-color;
  border-radius: $input-border-radius;
  padding: $input-padding-y $input-padding-x;
  font-size: $input-font-size;
  color: $input-text-color;
  &:focus {
    outline: 0;
    border-color: $input-focus-color;
  }
  &.icon {
    padding-right: $input-icon-padding-x;
    background-repeat: no-repeat;
    background-position: $input-background-position;
    background-size: $form-icon-size
  }
  &:read-only {
    background-color: $form-readonly-background-color;
    border: $input-border-color;
  }
  &:disabled {
    color: $form-disabled-text-color;
    background-color: $form-disabled-background-color;
    border: $input-border-color;
  }
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
}
</style>
