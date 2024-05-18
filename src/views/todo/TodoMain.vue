<template>
    <div class="p-2">
        <div class="flex items-center">
            <div class="pt-3 pb-4 pl-1 text-4xl font-bold">
                Todo
            </div>
            <div class="ml-auto pr-2 pt-3 pb-4 text-2xl">
                {{total}}
            </div>
        </div>
        <div class="flex flex-col w-full">
            <ListItem class="mt-1 mb-1 first-of-type:mt-0 last-of-type:mb-0" v-for="item in data" :name="item.content" :type="item.groupName"/>
        </div>
    </div>
</template>

<script setup>
import ListItem from "@/components/list/ListItem.vue";
import {todoPage} from "@/api/todo.js";
import {onMounted, reactive, ref, toRaw} from "vue";

let data = ref([]);
let total = ref(0);

let todoPageData = reactive({
    pageNo: 1,
    pageSize: 10
})

onMounted(async () => {
    const response = await todoPage(toRaw(todoPageData));
    data.value = response.data.data.records;
    total.value = response.data.data.total;
})
</script>

<style scoped>

</style>