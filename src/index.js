// const Vue = () => import("vue")
// const _ = () => import("lodash")
import Vue from "vue"
import _ from "lodash"
import App from "./App.vue"
import router from "./routers/index.js"
new Vue({
    router,
    render: h => h(App)
}).$mount("#app")