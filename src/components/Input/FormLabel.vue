<template>
  <label class="form-label">
    <slot />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseFormLabel',
})
</script>

<style lang="scss" scoped>
.form-label {
  display: block;
  width: 100%;
  margin: 0.5rem 0.25rem;
  font-size: 14px;
  color: black;
  text-align: left;
}
</style>
