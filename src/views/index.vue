<template>
 <div class="container">
  <ContactsTable />
 </div>
</template>

<script>
import ContactsTable from '@/components/ContactsTable'

export default {
  name: 'index',
  components: {
    ContactsTable,
  }
}
</script>
