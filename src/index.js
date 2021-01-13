// const Vue = () => import("vue")
// const _ = () => import("lodash")
import Vue from "vue"
import _ from "lodash"
import("./index.scss")
import("./style.css")
import("./num.less")
import App from "./App.vue"

new Vue({
    render: h => h(App)
}).$mount("#app")