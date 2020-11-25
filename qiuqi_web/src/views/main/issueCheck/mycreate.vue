// Issue查询
// 普通用户--只能查看自己创建的issue，并且接受修改人的修改并进行验证来决定issue是退回还是关闭
// 经理--可以查看所有的issue条目
// Admin--可以查看所有的用户的issue信息，并且可以修改
<template>
  <div>
    <el-row :gutter="0">
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign1"
            ref="formLabelAlignref1"
          >
            <el-form-item label="Issue No" prop="issueno">
              <el-input
                v-model="formLabelAlign1.issueno"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="创建人" v-if="this.role == '普通员工'" prop>
              <el-input
                v-model="formLabelAlign1.createtor"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                show-word-limit
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="创建人" v-else prop="createtor">
              <el-input
                v-model="formLabelAlign1.createtor"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign2"
            ref="formLabelAlignref2"
          >
            <el-form-item label="Issue状态" prop="issuserank">
              <el-select
                v-model="formLabelAlign2.issuserank"
                placeholder="请选择"
                style="text-align: center; width: 200px"
                clearable
              >
                <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="修改人">
              <el-input
                v-model="formLabelAlign2.modifier"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign3"
            ref="formLabelAlignref3"
          >
            <el-form-item label="创建时间" prop="createtime">
              <el-date-picker
                v-model="formLabelAlign3.createtime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign4.createtimeto)"
                style="text-align: center; width: 150px"
                clearable
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="修改时间" prop="changetime">
              <el-date-picker
                v-model="formLabelAlign3.changetime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign4.changetimeto)"
                style="text-align: center; width: 150px"
                clearable
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign4"
            ref="formLabelAlignref4"
          >
            <el-form-item label="至" prop="createtimeto">
              <el-date-picker
                v-model="formLabelAlign4.createtimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign3.createtime)"
                style="text-align: center; width: 150px"
                clearable
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="至" prop="changetimeto">
              <el-date-picker
                v-model="formLabelAlign4.changetimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign3.changetime)"
                style="text-align: center; width: 150px"
                clearable
                maxlength="30"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-row>
        <el-col
          :xs="22"
          :sm="22"
          :md="22"
          :lg="22"
          :xl="22"
          style="text-align: center"
        >
          <div class="button">
            <el-button type="primary" @click="searchClick"
              >查询</el-button
            >
            <el-button @click="clearvalues">清空</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <h1>Issue 列表</h1>
        </el-col>
      </el-row>
    </div>
    <div>
      <div>
        <el-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="24"
          :xl="24"
          style="text-align: center"
        >
          <el-container>
            <el-table
              border
              :data="
                tableData
              "
              style="width: 100%"
              :header-cell-style="getRowClass"
            >
              <el-table-column type="selection"></el-table-column>
              <el-table-column type="index" label="序号"></el-table-column>
              <el-table-column prop="issueID" label="Issue ID">
              </el-table-column>
              <el-table-column prop="title" label="Issue 标题">
              </el-table-column>
              <el-table-column prop="creater" label="创建人"> </el-table-column>
              <el-table-column prop="createtime" label="创建时间">
              </el-table-column>
              <el-table-column
                prop="name"
                v-if="this.role == '普通员工'"
                label="修改人"
              >
              </el-table-column>
              <el-table-column prop="name" v-else label="修改人">
              </el-table-column>
              <el-table-column prop="issuestate" label="Issue 状态">
              </el-table-column>
              <el-table-column prop="plantime" label="计划完成时间">
              </el-table-column>
              <el-table-column prop="acttime" label="实际完成时间">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="100">
                <template>
                  <el-button
                    @click="dialogVisible = true"
                    type="text"
                    size="small"
                    >详情</el-button
                  >
                  <el-dialog
                    title="Issue详情"
                    :visible.sync="dialogVisible"
                    width="50%"
                    :append-to-body="true"
                  >
                    <div>
                      <p>Issue名称：{{ test }}</p>
                      <p>解决方案：{{ solutePlan }}</p>
                    </div>
                    <!-- <el-timeline :reverse="reverse">
                      <el-timeline-item
                        v-for="(activity, index) in activities"
                        :key="index"
                        :timestamp="activity.timestamp"
                      >
                        {{ activity.content }}
                      </el-timeline-item>
                    </el-timeline> -->

                    <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="dialogVisible = false"
                        >关 闭</el-button
                      >
                    </span>
                  </el-dialog>
                  <el-button type="text" size="small" @click="operate = true"
                    >操作</el-button
                  >

                  <!-- 操作          ------------->

                  <el-dialog
                    title="操作"
                    :visible.sync="operate"
                    width="20%"
                    :append-to-body="true"
                  >
                    <div style="text-align: center">
                      <el-button type="primary" round>退回修改</el-button>
                      <el-button type="primary" round>关闭issue</el-button>
                    </div>

                    <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="operate = false"
                        >关 闭</el-button
                      >
                    </span>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
          </el-container>
        </el-col>
        <div class="paginationClass">
          <el-col
            :xs="24"
            :sm="24"
            :md="24"
            :lg="24"
            :xl="24"
            style="text-align: center"
          >
            <el-pagination
              align="center"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[1, 5, 10, 20]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
            >
            </el-pagination>
          </el-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "element-ui";
