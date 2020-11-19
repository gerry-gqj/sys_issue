<template>
  <div>
    <el-container>
      <!-- Issue No输入框 -->
      <div class="inputFrame">
        用户ID:
        <el-autocomplete
          v-model="UserId"
          :fetch-suggestions="querySearch1"
          placeholder="请输入用户ID"
          style="width: 200px; height: 22.5px"
          @select="handleSelect"
          maxlength="30"
        ></el-autocomplete>
      </div>
      <div class="inputFrame">
        用户姓名:
        <el-autocomplete
          v-model="UserName"
          :fetch-suggestions="querySearch2"
          placeholder="请输入用户姓名"
          style="width: 200px; height: 22.5px"
          @select="handleSelect"
          maxlength="30"
        ></el-autocomplete>
      </div>

      <div class="button">
        <el-button type="primary" @click="gocount">查询</el-button>
        <el-button>清空</el-button>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gocount() {
      window.location.href = "./count";
    },
  },
};
</script>