import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Registered from "../views/Registered.vue";
// import Main from '../views/main.vue'
// import Centre from '../views/main/centre.vue'
// import Order from '../views/main/order.vue'

// import Check from '../views/main/check.vue'
// import List from '../views/main/list.vue'
// import Count from '../views/main/count.vue'
// import Create from '../views/main/create.vue'
// import Table from '../views/main/table.vue'

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import("../views/Home.vue")
  },

  {
    path: "/Login",
    name: "Login",
    component: () =>
      import("../views/Login.vue")
  },
  {
    path: "/Registered",
    name: "Registered",
    component: () =>
      import("../views/Registered.vue")
  },
  {
    path: '/main',
    name: 'Main',
    component: () =>
      import("../views/main.vue"),
    children: [
      // 创建issue
      {
        path: '/create',
        name: 'Create',
        component: () =>
          import("../views/main/createIssue/create.vue"),
      },
      // issue查询
      {
        path: '/check',
        name: 'Check',
        component: () =>
          import("../views/main/issueCheck/check.vue"),
      },
      {
        path: '/list',
        name: 'List',
        component: () =>
          import("../views/main/issueCheck/list.vue"),
      },

      // 账户管理
      {
        path: '/count',
        name: 'Count',
        component: () =>
          import("../views/main/countManage/count.vue"),
      },
      {
        path: '/countcheck',
        name: 'Countcheck',
        component: () =>
          import("../views/main/countManage/countCheck.vue"),
      },
      // issue报表
      {
        path: '/report',
        name: 'Report',
        component: () =>
          import("../views/main/issueReport/report.vue"),
      },
      {
        path: '/reportcheck',
        name: 'Reportcheck',
        component: () =>
          import("../views/main/issueReport/reportCheck.vue"),
      },
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
