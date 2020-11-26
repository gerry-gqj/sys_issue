<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="18"
              :offset="2">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div id="graph1"
                 :style="{width: '800px', height: '300px'}"></div>
            <!-- <div slot="header"
                 class="clearfix">
              <span>我的创建的 Issue</span>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{ "列表内容 " + o }}
            </div> -->
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="0">
      <el-col :span="8"
              :offset="2">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div id="graph2"
                 :style="{width: '400px', height: '300px'}"></div>
            <!-- <div slot="header"
                 class="clearfix">
              <span>我的创建的 Issue</span>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{ "列表内容 " + o }}
            </div> -->
          </el-card>
        </div>
      </el-col>
      <el-col :span="8"
              :offset="2">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <!-- <div slot="header"
                 class="clearfix">
              <span>我的创建的 Issue</span>
            </div>
            <div v-for="o in 4"
                 :key="o"
                 class="text item">
              {{ "列表内容 " + o }}
            </div> -->
            <div id="graph3"
                 :style="{width: '400px', height: '300px'}"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine();
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let graph1 = this.$echarts.init(document.getElementById('graph1'))
      let graph2 = this.$echarts.init(document.getElementById('graph2'))
      let graph3 = this.$echarts.init(document.getElementById('graph3'))
      // 绘制图表
      graph1.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
      graph2.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
      graph3.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style>
</style>