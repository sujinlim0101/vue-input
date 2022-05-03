<template>
  <div :id="props.id" aria-live="assertive" class="error">
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string
}>()

</script>
<style lang="scss" scoped>
.error {
  padding: 4px;
  color: red;
  font-size: 12px;
  text-align: left;
}
</style>
