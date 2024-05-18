<template>
    <div class="toast">
        <div class="alert">
            <span>New message arrived.</span>
        </div>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import useToastStore from "@/store/toastStore.js";

const toastStore = useToastStore();



</script>

<style scoped>

</style>