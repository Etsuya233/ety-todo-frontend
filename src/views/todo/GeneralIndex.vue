<template>
    <div class="flex justify-center">
        <RouterView class="max-w-lg"/>
    </div>
    <LowerMenuBar class="fixed inset-x-0 bottom-2 z-10"/>
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