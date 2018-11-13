<template>
  <div class="pet-info pa-3">
    <div class="field">
      <div class="label">Name:</div>
      <div class="value">{{data.name}}</div>
    </div>

    <div class="field">
      <div class="label">Gender:</div>
      <div class="value">{{ $t('genders.' + data.gender) }}</div>
    </div>

    <div class="field">
      <div class="label">Size:</div>
      <div class="value">{{ $t('sizes.' + data.size) }}</div>
    </div>

    <div class="field">
      <div class="label">Age:</div>
      <div class="value">{{ $t('ages.' + data.age) }}</div>
    </div>

    <div class="field">
      <div class="label">Breed:</div>
      <div class="value">{{data.breed}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pet-info',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.field {
  padding: 8px 0;
}

.label {
  color: #8d8d92;
  font-size: 12px;
}

.value {
  font-size: 16px;
}
</style>
