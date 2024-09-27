// useFormValidation
import { reactive } from 'vue'

interface ValidationResult {
  isValid: boolean
  errors: string[]
}

export function useFormValidation() {
  const validationResult = reactive<ValidationResult>({ isValid: true, errors: [] })

  function validateField(fieldName: string, value: string) {
    // Validation logic
    if (value.trim() === '') {
      validationResult.isValid = false
      validationResult.errors = [`${fieldName} cannot be empty`]
    } else {
      validationResult.isValid = true
      validationResult.errors = []
    }
  }

  return { validationResult, validateField }
}
