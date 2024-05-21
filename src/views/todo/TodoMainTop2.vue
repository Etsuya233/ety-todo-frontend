<template>
    <div class="flex">
        <div class="navbar bg-base-200 m-2 rounded-2xl shadow-lg">
            <select class="select select-ghost text-3xl font-bold rounded-2xl w-full mr-auto bg-none
                    border-0 overflow-ellipsis
                    *:text-sm"
                    v-model="currentSelect">
                <option v-for="(item, index) in props.group" :value="index">{{item.name}}</option>
            </select>
            <div class="text-2xl font-bold ml-4 mr-3">
                {{(props.group[currentSelect] === undefined)? 0: (props.group[currentSelect].totalCount - props.group[currentSelect].completedCount)}}
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps(["group"]);
const emits = defineEmits(["groupChange"]);

let currentSelect = ref((props.group.length > 0)? props.group[0].id: 0);

watch(currentSelect, (n) => {
    emits("groupChange", props.group[n].id);
})


</script>

<style scoped>

</style>