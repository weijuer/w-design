<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-select v-model="state.select1" :options="plainOptions" placeholder="select an fruit"></w-select>
    </w-space>
  </w-preview>

  <w-preview title="Multiple" desc="Multiple">
    <w-space orientation="vertical">
      <w-select v-model="state.select2" multiple :options="fullOptions" placeholder="select an fruit"></w-select>
    </w-space>
  </w-preview>

  <w-preview title="Asynchronous Loading" desc="Asynchronous Loading">
    <w-space orientation="vertical">
      <w-select v-model="state.select3" :loading="isLoading" placeholder="select an fruit">
        <template v-for="option of items" :key="option.value">
          <w-select-option :label="option.name" :value="option.name"></w-select-option>
        </template>
      </w-select>
    </w-space>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-space orientation="vertical">
      <w-select v-model="state.select4" disabled></w-select>
    </w-space>
  </w-preview>

  <w-preview title="Group" desc="Group">
    <w-space orientation="vertical">
      <w-select v-model="state.select5" :options="groupOptions"></w-select>
    </w-space>
  </w-preview>

  <w-preview title="Slots" desc="Slots">
    <w-space>
      <w-select v-model="state.select6">
        <template v-for="option of fullOptions" :key="option.value">
          <w-select-option :label="option.label" :value="option.value" :disabled="option.disabled"></w-select-option>
        </template>
      </w-select>
    </w-space>
  </w-preview>
</template>

<script setup>
import { reactive } from 'vue'
import { usePokemonList } from '@w-design/utils'

const state = reactive({
  select1: '',
  select2: ['Apple'],
  select3: 'Apple',
  select4: 'Apple',
  select5: 'Apple',
  select6: 'Apple'
})

const plainOptions = ['Apple', 'Banana', 'Pear', 'Orange', 'Chirry', 'Grape']

const { items, isLoading } = usePokemonList({ fetchDelay: 1500 })

const fullOptions = [
  {
    label: 'Apple',
    value: 'Apple'
  },
  {
    label: 'Banana',
    value: 'Banana'
  },
  {
    label: 'Pear',
    value: 'Pear'
  },
  {
    label: 'Orange',
    value: 'Orange',
    disabled: true
  }
]
const groupOptions = [
  {
    label: 'Fruits',
    options: [
      {
        label: 'Apple',
        value: 'Apple'
      },
      {
        label: 'Banana',
        value: 'Banana'
      },
      {
        label: 'Pear',
        value: 'Pear'
      },
      {
        label: 'Orange',
        value: 'Orange',
        disabled: true
      }
    ]
  },
  {
    label: 'Animals',
    options: [
      {
        label: 'Ant',
        value: 'Ant'
      },
      {
        label: 'Cat',
        value: 'Cat',
        disabled: true
      },
      {
        label: 'Dog',
        value: 'Dog'
      },
      {
        label: 'Monkey',
        value: 'Monkey'
      }
    ]
  }
]
</script>
