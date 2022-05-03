import { string } from 'yup'
import { isValidPhoneNumber } from 'libphonenumber-js/min'

const NameRequired = string().required('이름을 입력하세요.')
const EmailRequired = string()
  .email('이메일을 정확하게 입력하세요.')
  .required('이메일을 입력하세요.')
const StringRequired = string().required('입력값이 필요해요.')
const ContentRequired = string().required('내용을 입력하세요.')
const PhoneRequired = string().test(
  'phoneNumberChecking',
  '전화번호를 정확하게 입력하세요.',
  function (value) {
    if (!value) {
      return this.createError({
        message: '번호를 입력하세요.',
      })
    }
    if (value && !isValidPhoneNumber(value)) {
      return this.createError({
        message: `전화번호를 정확하게 입력하세요.`,
      })
    }
    return true
  }
)

export {
  NameRequired,
  EmailRequired,
  ContentRequired,
  StringRequired,
  PhoneRequired,
}
