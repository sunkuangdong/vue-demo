// const Vue = () => import("vue")
// const _ = () => import("lodash")
import Vue from "vue"
import _ from "lodash"
import("./index.scss")
import("./style.css")
import("./num.less")
import App from "./App.vue"
import VueRouter from 'vue-router'
import routers from './routers/routers.js'

const router = new VueRouter({
    routers
})
new Vue({
    router,
    render: h => h(App)
}).$mount("#app")