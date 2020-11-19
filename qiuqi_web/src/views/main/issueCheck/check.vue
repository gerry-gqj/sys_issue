<template>
  <div id="centre">
    <h1>issue 查询</h1>
    <el-container>
      <!-- Issue No输入框 -->
      <div class="inputFrame">
        Issue No:
        <el-input
          v-model="input1"
          placeholder="请输入Issue No"
          style="width: 200px; height: 22.5px"
        ></el-input>
      </div>

      <!-- Issue状态选择框 -->
      <div class="selectFrame">
        Issue状态：
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 创建时间选择框 -->
      <div class="createDate">
        <span class="demonstration">创建时间：</span>
        <el-date-picker v-model="value1" type="date" placeholder="">
        </el-date-picker>

        <span>&nbsp;至 &nbsp;</span>

        <el-date-picker v-model="value2" type="date" placeholder="">
        </el-date-picker>
      </div>
    </el-container>

    <!-- 创建人输入框 -->
    <el-container style="margin-left: 100px; margin-top: 50px">
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;创建人:
        <el-input
          v-model="input2"
          placeholder="请输入创建人"
          style="width: 200px; height: 22.5px"
        ></el-input>
      </div>

      <!-- 修改人输入框 -->
      <div class="changer">
        修改人：
        <el-input
          v-model="input3"
          placeholder="请输入修改人"
          style="width: 200px; height: 22.5px"
        ></el-input>
      </div>

      <!-- 修改时间选择框 -->
      <div class="modifyDate">
        <span class="demonstration">修改时间：</span>
        <el-date-picker v-model="value3" type="date" placeholder="">
        </el-date-picker>
        <span>&nbsp;至 &nbsp;</span>
        <el-date-picker v-model="value4" type="date" placeholder="">
        </el-date-picker>
      </div>
    </el-container>

    <div class="button">
      <el-button type="primary" @click="golist">查询</el-button>
      <el-button>清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "centre",
  date() {
    return {};
  },
};
</script>


<style>
.selectFrame {
  margin-left: 100px;
}
.inputFrame {
  margin-left: 100px;
}
.creator {
}
.changer {
  margin-left: 120px;
}
.createDate {
  margin-left: 100px;
}
.modifyDate {
  margin-left: 115px;
}
.button {
  margin-top: 50px;
  text-align: center;
}
</style>
<script>
export default {
  date() {
    return {
      input1: "", //Issue No
      input2: "", //创建人
      input3: "", //修改人
      //Issue状态选择框
      options: [
        {
          value: "选项1",
          label: "待修改",
        },
        {
          value: "选项2",
          label: "待验证",
        },
        {
          value: "选项3",
          label: "已关闭",
        },
      ],
      value: "",
      //创建日期：起始日期选择
      value1: "",
      //创建日期：结束日期选额
      value2: "",
      //修改日期：起始日期选择
      value3: "",
      //修改日期：结束日期选择
      value4: "",
    };
  },
  methods: {
    golist() {
      window.location.href = "./list";
    },
  },
};
</script>