<template>
    <div class="flex justify-center">
        <RouterView class="max-w-lg w-full"/>
    </div>
    <LowerMenuBar class="inset-x-0 p-2 bottom-0 z-40 fixed"/>
</template>

<script setup>
import ListItem from "@/components/list/ListItem.vue";
import LowerMenuBar from "@/components/app/LowerMenuBar.vue";
import {todoPage} from "@/api/todo.js";
import {useRouter} from "vue-router";
import {onMounted, reactive, ref, toRaw} from "vue";

const router = useRouter();

onMounted(async () => {
    router.push({name: 'todo'});
})

</script>

<style scoped>

</style>