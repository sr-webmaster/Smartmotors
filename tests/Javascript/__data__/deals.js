export const FIXTURE_DEALS = [{
  id: 1,
  uuid: 1,
  name: 'Test Name',
  customer: { first_name: 'Gordon', last_name: 'Cooper', id: '123' },
  manager: { first_name: 'Wally', last_name: 'Schirra', id: '1234' },
  salesrep: { first_name: 'Deke', last_name: 'Slayton', id: '12345' },
  internet_coordinator: { first_name: 'Elliot', last_name: 'See', id: '123456' },
  fi_manager: { first_name: 'Scott', last_name: 'Carpenter', id: '1234567' },
  created_at: '2020-03-06T00:49:23.000Z',
  source: 'cars.com',
  type_id: 1,
  estimate: '25000',
  status_id: 1,
  deal_pbs_id: '632478e324c6',
  age: '3 minutes, 16 hours and 4 days',
  notes: 'The process was repeated with a second group of 34 candidates a week later. Of the 69, six were found to be over the height limit, 15 were eliminated for other reasons, and 16 declined.'
}]

export const FIXTURE_DEAL = FIXTURE_DEALS[0]

export const FIXTURE_DEALS_RESPONSE = {
  data: FIXTURE_DEALS,
  links: {
    first: '/api/users?page%5Bsize%5D=10&page%5Bnumber%5D=1',
    last: '/api/users?page%5Bsize%5D=10&page%5Bnumber%5D=8',
    prev: null,
    next: '/api/users?page%5Bsize%5D=10&page%5Bnumber%5D=2'
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 8,
    path: '/api/users',
    per_page: 10,
    to: 10,
    total: 79
  }
}

export const FIXTURE_DEALS_VISIBILITY = [
  'status',
  'name',
  'customer',
  'age',
  'source',
  'sales_manager',
  'salesrep'
]
