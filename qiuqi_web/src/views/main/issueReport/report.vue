<style>
</style>
<template>
  <div>
    <h1>issue 报表</h1>
    <el-container>
      <el-table
        :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
        style="width: 100%"
        :header-cell-style="getRowClass"
      >
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="userID" label="用户 ID"> </el-table-column>
        <el-table-column prop="name" label="用户姓名"> </el-table-column>
        <el-table-column prop="creation" label="创建Issue数"> </el-table-column>
        <el-table-column prop="recived" label="收到Issue数"> </el-table-column>
        <el-table-column prop="resolved" label="修改Issue数"> </el-table-column>
        <el-table-column prop="closed" label="关闭Issue数"> </el-table-column>
        <el-table-column prop="completion" label="完成率"> </el-table-column>
      </el-table>
    </el-container>
    <div class="paginationClass">
      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      // UserId: "",
      // UserName: "",
      tableData: [
        {
          id: "20201117",
          name: "xxxxxx",
          createIs: "11",
          receiveIs: "2",
          changeIs: "3",
          complete: "xx",
        },
        {
          id: "20201117",
          name: "xxxxxx",
          createIs: "11",
          receiveIs: "2",
          changeIs: "3",
          complete: "xx",
        },
      ],
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 5, // 每页的数据条数
    };
  },
  mounted() {
    this.getIssues(this);
  },
  methods: {
    getIssues(that) {
      this.$axios
        .get("http://120.78.176.2:8080/issue/selectissuecount", {
          params: {
            pageNum: this.currentPage,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          this.tableData = res.data.list;
          this.total = res.data.total;
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    },
    getRowClass({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#81BEF7";
      } else {
        return "";
      }
    },

    //   querySearch1(queryString, cb) {
    //     const IDs = this.IDs;
    //     const results = queryString
    //       ? IDs.filter(this.createFilter(queryString))
    //       : IDs;
    //     // 调用 callback 返回建议列表的数据
    //     cb(results);
    //   },
    //   querySearch2(queryString, cb) {
    //     const names = this.names;
    //     const results = queryString
    //       ? names.filter(this.createFilter(queryString))
    //       : names;
    //     // 调用 callback 返回建议列表的数据
    //     cb(results);
    //   },
    //   createFilter(queryString) {
    //     return (ID) => {
    //       return ID.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
    //     };
    //   },
    //   loadAll1() {
    //     return [
    //       { value: "1" },
    //       { value: "2" },
    //       { value: "3" },
    //       { value: "11" },
    //       { value: "111" },
    //       { value: "6" },
    //       { value: "77" },
    //     ];
    //   },
    //   loadAll2() {
    //     return [
    //       { value: "Tony" },
    //       { value: "LaoWang" },
    //       { value: "Pm" },
    //       { value: "BA" },
    //       { value: "Java" },
    //       { value: "C" },
    //       { value: "Tom" },
    //     ];
    //   },
    //   handleSelect(item) {
    //     console.log(item);
    //   },
    // },
    // resetForm() {
    //     this.resetFields();
    //    },

    //
  },
};
</script>
