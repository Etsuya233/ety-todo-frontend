<template>
    <div class="flex flex-col w-full p-2 gap-4">
        <div class="card bg-base-100 shadow-lg items-center">
            <div class="card-body flex flex-col items-center">
                <img class="w-20 rounded-full shadow-xl" :src="getUserAvatar()" />
                <div class="text-2xl font-bold">
                    {{userStore.name}}
                </div>
            </div>
        </div>
        <button class="btn btn-warning" @click="userLogout">Log out</button>
    </div>
</template>

<script setup>
import {ref, reactive, onMounted} from "vue";
import {useRouter} from "vue-router";
import {getUserById, getCurrentUser} from "@/api/user.js";
import {useUserStore} from "@/store/userStore.js";

const userStore = useUserStore();
const router = useRouter();

const userLogout = () => {
    userStore.$reset();
    router.push({name: 'welcome'});
}

const getUserAvatar = () => {
    if(userStore.avatar === undefined || userStore.avatar === null) {
        return "/avatar.jpg";
    }
    return userStore.avatar;
}

onMounted(async () => {
    const response = await getCurrentUser();
    userStore.name = response.data.data.name;
    userStore.avatar = response.data.data.avatar;
    userStore.vip = response.data.data.vip;
})

</script>

<style scoped>

</style>