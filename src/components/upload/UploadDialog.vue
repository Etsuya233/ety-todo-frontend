<template>
    <dialog class="modal bg-transparent shadow-2xl" ref="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Upload avatar</h3>
            <p class="py-4">Select a file to upload.</p>
            <input type="file" class="file-input w-full max-w-xs" />
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup>
import {onMounted, ref, toRef, watch} from "vue";

let modal = ref();
const props = defineProps(['visible']);

const openModal = () => {
    modal.value.show();
}

defineExpose({openModal});
</script>

<style scoped>

</style>