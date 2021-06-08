import _ from 'lodash'

const MOCK_CONTACTS = [
  {
    id: 1,
    name: 'Имя',
    phone: '+7123465',
    children: [],
  },
  {
    id: 11123,
    name: 'Имя3',
    phone: '+7123465',
    children: [],
  },
  {
    id: 2,
    name: 'Имя2',
    phone: '+764646',
    children: [
      {
        id: 3,
        name: '2 - Имя3',
        phone: '+7',
        children: [
          {
            id: 4,
            name: '3 - Имя4',
            phone: '+7',
            children: [],
          },
          {
            id: 412142,
            name: '3 - Имя3',
            phone: '+7',
            children: [],
          },
        ],
      }
    ],
  },
  {
    id: 124,
    name: 'имя1',
    phone: '+7123465',
    children: [],
  },
]

export default {
  namespaced: true,
  state: {
    contacts: MOCK_CONTACTS,
  },
  getters: {
    contactsWithoutNesting(state) {
      let cloneContacts = _.cloneDeep(state.contacts)
      let contactArray = []
      let pushContact = (contacts) => {
        contacts.forEach(contact => {
          contactArray.push({
            id: contact.id,
            name: contact.name,
            phone: contact.phone,
          })
          if(contact.children?.length)
            pushContact(contact.children)
        })
      }

      pushContact(cloneContacts)

      return contactArray
    }
  },
  actions: {
    addContact({commit}, contact) {
      commit('addContact', contact)
      console.log()
    }
  },
  mutations: {
    addContact(state, contact) {
      let hasPaent = contact.parent ?? false
      let formatContact = {
        // конечно же так делать нельзя
        id: Date.now(),
        ...contact,
        children: [],
      }

      let addNestedContact = (contacts) => {
        contacts.find((nestedContact) => {
          if(String(nestedContact.id) === String(contact.parent)) {
            nestedContact.children = [...nestedContact.children, formatContact]
            return true
          }
          if(nestedContact.children?.length)
            return addNestedContact(nestedContact.children)
        })
      }

      if(hasPaent) {
        addNestedContact(state.contacts)
      } else {
        state.contacts.push(formatContact)
      }
    },
  }
}