const MOCK_CONTACTS = [
  {
    id: 1,
    name: 'Имя',
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
          },
          {
            id: 5,
            name: '3 - Имя5',
            phone: '+7',
          }
        ],
      }
    ],
  }
]

export default {
  namespaced: true,
  state: {
    contacts: MOCK_CONTACTS,
  }
}