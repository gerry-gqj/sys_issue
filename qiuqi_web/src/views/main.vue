<template>
  <div>
    <el-container>
      <!-- header部分 -->
      <el-header>
        <navtop></navtop>
      </el-header>

      <el-container>
        <!-- aside部分 -->
        <leftNav></leftNav>
        <el-card class="box-card">
          <el-main>
            <div>
              <el-tabs v-model="activeIndex"
                       type="border-card"
                       closable
                       v-if="openTab.length"
                       @tab-click='tabClick'
                       @tab-remove='tabRemove'>
                <el-tab-pane :key="item.name"
                             v-for="(item, index) in openTab"
                             :label="item.name"
                             :name="item.route">
                </el-tab-pane>
              </el-tabs>
            </div>
            <!-- main部分 -->
            <router-view />
            <!-- 路由容器 -->
          </el-main>
        </el-card>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import leftNav from "../components/nav.vue";
import navtop from "../components/nav-top.vue";
export default {
  components: {
    navtop,
    leftNav,
  },
  data () {
    return {
    }
  },
  methods: {
    //tab标签点击时，切换相应的路由
    tabClick (tab) {
      console.log("tab", tab);
      console.log('active', this.activeIndex);
      this.$router.push({ path: this.activeIndex });
    },
    //移除tab标签
    tabRemove (targetName) {
      console.log("tabRemove", targetName);
      //首页不删
      if (targetName == '/' || targetName == '/main') {
        return
      }
      this.$store.commit('delete_tabs', targetName);
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          console.log('=============', this.openTab[this.openTab.length - 1].route)
          this.$store.commit('set_active_index', this.openTab[this.openTab.length - 1].route);
          this.$router.push({ path: this.activeIndex });
        } else {
          this.$router.push({ path: '/' });
        }
      }
    }
  },
  mounted () {
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== '/' && this.$route.path !== '/main') {
      console.log('1');
      this.$store.commit('add_tabs', { route: '/main', name: 'main' });
      this.$store.commit('add_tabs', { route: this.$route.path, name: this.$route.name });
      this.$store.commit('set_active_index', this.$route.path);
    } else {
      console.log('2');
      this.$store.commit('add_tabs', { route: '/main', name: 'main' });
      this.$store.commit('set_active_index', '/main');
      this.$router.push('/main');
    }

  },
  computed: {
    openTab () {
      return this.$store.state.openTab;
    },
    activeIndex: {
      get () {
        return this.$store.state.activeIndex;
      },
      set (val) {
        this.$store.commit('set_active_index', val);
      }
    }
  },
  watch: {
    '$route' (to, from) {
      //判断路由是否已经打开
      //已经打开的 ，将其置为active
      //未打开的，将其放入队列里
      let flag = false;
      for (let item of this.openTab) {
        console.log("item.name", item.name)
        console.log("t0.name", to.name)

        if (item.name === to.name) {
          console.log('to.path', to.path);
          this.$store.commit('set_active_index', to.path)
          flag = true;
          break;
        }
      }

      if (!flag) {
        console.log('to.path', to.path);
        this.$store.commit('add_tabs', { route: to.path, name: to.name });
        this.$store.commit('set_active_index', to.path);
      }

    }
  }
};
</script>

<style>
/* * {
  background-color: aqua;
} */
.el-main {
  margin: 0px;
  padding: 0px;
  background-color: #fafafafd;
}
.el-header,
.el-footer {
  background-color: white;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f1f1;
}
.el-container {
  height: 100%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  padding: 10px;
  margin: 10px;
}
</style>