export default {
  name: "list",
  data() {
    return {
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
      formLabelAlign1: {
        issueno: "",
        createtor: "",
      },
      formLabelAlign2: {
        issuserank: "",
        modifier: "",
      },
      formLabelAlign3: {
        createtime: "",
        changetime: "",
      },
      formLabelAlign4: {
        createtimeto: "",
        changetimeto: "",
      },
      value: "",
      labelPosition: "left",
      dialogVisible: false,
      reverse: true,
      activities: [
        {
          content: "已关闭",
          timestamp: "2018-04-15",
        },
        {
          content: "目前状态：",
          timestamp: "2018-04-13",
        },
        {
          content: "创建issue",
          timestamp: "2018-04-11",
        },
      ],
      tableData: [
        {
          id: "",
          title: "",
          founder: "",
          timecreate: "",
          modifier: "",
          statement: "",
          cmptplan: "",
          cmpttrue: "",
        },
      ],
      role: "",
      userid: "",
      username: "",
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 20, // 每页的数据条数
      pickerOptions0 (val) {
        return {
          disabledDate (time) {
            return time.getTime() > new Date(val).getTime();
          },
        };
      },
      pickerOptione0 (val) {
        return {
          disabledDate (time) {
            return time.getTime() < new Date(val).getTime();
          },
        };
      },
    };
  },
  mounted () {
    this.userid = localStorage.getItem("userID");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role");
    this.formLabelAlign1.createtor = this.username;

    this.searchIssueByLike();
  },
  methods: {
    getIssues () {
      this.$axios
          .get("http://120.78.176.2:8080/issue/findCreateIssue", {
            params: {
              creater:this.formLabelAlign1.createtor,
              pageNum: this.currentPage,
              pageSize: this.pageSize,
            },
          })
          .then((res) => {
            this.total=res.data.total
            console.log('res.data')
            console.log(res.data)
            this.tableData = res.data.list;

          let arr = [];
          for (let i in res.data.list) {
            arr.push(res.data.list[i].name);
          }
          console.log(new Set(arr));
          this.modifierOptions = new Set(arr);
          console.log(this.tableData);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    searchClick(){
      this.currentPage=1
      this.searchIssueByLike()
    },
    searchIssueByLike() {
      console.log(this.formLabelAlign2.modifier)
      this.$axios
        .get("http://120.78.176.2:8080/issue/findLikeNewIssue", {
          params: {
            issueID: this.formLabelAlign1.issueno,
            creater: this.formLabelAlign1.createtor,
            issuestate: this.formLabelAlign2.issuserank,
            userID: this.formLabelAlign2.modifier,
            plantime: this.formLabelAlign3.changetime,
            createtime: this.formLabelAlign3.createtime,
            createtime1: this.formLabelAlign4.createtimeto,
            plantime1: this.formLabelAlign4.changetimeto,
            pageNum: this.currentPage,
            pageSize:  this.pageSize,
          },
        })
        .then((res) => {
          this.total=res.data.total
          this.tableData = res.data.list;
          console.log(this.tableData);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    //当前页改变时触发 跳转其他页
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      this.searchIssueByLike()
    },
    getRowClass ({ rowIndex }) {
      if (rowIndex == 0) {
        return "background:#81BEF7";
      } else {
        return "";
      }
    },
    golist () {
      // this.$router.push("/main/check/list");
      // window.location.href = "/main/check/list";
    },
    clearvalues () {
      this.$refs.formLabelAlignref1.resetFields();
      this.$refs.formLabelAlignref2.resetFields();
      this.$refs.formLabelAlignref3.resetFields();
      this.$refs.formLabelAlignref4.resetFields();
    },
  },
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
#create {
  width: 1000px;
  margin: 50px 150px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
