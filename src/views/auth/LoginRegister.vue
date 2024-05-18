<template>
    <div class="flex flex-col h-dvh align-middle">
        <div class="h-3/4">
            <div class="p-4 flex justify-center align-middle h-full">
                <img class="object-contain" src="https://img.icons8.com/sf-black-filled/512/todo-list.png" alt="todo-list"/>
            </div>
        </div>
        <button class="btn btn-wide btn-neutral ml-auto mr-auto mb-5" @click="router.push('/login')">Login</button>
        <button class="btn btn-wide ml-auto mr-auto">Register</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

</script>

<style scoped>

</style>