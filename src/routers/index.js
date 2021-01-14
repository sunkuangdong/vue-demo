import Vue from 'vue'
import Router from 'vue-router'
import Hello from "../components/Hello.vue"
import Foo from "../components/Foo.vue"
import Bar from "../components/Bar.vue"
Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: Hello
    }, {
        path: '/foo',
        name: 'Foo',
        component: Foo
    }, {
        path: '/bar',
        name: 'Bar',
        component: Bar
    }]
})