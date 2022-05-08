# vue-input
베이스 input과 전화번호 validation

### AWS Amplify와 Github연동으로 배포
* URL: https://main.dpf52993lw13p.amplifyapp.com

### Vee-validate와 yup을 사용하여 input과 validation 적용하기

* Vee-validate의 compoisition 함수(useForm, useField)를 사용하여 작업
* useFormValue라는 custom composable 함수를 사용하여 useField를 한번 감싸서 사용
* useFormValue에서 상황에 따라 agressive와 lazy validation을 하도록 설정
* 유효한 값(또는 초기값)인 상태의 경우 lazy하게 유효성 검사가 체크되고, 유효한 값이 아닌 상황에선 aggressive하게 체킹하도록 설정.

### 전화번호 Validation
* 국가에 따라, 전화번호 유효성 체크가 됩니다.
* libphonenumber-js 라이브러리를 사용해서 유효성 검사를 하며 중간에 '-'를 넣어줍니다.
* 보이는것은 010-1234-1234 형태이지만, 실제 값은 +821012341234로 가지고 있습니다. 즉 UI에 보이는 값과 실제 폼에서 value 값으로 가지고 있는 값이 다르게 설계했습니다.
