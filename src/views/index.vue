<template>
 <div class="container">
    <BaseButton
      @click="showAddContactModal"
    >Добавить контакт</BaseButton>
    <ContactsTable />
    <BaseModal
      v-if="isShowAddContactModal"
      modalClass="--full"
      @close="unshowAddContactModal"
    >
      <ContactsFormAdd />
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
    isShowAddContactModal: true,
  }),
  methods: {
    showAddContactModal() {
      this.isShowAddContactModal = true
    },
    unshowAddContactModal() {
      this.isShowAddContactModal = false
    },
  }
}
</script>
