<template>
 <div class="container">
    <div class="button-list">
      <BaseButton
        @click="showAddContactModal"
      >
        Добавить контакт
      </BaseButton>
      <BaseButton
        @click="getDemoContacts"
      >
        Демо данные
      </BaseButton>
    </div>
    <ContactsTable />
    <BaseModal
      v-if="isShowAddContactModal"
      title="Добавить контакт"
      modalClass="--full"
      @close="unshowAddContactModal"
    >
      <ContactsFormAdd
        @send="unshowAddContactModal"
      />
    </BaseModal>
 </div>
</template>

<script>
import ContactsTable from '@/components/ContactsTable'
import ContactsFormAdd from '@/components/ContactsFormAdd'

export default {
  name: 'index',
  components: {
    ContactsTable,
    ContactsFormAdd,
  },
  data: () => ({
    isShowAddContactModal: false,
  }),
  methods: {
    showAddContactModal() {
      this.isShowAddContactModal = true
    },
    unshowAddContactModal() {
      this.isShowAddContactModal = false
    },
    getDemoContacts() {
      this.$store.dispatch('contacts/mockContacts')
    }
  }
}
</script>

<style lang="sass" scoped>
.button-list
  margin: 30px 0
  & > * + *
    margin-left: 30px


</style>
