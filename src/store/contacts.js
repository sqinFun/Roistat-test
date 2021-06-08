import _ from 'lodash'

const MOCK_CONTACTS = [
  {
    id: 4124,
    name: 'Имя2',
    phone: '+7 (311) 111-11-11',
    children: [],
  },
  {
    id: 12,
    name: 'Имя1',
    phone: '+7 (111) 111-11-11',
    children: [],
  },
  {
    id: 512351,
    name: 'Имя3',
    phone: '+7 (211) 111-11-11',
    children: [],
  },
  {
    id: 2,
    name: 'Имя2',
    phone: '+7 (211) 111-11-11',
    children: [
      {
        id: 3,
        name: '2 - Имя3',
        phone: '+7 (211) 111-11-11',
        children: [
          {
            id: 4,
            name: 'Имя2',
            phone: '+7 (411) 111-11-11',
            children: [],
          },
          {
            id: 412142,
            name: 'Имя1',
            phone: '+7 (111) 111-11-11',
            children: [],
          },
        ],
      }
    ],
  },
  {
    id: 124,
    name: 'имя1',
    phone: '+7 (811) 111-11-11',
    children: [],
  },
  {
    id: 641,
    name: 'Имя1.2',
    phone: '+7 (211) 111-11-11',
    children: [],
  },
]

export default {
  namespaced: true,
  state: {
    contacts: [],
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
    addContact({commit, dispatch}, contact) {
      commit('addContact', contact)
      // Настоящий запрос я бы выполнил первым
      // а тут у нас клиент как источник истины
      dispatch('setContactInLocalStorage')
    },
    setContactInLocalStorage({state}) {
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    },
    getContactInLocalStorage({commit}) {
      let contactList = localStorage.getItem('contacts')
      if(contactList)
        commit('setContactList', JSON.parse(contactList))
    },
    mockContacts({commit, state}) {
      commit('setContactList', MOCK_CONTACTS)
      localStorage.setItem('contacts', JSON.stringify(state.contacts))
    }
  },
  mutations: {
    addContact(state, contact) {
      let hasParent = contact.parent ?? false
      let formatContact = {
        ...contact,
        // конечно же так делать нельзя
        id: Date.now(),
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

      if(hasParent) {
        addNestedContact(state.contacts)
      } else {
        state.contacts.push(formatContact)
      }
    },
    setContactList(state, contacts) {
      state.contacts = _.cloneDeep(contacts)
    }
  }
}