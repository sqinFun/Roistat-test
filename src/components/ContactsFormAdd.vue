<template>
  <div>
    <div class="form">
      <BaseInput
        title="Имя"

        v-model="contact.name"
      />
      <BaseInput
        title="Телефон"

        v-model="contact.phone"
      />
      <BaseSelect
        title="Начальник"

        :option="contactsWithoutNesting"
        v-model="contact.parent"
      />
      <BaseButton
        @click="addContact"
      >
        Сохранить
      </BaseButton>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: ()=> ({
    contact: {
      name: 'Имя',
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
      this.$store.dispatch('contacts/addContact', this.contact)
    }
  },

}
</script>

<style lang="sass" scoped>
.form
  & > * + *
    margin-top: 15px

</style>