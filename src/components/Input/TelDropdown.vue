<template>
  <div ref="listRef" class="dropdown">
    <button
      id="tel-input-toggle"
      class="ui-form-tel-input-toggle"
      aria-label="국가 코드 선택"
      type="button"
      aria-expanded="false"
      aria-haspopup="listbox"
      @click="toggleExpanded"
    >
      <span>{{ countries[land].emoji }}</span>
      <span class="ui-form-arrow-ic">
      </span>
    </button>
    <ul class="dropdown-menu" role="listbox" :class="{ 'expanded': isExpanded }">
      <template v-for="(list, index) in displayCountries" :key="index">
        <li
          v-for="(country, key, countryIndex) in list"
          :key="countryIndex"
          class="menu-items"
          role="option"
          :aria-selected="key === land"
          :data-land="key"
          @click="selectLand"
        >
          <span class="land">
            <span class="item-info">
              <span class="emoji">{{ country.emoji }}</span>
              <span>{{ country.name }}</span>
            </span>
            <span v-if="country.name !== country.native" class="item-info">
              <span>({{ country.native }})</span>
            </span>
          </span>
          <span class="phone">
            <span>+{{ country.calling }}</span>
          </span>
        </li>
        <div v-if="index === 0" class="hr"></div>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import countries, { CountryInfo } from './countries'
import { CountryCode } from 'libphonenumber-js/min'

const props = defineProps<{
  land: CountryCode
  preferredList: CountryInfo
  updateLand: (country: CountryCode) => void
  updateFormValue: () => void
}>()

const listRef = ref(null)

const isExpanded = ref(false)

const setIsExpanded = (value: boolean) => {
  isExpanded.value = value
}

const toggleExpanded = () => {
  setIsExpanded(!isExpanded.value)
}

onClickOutside(listRef, (event: Event) => {
  if (isExpanded.value) setIsExpanded(false)
})

const displayCountries = [props.preferredList, countries]

const selectLand = (e: Event) => {
  e.preventDefault()
  props.updateLand((e.currentTarget as HTMLElement).dataset.land as CountryCode)
  props.updateFormValue()
  if (isExpanded.value) setIsExpanded(false)
}
</script>

<style lang="scss" scoped>
@import './variable.scss';
.dropdown-menu {
  position: absolute;
  left: 0;
  display: none;
  max-height: 200px;
  min-width: 11rem;
  padding: 0.2em 0;
  margin: 0.1em 0 0 0;
  font-size: 1rem;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  overflow-y: scroll;
  z-index: 1070;
  &.expanded {
    display: block;
  }
}
.ui-form-tel-input-toggle {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 7px 0 $input-padding-x;
  border: none;
  gap: 13px;
  background-color: #fff;
  margin-left: 1px;
}
.menu-items {
  padding: 0.2em 0.8em;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
}
.ui-form-arrow-ic {
  width: 9px;
  height: 9px;
  background-image: $form-select-indicator-icon;
  background-size: 9px;
}
.item-info {
  pointer-events: none;
}
.emoji {
  margin-right: 9px;
}
.dropdown-toggle::after {
  content: none;
}
.land {
  color: gray;
}
.phone {
  margin-left: 8px;
  color: gray;
}
.dropdown-menu {
  width: 100%;
  max-height: 210px;
  left: -2px !important;
  overflow-y: scroll;
  font-size: 16px;
}
.hr {
  height: 1px;
  margin: 2px 0;
  background-color: gray;
}
</style>
