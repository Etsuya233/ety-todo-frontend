import { createRouter, createWebHashHistory } from "vue-router";
import useUserStore from "@/store/userStore.js";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/welcome',
            name: 'welcome',
            component: () => import("@/views/auth/LoginRegister.vue"),
            meta: {
                requireAuth: false,
                keepAlive: false
            }
        },
        {
            path: '/',
            name: 'general',
            component: () => import("@/views/todo/GeneralIndex.vue"),
            meta: {
                requireAuth: false,
                keepAlive: false
            },
            children: [
                {
                    path: '/todo',
                    name: 'todo',
                    component: () => import("@/views/todo/TodoMain.vue"),
                    meta: {
                        requireAuth: true,
                        keepAlive: true
                    }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/views/auth/LoginMain.vue"),
            meta: {
                requireAuth: false,
                keepAlive: false
            }
        },
        {
            path: '/test',
            name: 'test',
            component: () => import("@/views/test/Test.vue"),
            meta: {
                requireAuth: false,
                keepAlive: false
            }
        }
    ]
})

router.beforeEach((to, from) => {
    const userStore = useUserStore();
    if(to.meta.requireAuth === true && userStore.isLoggedIn === false){
        return {name: 'welcome'};
    }
})

export default router;