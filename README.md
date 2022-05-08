# vue-input
베이스 input 과 휴대폰 input validation

### AWS Amplify와 Github연동으로 배포
* URL: https://main.dpf52993lw13p.amplifyapp.com

### Vee-validate와 yup을 사용하여 input과 validation 적용하기

* Vee-validate의 compoisition 함수(useForm, useField)를 사용하여 작업
* useFormValue라는 custom composable 함수를 사용하여 useField를 한번 감싸서 사용
* useFormValue에서 상황에 따라 agressive와 lazy validation을 하도록 설정
* 유효한 값(또는 초기값)인 상태의 경우 lazy하게 유효성 검사가 체크되고, 유효한 값이 아닌 상황에선 aggressive하게 체킹하도록 설정.
