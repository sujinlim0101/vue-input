<template>
  <span class="radio-control-wrapper">
    <input
      v-bind="{ ...$attrs }"
      :id="uuid"
      class="ui-radio"
      :class="{ 'invalid': errorMessage }"
      type="radio"
      :name="props.name"
      :checked="inputValue === props.value"
      @change="handleChange(value)"
    />
    <label v-if="props.label" class="radio-label" :for="uuid">
      {{ label }}
    </label>
  </span>
</template>

<script lang="ts" setup>
import { useField } from 'vee-validate'
import useUniqueId from '../../composables/useUniqueId'

const props = defineProps<{
  label: string,
  value: string,
  error: string,
  name: string
}>()

const uuid = useUniqueId.get()
const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(props.name, undefined, {})

</script>

<style lang="scss" scoped>
@import './variable.scss';
.radio-control-wrapper {
  display: inline-flex;
  align-items: center;
  & + .radio-control-wrapper {
    margin-left: 10px;
  }
}

.radio-label {
  font-size: 16px;
  margin-left: 8px;
}
.ui-radio {
  width: 20px;
  height: 20px;
  margin: auto 0;
  color: $input-text-color;
  appearance: none;
  background: no-repeat center contain;
  border: 2px solid gray;
  border-radius: 50%;
  &:disabled {
    & + .radio-label {
      color: gray;
    }
  }
  &:checked {
    background: blue;
    border-color: blue;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='1.5' fill='%23fff'/%3e%3c/svg%3e");
    &:disabled {
      background: blue;
      border-color: blue;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='1.5' fill='%23fff'/%3e%3c/svg%3e");
    }
  }
}
</style>
