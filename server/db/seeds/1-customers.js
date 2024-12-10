export async function seed(knex) {
  await knex('customers').insert([
    {
      name: 'The Library',
      id: '1',
      phone: '+64-555-0101',
      email: 'alison.chains@example.com',
    },
    {
      name: "Bill O'Smiley",
      id: '2',
      phone: '+64-555-0102',
      email: 'bill.o.smiley@example.com',
    },
    {
      name: 'Charlie Davis',
      id: '3',
      phone: '+64-555-0103',
      email: 'charlie.davis@example.com',
    },
    {
      name: 'Diana Green',
      id: '4',
      phone: '+64-555-0104',
      email: 'diana.green@example.com',
    },
    {
      name: 'Ethan White',
      id: '5',
      phone: '+64-555-0105',
      email: 'ethan.white@example.com',
    },
    {
      name: 'Fiona Black',
      id: '6',
      phone: '+64-555-0106',
      email: 'fiona.black@example.com',
    },
    {
      name: 'George Clark',
      id: '7',
      phone: '+64-555-0107',
      email: 'george.clark@example.com',
    },
    {
      name: 'Hannah Lewis',
      id: '8',
      phone: '+64-555-0108',
      email: 'hannah.lewis@example.com',
    },
    {
      name: 'Isaac Walker',
      id: '9',
      phone: '+64-555-0109',
      email: 'isaac.walker@example.com',
    },
    {
      name: 'Jack Harris',
      id: '10',
      phone: '+64-555-0110',
      email: 'jack.harris@example.com',
    },
  ])
}
