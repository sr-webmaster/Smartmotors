<script>
import get from 'lodash/get'
import FormatMoney from '@freshinup/core-ui/src/mixins/FormatMoney'

export default {
  mixins: [ FormatMoney ],
  props: {
    pbsData: {
      type: Object,
      default: () => ({})
    },
    vehicles: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    vehicle () {
      const id = this.pbsData.VehicleRef
      return get(this.vehicles.find(item => item._source.VehicleId === id), '_source', {})
    },
    vehicleName () {
      return get(this.vehicle, 'Make', '') + ' ' +
        get(this.vehicle, 'Model', '') + ' ' +
        get(this.vehicle, 'Year', '')
    }
  },
  methods: {
    get
  }
}
</script>
