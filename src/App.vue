<template>
    <RouterView />
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<style scoped>

</style>