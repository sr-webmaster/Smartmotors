<template>
  <div
    ref="chartdiv"
    class="chartdiv"
  />
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themesAnimated)

export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
    numberFormat: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    chartData () {
      this.render()
    }
  },
  mounted () {
    this.render()
  },
  methods: {
    render () {
      if (!this.chart) this.chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart)
      if (this.numberFormat) {
        this.chart.numberFormatter.numberFormat = this.numberFormat
      }
      this.chart.legend = new am4charts.Legend()
      this.chart.legend.position = 'right'
      this.chart.data = this.chartData.data
      this.chart.innerRadius = am4core.percent(30)

      if (!this.chart.series.length) {
        let series = this.chart.series.push(new am4charts.PieSeries())
        series.dataFields.value = 'value'
        series.dataFields.category = 'label'
        series.labels.template.disabled = true
        series.colors.list = [
          am4core.color('#9dbd81'),
          am4core.color('#dcb877'),
          am4core.color('#c47c7c'),
          am4core.color('#aa99be'),
          am4core.color('#7e99da'),
          am4core.color('#d64400')
        ]
      }
    }
  }
}
</script>

<style scoped>
.chartdiv{
  height: 320px;
}
</style>
