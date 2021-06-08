<template>
 <div class="container">
    <BaseButton
      @click="showAddContactModal"
    >Добавить контакт</BaseButton>
    <BaseButton
      @click="getDemoContacts"
    >Деме данные</BaseButton>
    <ContactsTable />
    <BaseModal
      v-if="isShowAddContactModal"
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
