<template>
    <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-2" checked="checked" />
        <div class="collapse-title pe-4">
            <div class="flex items-center gap-2 has-[:checked]:line-through">
                <div class="text-xl font-medium">{{props.name}}</div>
                <label for="cb" class="ml-auto z-20 flex justify-center">
                    <input type="checkbox" class="checkbox" id="cb"/>
                </label>
            </div>
        </div>
        <div class="collapse-content">
            <p>{{props.type}}</p>
        </div>
    </div>
</template>

<script setup>
import {ref, toRef} from "vue";

const props = defineProps(["name", "type"]);

</script>

<style scoped>

</style>