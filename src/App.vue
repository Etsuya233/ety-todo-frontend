<template>
<!--    <Notification class="absolute top-1"/>-->
    <RouterView />
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import Notification from "@/components/app/Toast.vue";

const router = useRouter();
</script>

<style scoped>

</style>