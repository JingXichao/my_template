<template>
  <div class="chart-container">
    Dashboard
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
  import { getPie3D, getParametricEquation } from './chart.js' //工具类js，页面路径自己修改

  const color = ['#005aff', '#f8b551']

  export default {
    name: 'Chart',
    data() {
      return {
        optionData: [
          {
            name: '启用电梯',
            value: 176,
          },
          {
            name: '停用电梯',
            value: 288,
          },
        ],
        statusChart: null,
        option: {},
      }
    },
    created() {
      // this.setLabel()
    },
    mounted() {
      // this.initChart()
      // //根据窗口变化自动调节图表大小
      // const that = this
      // window.onresize = function () {
      //   that.changeSize()
      // }
    },
    methods: {
      // 初始化label样式
      setLabel() {
        this.optionData.forEach((item, index) => {
          item.itemStyle = {
            color: color[index],
          }
          item.label = {
            normal: {
              show: true,
              color: color[index],
              formatter: ['{b|{b}}', '{c|{c}}{b|台}', '{d|{d}%}'].join('\n'), // 用\n来换行
              rich: {
                b: {
                  color: '#fff',
                  lineHeight: 25,
                  align: 'left',
                },
                c: {
                  fontSize: 22,
                  color: '#fff',
                  textShadowColor: '#1c90a6',
                  textShadowOffsetX: 0,
                  textShadowOffsetY: 2,
                  textShadowBlur: 5,
                },
                d: {
                  color: color[index],
                  align: 'left',
                },
              },
            },
          }
          item.labelLine = {
            normal: {
              lineStyle: {
                width: 1,
                color: 'rgba(255,255,255,0.7)',
              },
            },
          }
        })
      },
      // 图表初始化
      initChart() {
        this.statusChart = this.$echarts.init(this.$refs.chart)
        // 传入数据生成 option, 构建3d饼状图, 参数工具文件已经备注的很详细
        this.option = getPie3D(this.optionData, 0.8, 160, 30, 30, 0.8)
        this.statusChart.setOption(this.option)
        // 是否需要label指引线，如果要就添加一个透明的2d饼状图并调整角度使得labelLine和3d的饼状图对齐，并再次setOption
        this.option.series.push({
          name: '电梯状态', //自己根据场景修改
          backgroundColor: 'transparent',
          type: 'pie',
          label: {
            opacity: 1,
            fontSize: 13,
            lineHeight: 20,
          },
          startAngle: -40, // 起始角度，支持范围[0, 360]。
          clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
          radius: ['20%', '50%'],
          center: ['50%', '50%'],
          data: this.optionData,
          itemStyle: {
            opacity: 0, //这里必须是0，不然2d的图会覆盖在表面
          },
        })
        this.statusChart.setOption(this.option)
      },
      // 自适应宽高
      changeSize() {
        this.statusChart.resize()
      },
    },
  }
</script>

<style lang="scss" scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: 500px;

    .chart {
      width: 100%;
      height: 500px;
    }
  }
</style>
