<template>
    <div class="flex items-center w-full bg-base-100">
        <div class="pt-4 pb-4 pl-4 text-4xl font-bold">
            Todo
        </div>
        <div class="ml-auto pr-5 pt-3 pb-4 text-2xl font-bold">
            {{props.total}}
        </div>
    </div>
    <div class="h-[10px] bg-gradient-to-b from-base-100 to-base-0"></div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps(["groups", "total"]);

</script>

<style scoped>

</style>