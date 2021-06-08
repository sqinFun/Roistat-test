<template>
  <div class="form">
    <BaseInput
      title="Имя"

      v-model.trim="contact.name"

      :error="$v.$dirty && $v.contact.name.$invalid"
      errorMessage="Обязательное поле"
    />
    <BaseInput
      title="Телефон"

      v-model.trim="contact.phone"
      placeholder="+7 (123) 456-78-90"
      mask="+7 (###) ###-##-##"

      :error="$v.$dirty && $v.contact.phone.$invalid"
      :errorMessage="getErrorMessage(!$v.contact.phone.required, 'Обязательное поле') || getErrorMessage(!$v.contact.phone.phone, 'Проверьте номер')"
    />
    <BaseSelect
      title="Начальник"

      :option="contactsWithoutNesting"
      v-model.trim="contact.parent"
    />
    <BaseButton
      @click="addContact"
    >
      Сохранить
    </BaseButton>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import { required } from 'vuelidate/lib/validators'

export default {
  data: ()=> ({
    contact: {
      name: null,
      phone: null,
      parent: null,
    }
  }),
  computed: {
    ...mapGetters('contacts', {
      contactsWithoutNesting: 'contactsWithoutNesting',
    })
  },
  methods: {
    addContact() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$store.dispatch('contacts/addContact', this.contact)
      this.$emit('send')
    },
    getErrorMessage(hasError, message) {
      if(this.$v.$dirty && hasError) {
        return message
      }
      return null
    }
  },
  validations: {
    contact: {
      name: {required},
      phone: {
        required,
        isPhone(phone) {
          return /\+7\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d/.test(phone)
        },
      },
    }
  }

}
</script>

<style lang="sass" scoped>
.form
  & > * + *
    margin-top: 15px

</style>