<template>
 <div class="container">
    <BaseButton
      @click="showAddContactModal"
    >Добавить контакт</BaseButton>
    <ContactsTable />
    <BaseModal
      v-if="isShowAddContactModal"
      @close="unshowAddContactModal"
    >
      hello
    </BaseModal>
 </div>
</template>

<script>
import ContactsTable from '@/components/ContactsTable'

export default {
  name: 'index',
  components: {
    ContactsTable,
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
  }
}
</script>
