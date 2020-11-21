<template>
  <div>
    <h1>账户管理</h1>
    <el-container>
      <el-table
          :data="
          tableData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
        "
          style="width: 100%"
          :header-cell-style="getRowClass">
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="userID" label="用户 ID"></el-table-column>
        <el-table-column prop="name" label="用户姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="registertime" label="注册时间"></el-table-column>
        <el-table-column prop="role" label="用户身份"></el-table-column>
        <el-table-column prop="userstate" label="账户状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="cancel(scope.row)" type="text" size="small">注销</el-button>
            <el-button @click="manager(scope.row)" type="text" size="small">经理</el-button>
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
  data() {
    return {
      // UserId: "",
      // UserName: "",
      tableData: [
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "激活",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "激活",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "激活",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "激活",
        },
        {
          id: "20201117",
          title: "xxxxxx",
          founder: "xxxxxx",
          timecreate: "2020-11-17",
          modifier: "xxxxxxxx",
          statement: "激活",
        },
      ],
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 20, // 每页的数据条数
    };
  },
  mounted() {
    this.getUserInfo(this)
  },
  methods: {
    getUserInfo(that) {
      this.$axios.get('http://120.78.176.2:8080/user/selectalluser',
          {
            params:
                {
                  pageNum: this.currentPage,
                  pageSize: this.pageSize
                }
          })
          .then(function (res) {
            that.tableData = res.data
            // console.log(res.data)
          }).catch(function (error) {
        console.log(error)
      })
    },
    cancel(index) {
        this.$confirm('确定将' + index.name + '注销吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$axios.post('http://120.78.176.2:8080/user/updateuserstate',
              this.$qs.stringify({
                userID: parseInt(index.userID),
              }))
              .then(() => {
                this.$message({
                  type: 'success',
                  message: '注销成功!'
                });
              })
              .catch(() =>{
                this.$message({
                  type: 'error',
                  message: '注销失败!'
                });
              })
          this.getUserInfo(this)

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消注销'
          })
        })


    },
    manager(index) {
      this.$confirm('确定将' + index.name + '提升为经理吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.post('http://120.78.176.2:8080/user/updaterole',
            this.$qs.stringify({
              userID: parseInt(index.userID),
            }))
            .then((res) => {
              console.log(res.data)
              if(res.data.status==="用户名已被注销，不能修改为经理"){
                this.$message({
                  type: 'error',
                  message: '用户名已被注销，不能修改为经理!'
                });
              }else{
                this.$message({
                  type: 'success',
                  message: '操作成功!'
                });
              }

            })
            .catch(() =>{
              this.$message({
                type: 'error',
                message: '注销失败!'
              });
            })
        this.getUserInfo(this)

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
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
    getRowClass({rowIndex}) {
      if (rowIndex === 0) {
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
    // // resetForm() {
    // //     this.resetFields();
    // //    },
    // mounted() {
    //   this.IDs = this.loadAll1();
    //   this.names = this.loadAll2();
    // },
  },
};
</script>


<style>
</style>
