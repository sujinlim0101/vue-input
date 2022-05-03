<template>
  <form @submit="onSubmit">
    <div class="form-elem-wrapper">
      <FormInput
        name="name"
        label="이름"
        icon
        type="text"
      />
    </div>
    <div class="form-elem-wrapper">
      <FormInput name="email" label="아이디(이메일)" icon type="email" />
    </div>
    <div class="form-elem-wrapper">
      <TelInput
        name="phoneNumber"
        label="전화번호"
        icon
        placeholder="000-0000-0000"
        :preferred-list="preferredList"
      />
    </div>
    <div class="form-elem-wrapper">
      <FormTextarea name="content" label="내용" icon type="text" rows="5" />
    </div>
    <div class="form-elem-wrapper">
      <FormSelect
        name="favoriteAnimal"
        :options="SelectAnimals"
        label="좋아하는 동물"
        icon
      />
    </div>
    <div class="form-elem-wrapper">
      <RadioGroup
        :options="favoritePlaceOptions"
        name="favoritePlace"
        group-label="좋아하는 음식"
      />
    </div>

    <div class="modal-footer">
      <button type="submit" class="">제출</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { object } from 'yup'

import {
  FormInput,
  FormTextarea,
  FormSelect,
  RadioGroup,
  TelInput,
} from './Input'

import {
  NameRequired,
  EmailRequired,
  StringRequired,
  ContentRequired,
  PhoneRequired,
} from '../validations'

import { InvalidSubmissionContext, useForm } from 'vee-validate'

type FormValue = {
  name?: string
  email?: string
  phoneNumber?: string
  content?: string
  favoriteAnimal?: string
  favoritePlace?: string
}

const SelectAnimals = [
  { label: '고양이', value: 'cat' },
  { label: '강아지', value: 'dog' },
]

const favoritePlaceOptions = [
  { label: '서울', value: 'Seoul' },
  { label: '런던', value: 'London' },
]

const preferredList = {
  KR: {
    name: 'South Korea',
    native: '대한민국',
    calling: '82',
    languages: ['ko'],
    emoji: '🇰🇷',
  }
}

const validationSchema = object({
  name: NameRequired,
  email: EmailRequired,
  phoneNumber: PhoneRequired,
  content: ContentRequired,
  favoriteAnimal: StringRequired,
  favoritePlace: StringRequired,
})

const initialFormValues: FormValue = {
  name: '',
  email: '',
  phoneNumber: '',
  content: '',
  favoriteAnimal: '',
  favoritePlace: '',
}

const { handleSubmit, resetForm, values, errors } = useForm<FormValue>({
  validationSchema,
  initialValues: initialFormValues,
})

function onInvalidSubmit(ctx: InvalidSubmissionContext) {
  console.log(ctx) // current form values
}

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
  resetForm()
}, onInvalidSubmit)

</script>

<style scoped lang="scss">
.form-elem-wrapper {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
</style>
