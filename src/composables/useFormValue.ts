import { Ref, computed } from 'vue'
import { useField } from 'vee-validate'

declare type MaybeRef<T> = Ref<T> | T
interface FieldOptions<TValue = unknown> {
  initialValue?: MaybeRef<TValue>
  validateOnValueUpdate: boolean
  validateOnMount?: boolean
  bails?: boolean
  type?: string
  valueProp?: MaybeRef<TValue>
  checkedValue?: MaybeRef<TValue>
  uncheckedValue?: MaybeRef<TValue>
  label?: MaybeRef<string | undefined>
  standalone?: boolean
}

export default (
  name: string,
  initialValue: any,
  options?: FieldOptions
) => {
  const { value, errorMessage, handleChange, meta } = useField(name, undefined, {
    initialValue,
    validateOnValueUpdate: false,
    ...options,
  })

  const validationListeners = computed(() => {
    if (!errorMessage.value) {
      return {
        blur: handleChange,
        change: handleChange,
        input: (e: InputEvent) => handleChange(e, false),
      }
    }
    return {
      blur: handleChange,
      change: handleChange,
      input: handleChange,
    }
  })

  return {
    value,
    errorMessage,
    meta,
    validationListeners,
  }
}
