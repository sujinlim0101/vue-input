<template>
  <fieldset :aria-describedby="errorMessage ? `${uuid}-error` : undefined">
    <legend v-if="props.groupLabel" class="form-label">
      {{ props.groupLabel }}
    </legend>
    <div class="radio-wrapper">
      <FormRadio
        v-for="option in props.options"
        :key="option.label"
        :label="option.label"
        :name="name"
        :value="option.value"
      />
      <FormError v-if="errorMessage" :id="`${uuid}-error`">
        {{ errorMessage }}
      </FormError>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import useUniqueId from '../../composables/useUniqueId'
import { FormError } from '../Input'
import FormRadio from './FormRadio.vue'
import { Options } from './BaseFormType'
import { useFieldError } from 'vee-validate'

const props = defineProps<{
  groupLabel: string,
  modelValue: string,
  options: Options,
  name: string,
  value: string
}>()


const uuid = useUniqueId.get()
const errorMessage = useFieldError(props.name)

</script>

<style lang="scss" scoped>
fieldset {
  margin: 0;
  padding: 0;
  border: none;
}
.form-radio--wrapper {
  display: inline-flex;
  gap: 7px;
}
legend {
  display: block;
  font-size: 14px;
  width: 100%;
  text-align: left;
}
.radio-wrapper {
  display: flex;
}
</style>
