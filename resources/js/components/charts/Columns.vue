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
  mounted () {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart)
    if (this.numberFormat) {
      chart.numberFormatter.numberFormat = this.numberFormat
    }
    chart.data = this.chartData.data

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis())
    categoryAxis.dataFields.category = 'label'
    categoryAxis.renderer.grid.template.location = 0
    categoryAxis.renderer.minGridDistance = 30
    categoryAxis.renderer.labels.template.maxWidth = 70

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.min = 0

    this.chartData.sets.forEach(item => {
      let series = chart.series.push(new am4charts.ColumnSeries())
      series.sequencedInterpolation = true
      series.stacked = true
      series.dataFields.valueY = item.field
      series.dataFields.categoryX = 'label'
      series.columns.template.strokeWidth = 1
      series.columns.template.strokeOpacity = 1
      series.columns.template.stroke = am4core.color(item.color)
      series.columns.template.fill = am4core.color(item.color)
      series.columns.template.tooltipText = `[font-size:14px]${item.field}: {valueY}`
    })
  }
}
</script>

<style scoped>
.chartdiv{
  height: 300px;
}
</style>
