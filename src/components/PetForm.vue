<template>
  <form class="pa-3" @submit.prevent="onSubmit">
    <v-select
      @change="onPetChanged"
      :items="pets"
      v-model="form.pet"
      :label="$t('pet')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-text-field
      :label="$t('name')"
      v-model="form.name"
    ></v-text-field>

    <v-select
      :items="genders"
      v-model="form.gender"
      :label="$t('gender')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-select
      v-if="form.pet"
      :items="ages[form.pet]"
      v-model="form.age"
      :label="$t('age')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-select
      v-if="form.pet"
      :items="breeds[form.pet]"
      v-model="form.breed"
      :label="$t('breed')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-select
      v-if="selectedPet && selectedPet.extraFields.size"
      :items="sizes[form.pet]"
      v-model="form.size"
      :label="$t('size')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-select
      v-if="selectedPet && selectedPet.extraFields.hair"
      :items="hairs[form.pet]"
      v-model="form.hair"
      :label="$t('size')"
      item-text="label"
      item-value="code"
    ></v-select>

    <v-btn
      :disabled="submitIsDisabled"
      type="submit"
      color="primary"
    >
      Submit
    </v-btn>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'pet-form',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      pets: [
        { code: 'dog', label: this.$t('pets.dog'), extraFields: { size: true } },
        { code: 'cat', label: this.$t('pets.cat'), extraFields: { hair: true } }
      ],
      genders: [
        { code: 'female', label: this.$t('genders.female') },
        { code: 'male', label: this.$t('genders.male') }
      ],
      sizesLoading: false,

      form: {
        pet: undefined,
        name: undefined,
        gender: undefined,
        age: undefined,
        breed: undefined,
        size: undefined,
        hair: undefined
      }
    }
  },
  computed: {
    ...mapGetters({
      sizes: 'sizes',
      breeds: 'breeds',
      hairs: 'hairs',
      ages: 'ages'
    }),
    selectedPet () {
      if (this.form.pet) {
        return this.pets.find(el => el.code === this.form.pet)
      }
      return null
    },
    submitIsDisabled () {
      var isDisabled = !this.form.name ||
        !this.form.gender ||
        !this.form.age ||
        !this.form.breed

      if (this.selectedPet) {
        for (let field in this.selectedPet.extraFields) {
          if (!this.form[field]) {
            isDisabled = true
            break
          }
        }
      }

      return isDisabled
    }
  },
  created () {
    if (this.data) {
      var {
        pet,
        name,
        size,
        gender,
        age,
        breed,
        hair
      } = this.data

      this.form = {
        pet,
        name,
        gender,
        age,
        breed,
        size,
        hair
      }
    }
  },
  methods: {
    onPetChanged (val) {
      this.form.size = undefined
      this.form.breed = undefined
      this.form.hair = undefined

      if (this.selectedPet.extraFields.size) {
        if (!this.sizes[this.selectedPet.code]) {
          this.sizes[this.selectedPet.code] = []
        }
      }

      if (this.selectedPet.extraFields.hair) {
        if (!this.hairs[this.selectedPet.code]) {
          this.hairs[this.selectedPet.code] = []
        }
      }
    },
    onSubmit () {
      this.$emit('pet-form-submit', this.form)
    }
  }
}
</script>
