export const FIXTURE_MODIFIER_AUTOCOMPLETE = {
  id: 1,
  name: 'event_uuid',
  resource_name: 'events',
  label: 'Event',
  placeholder: 'All events',
  type: 'autocomplete',
  filter: 'name'
}

export const FIXTURE_MODIFIER_SELECT = {
  id: 2,
  name: 'payment_uuid',
  resource_name: 'payment_types',
  label: 'Payment type',
  placeholder: 'All payment types',
  type: 'select'
}

export const FIXTURE_MODIFIER_DATE = {
  id: 3,
  name: 'date_after',
  resource_name: 'date_after',
  label: 'Min Date',
  placeholder: 'Any',
  type: 'date'
}

export const FIXTURE_MODIFIER_TEXT = {
  id: 4,
  name: 'min_price',
  resource_name: null,
  label: 'Min price',
  placeholder: 'Min price',
  type: 'text'
}

export const FIXTURE_FINANCIAL_MODIFIERS = [
  FIXTURE_MODIFIER_AUTOCOMPLETE,
  FIXTURE_MODIFIER_SELECT,
  FIXTURE_MODIFIER_DATE,
  FIXTURE_MODIFIER_TEXT
]
