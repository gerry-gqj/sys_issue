<template>
  <div>
    <!-- <h3 style="text-align: center">Issue 查询</h3>
    <hr style="border: 1px dashed #000; height: 1px" /> -->
    <hr />
    <el-row :gutter="0">
      <el-col :span="6" :offset="1">
        <div class="grid-content bg-purple">
          <!-- Issue No
          <el-input v-model="issueno"
                    placeholder=""
                    style="text-align:center; width:150px"
                    maxlength="30"
                    clearable></el-input> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="Issue No">
              <el-input
                v-model="formLabelAlign.issueno"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                show-word-limit
              ></el-input>
            </el-form-item>
            <el-form-item label="创建人">
              <el-input
                v-model="formLabelAlign.createtor"
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
          <!-- <span>Issue状态<el-select v-model="issuserank"
                       placeholder="请选择"
                       style="text-align:center; width:150px"
                       clearable>
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select></span> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="Issue状态">
              <el-select
                v-model="formLabelAlign.issuserank"
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
            <el-form-item label="修改人" v-if="this.role == '普通员工'">
              <el-input
                v-model="formLabelAlign.modifier"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
                disabled
              ></el-input>
            </el-form-item>
            <el-form-item label="修改人" v-else>
              <el-input
                v-model="formLabelAlign.modifier"
                placeholder="请输入"
                style="text-align: center; width: 200px"
                maxlength="30"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple">
          <!-- <span>
            创建时间
            <el-date-picker v-model="createtime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span> -->
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="创建时间">
              <el-date-picker
                v-model="formLabelAlign.createtime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign.createtimeto)"
                style="text-align: center; width: 150px"
                clearable
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="修改时间">
              <el-date-picker
                v-model="formLabelAlign.changetime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0(formLabelAlign.changetimeto)"
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
            :model="formLabelAlign"
          >
            <el-form-item label="至">
              <el-date-picker
                v-model="formLabelAlign.createtimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign.createtime)"
                style="text-align: center; width: 150px"
                clearable
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="至">
              <el-date-picker
                v-model="formLabelAlign.changetimeto"
                type="date"
                placeholder="至"
                :picker-options="pickerOptione0(formLabelAlign.changetime)"
                style="text-align: center; width: 150px"
                clearable
                maxlength="30"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-form>
          <!-- <span>至
            <el-date-picker v-model="createtimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span> -->
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="0">
      <el-col :span="6"
              offset="1">
        <div class="grid-content bg-purple">
          <span>创建人
            <el-input v-model="createtor"
                      style="text-align:center; width:150px"
                      clearable
                      maxlength="30px"></el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <span><span>修改人</span>
            <el-input v-model="modifier"
                      style="text-align:center; width:150px"
                      clearable
                      maxlength="10"></el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>修改时间&#12288;
            <el-date-picker v-model="changetime"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable></el-date-picker>
          </span>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <span>至
            <el-date-picker v-model="changetimeto"
                            type="date"
                            placeholder="选择日期"
                            :picker-options="pickerOptions0"
                            style="text-align:center; width:150px"
                            clearable
                            maxlength="30"></el-date-picker>
          </span>
        </div>
      </el-col>
    </el-row> -->
    <div>
      <el-col
        :xs="22"
        :sm="22"
        :md="22"
        :lg="22"
        :xl="22"
        style="text-align: center"
      >
        <div class="button">
          <el-button type="primary" @click="searchIssue">查询</el-button>
          <el-button @click="clearvalues">清空</el-button>
        </div>
      </el-col>
    </div>
    <div>
      <el-row>
        <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
          <h1>Issue 列表</h1>
        </el-col></el-row
      >
    </div>
    <div>
      <!-- 路由容器 -->
      <!-- <router-view /> -->

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
              :data="
                tableData.slice(
                  (currentPage - 1) * pageSize,
                  currentPage * pageSize
                )
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
              <el-table-column prop="userID" v-else label="修改人">
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
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :append-to-body="true"
                  >
                    <div>
                      <!-- <div class="radio">
  =======
          <p>Issue 列表</p>
          <el-container>
            <el-table :data="
                tableData.slice(
                  (currentPage - 1) * pageSize,
                  currentPage * pageSize
                )
              "
                      style="width: 100%"
                      :header-cell-style="getRowClass">
              <el-table-column type="selection"></el-table-column>
              <el-table-column type="index"
                               label="序号"></el-table-column>
              <el-table-column prop="issueID"
                               label="Issue ID"> </el-table-column>
              <el-table-column prop="title"
                               label="Issue 标题"> </el-table-column>
              <el-table-column prop="creater"
                               label="创建人"> </el-table-column>
              <el-table-column prop="createtime"
                               label="创建时间">
              </el-table-column>
              <el-table-column prop="name"
                               label="修改人"> </el-table-column>

              <el-table-column prop="issuestate"
                               label="Issue 状态">
              </el-table-column>
              <el-table-column prop="plantime"
                               label="计划完成时间">
              </el-table-column>
              <el-table-column prop="acttime"
                               label="实际完成时间">
              </el-table-column>
              <el-table-column fixed="right"
                               label="操作"
                               width="100">
                <template>
                  <el-button @click="dialogVisible = true"
                             type="text"
                             size="small">详情</el-button>
                  <el-dialog title="提示"
                             :visible.sync="dialogVisible"
                             width="30%"
                             :append-to-body="true">
                    <div>
                      <!-- <div class="radio">
  >>>>>>> 1db679dd441edd578fcbf06b5e0d1e3d7bc7be31
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>

    </div> -->
                      <el-timeline :reverse="reverse">
                        <el-timeline-item
                          v-for="(activity, index) in activities"
                          :key="index"
                          :timestamp="activity.timestamp"
                        >
                          {{ activity.content }}
                        </el-timeline-item>
                      </el-timeline>
                    </div>

                    <span slot="footer" class="dialog-footer">
                      <el-button type="primary" @click="dialogVisible = false"
                        >关 闭</el-button
                      >
                    </span>
                  </el-dialog>
                  <el-button type="text" size="small">修改</el-button>
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
              :total="tableData.length"
            >
            </el-pagination
          ></el-col>
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
      formLabelAlign: {
        issueno: "",
        issuserank: "",
        createtime: "",
        createtimeto: "",
        createtor: "",
        modifier: "",
        changetime: "",
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
      role: "",
      userid: "",
      username: "",
      currentPage: 1, // 当前页码
      total: 0, // 总条数
      pageSize: 20, // 每页的数据条数
      pickerOptions0(val) {
        return {
          disabledDate(time) {
            return time.getTime() > new Date(val).getTime();
          },
        };
      },
      pickerOptione0(val) {
        return {
          disabledDate(time) {
            return time.getTime() < new Date(val).getTime();
          },
        };
      },
    };
  },
  mounted() {
    this.userid = localStorage.getItem("userID");
    this.username = localStorage.getItem("username");
    this.role = localStorage.getItem("role");
    console.log(this.userid);
    console.log(this.username);
    console.log(this.role);
    console.log(this.role != "普通员工");
    if (this.role != "普通员工") {
      this.getIssues();
    } else {
      this.searchIssue();
    }
  },
  methods: {
    getIssues() {
      this.$axios
        .get("http://120.78.176.2:8080/issue/selectIssueAll", {
          params: {
            pageNum: this.currentPage,
            pageSize: 999,
          },
        })
        .then((res) => {
          this.tableData = res.data.list;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchIssue() {
      this.$axios
        .get("http://120.78.176.2:8080/issue/selectLikeIssue", {
          params: {
            issueID: this.formLabelAlign.issueno,
            issuestate: this.formLabelAlign.issuserank,
            creater: this.formLabelAlign.createtor,
            createtime: this.formLabelAlign.createtime,
            createtime1: this.formLabelAlign.createtimeto,
            plantime: this.formLabelAlign.changetime,
            plantime1: this.formLabelAlign.changetimeto,
            userID: this.userid,
            pageNum: this.currentPage,
            pageSize: 999,
          },
        })
        .then((res) => {
          this.tableData = res.data.list;
          this.formLabelAlign.modifier = this.userid;
          console.log(this.tableData);
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
    golist() {
      // this.$router.push("/main/check/list");
      // window.location.href = "/main/check/list";
    },
    clearvalues() {
      this.formLabelAlign = "";
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
