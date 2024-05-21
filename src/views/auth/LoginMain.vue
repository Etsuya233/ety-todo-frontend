<template>
    <div class="h-dvh flex flex-col items-center">
        <div class="h-2/5 flex justify-center items-center">
            <div class="font-bold text-6xl">
                Login
            </div>
        </div>
        <div class="flex flex-col items-center">
            <label class="input input-bordered flex items-center gap-2 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                <input type="text" class="grow" placeholder="Name" v-model="loginData.name" />
            </label>
            <label class="input input-bordered flex items-center gap-2 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path fill-rule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clip-rule="evenodd" /></svg>
                <input type="password" class="grow" value="password" v-model="loginData.password" />
            </label>
            <button class="btn btn-wide m-1 btn-neutral" @click="loginWithPassword">Login</button>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive, toRaw} from "vue";
import {loginPw} from "@/api/auth.js";
import {useUserStore} from "@/store/userStore.js";
import {useRouter} from "vue-router";

const userStore = useUserStore();
const router = useRouter();

let loginData = reactive({
    name: '',
    password: ''
})

const loginWithPassword = async () => {
    let response = await loginPw(toRaw(loginData));
    userStore.token = response.data.data;
    userStore.isLoggedIn = true;
    router.push({name: 'todo'});
}

</script>

<style scoped>

</style>