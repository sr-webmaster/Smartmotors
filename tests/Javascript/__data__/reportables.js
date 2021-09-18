import { FIXTURE_MODIFIER_AUTOCOMPLETE, FIXTURE_MODIFIER_SELECT, FIXTURE_MODIFIER_DATE, FIXTURE_MODIFIER_TEXT } from './modifiers'

const filterFleetMember = {
  label: 'Fleet Member',
  value: 1
}

const filterEvent = {
  label: 'Event',
  value: [2, 3]
}

export const FIXTURE_REPORTABLES = [
  {
    id: 4,
    name: 'Custom Report #1',
    filters: { fleet_member_uuid: filterFleetMember, date_after: '2019-01-01', date_before: '2019-06-01' },
    modifier_1: FIXTURE_MODIFIER_AUTOCOMPLETE,
    modifier_2: FIXTURE_MODIFIER_SELECT
  },
  { id: 2, name: 'Custom Report #2', filters: { event: filterEvent }, modifier_1: FIXTURE_MODIFIER_AUTOCOMPLETE, modifier_2: FIXTURE_MODIFIER_DATE },
  {
    id: 1,
    name: 'Custom Report #3',
    filters: { date_after: '2019-01-01', date_before: '2019-06-01' },
    modifier_1: FIXTURE_MODIFIER_SELECT,
    modifier_2: FIXTURE_MODIFIER_AUTOCOMPLETE
  },
  {
    id: 11,
    name: 'Search 1',
    filters: { fleet_member: filterFleetMember, event: filterEvent, price_range: [100000, 200000] },
    modifier_1: FIXTURE_MODIFIER_DATE,
    modifier_2: FIXTURE_MODIFIER_TEXT
  },
  {
    id: 12,
    name: 'Best trucks',
    filters: { fleet_member: filterFleetMember, event: filterEvent, price_range: [100000, null] },
    modifier_1: FIXTURE_MODIFIER_DATE
  },
  {
    id: 13,
    name: 'Best trucks EVER',
    filters: { fleet_member: filterFleetMember, event: filterEvent, price_range: [null, 100000] },
    modifier_1: FIXTURE_MODIFIER_AUTOCOMPLETE,
    modifier_2: FIXTURE_MODIFIER_TEXT
  },
  {
    id: 14,
    name: 'Custom Financial Report #1',
    filters: { company_uuid: 4, prepared_after: '2019-01-01', prepared_before: '2019-07-01' },
    modifier_1: FIXTURE_MODIFIER_SELECT,
    modifier_2: FIXTURE_MODIFIER_TEXT
  },
  {
    id: 15,
    name: 'Testing for null filter',
    filters: { key: null },
    modifier_1: FIXTURE_MODIFIER_SELECT,
    modifier_2: FIXTURE_MODIFIER_TEXT
  }
]

export const FIXTURE_REPORTABLES_RESPONSE = {
  data: FIXTURE_REPORTABLES,
  links: {
    first: 'http://foodfleet.localdev.com/api/foodfleet/financial-reports?page%5Bsize%5D=10&page%5Bnumber%5D=1',
    last: 'http://foodfleet.localdev.com/api/foodfleet/financial-reports?page%5Bsize%5D=10&page%5Bnumber%5D=8',
    prev: null,
    next: 'http://foodfleet.localdev.com/api/foodfleet/financial-reports?page%5Bsize%5D=10&page%5Bnumber%5D=2'
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 8,
    path: 'http://foodfleet.localdev.com/api/foodfleet/financial-reports',
    per_page: 10,
    to: 10,
    total: 79
  }
}
