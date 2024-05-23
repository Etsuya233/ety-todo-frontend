<template>
    <button class="btn" @click="uploadDialog.openModal()">Open</button>
    <UploadDialog ref="uploadDialog" />
</template>

<script setup>
import TodoMainTop2 from "@/views/todo/TodoMainTop2.vue";
import UploadDialog from "@/components/upload/UploadDialog.vue";
import {ref} from "vue";

let uploadDialog = ref();

</script>

<style scoped>

</style>