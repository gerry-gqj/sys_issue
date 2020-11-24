<template>
  <div id="list">
    <p>Issue 列表</p>
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
        <el-table-column prop="issueID" label="Issue ID"> </el-table-column>
        <el-table-column prop="title" label="Issue 标题"> </el-table-column>
        <el-table-column prop="creater" label="创建人"> </el-table-column>
        <el-table-column prop="creation" label="创建时间"> </el-table-column>
        <el-table-column prop="userID" label="修改人"> </el-table-column>
        <el-table-column prop="issuestate" label="Issue 状态"> </el-table-column>
        <el-table-column prop="plantime" label="计划完成时间">
        </el-table-column>
        <el-table-column prop="acttime" label="实际完成时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >详情</el-button
            >
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
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
  name: "list",
  data() {
    return {
      tableData: [
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "待修改",
          cmptplan: "2020-11-17",
          cmpttrue: "2020-11-17",
        },
      ],
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 20, // 每页的数据条数
    };
  },
  mounted() {
    this.getIssues(this)
  },
  methods: {
    getIssues(that){
      this.$axios.get('http://120.78.176.2:8080/issue/selectIssuetask',
          {
            params:
                {
                  pageNum: this.currentPage,
                  pageSize: this.pageSize
                }
          })
          .then( (res)=> {
            this.total=res.data.total
            this.tableData = res.data.list
            console.log(res.data)
          }).catch(function (error) {
        console.log(error)
      })
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
  },
};
</script>

<style>
</style>
