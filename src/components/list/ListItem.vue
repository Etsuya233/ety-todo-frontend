<template>
    <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div class="collapse-title pe-4">
            <div class="flex items-center gap-2 has-[:checked]:line-through">
                <div class="text-xl font-medium">{{props.task.content}}</div>
                <label for="cb" class="ml-auto z-20 flex justify-center">
                    <input @click="completeTask" v-model="checkboxVal"
                           type="checkbox" class="checkbox" id="cb"/>
                </label>
            </div>
        </div>
        <div class="collapse-content">
            <p>{{props.task.groupName}}</p>
        </div>
    </div>
</template>

<script setup>
import {onMounted, onUpdated, ref, toRef, watch} from "vue";

const props = defineProps(["task", "index"]);
const emits = defineEmits(["modifyTask"]);

let checkboxVal = ref(props.task.status);

const completeTask = () => {
    emits('modifyTask', props.index);
}

watch(props, (n, o) => {
    checkboxVal.value = n.task.status;
})

</script>

<style scoped>

</style>