<template>
    <div class="">
        <div class="flex flex-col w-full sticky top-0 z-40 bg-gradient-to-b from-base-100 to-base-100/0">
            <TodoMainTop2 :group="groupData.data" @groupChange="groupChange"/>
        </div>
        <div class="flex flex-col w-full pl-4 pr-4 pt-2 pb-[90px]">
            <ListItem class="mt-1 mb-1 first-of-type:mt-0 last-of-type:mb-0"
                      v-for="(item, index) in todoData.data" :task="toRaw(item)" :index="index"
                      @modifyTask="addModifyTask"/>
        </div>
    </div>
</template>

<script setup>
import ListItem from "@/components/list/ListItem.vue";
import {todoPage, updateTodoStatusBatch} from "@/api/todo.js";
import {onMounted, reactive, ref, toRaw} from "vue";
import TodoMainTop from "@/views/todo/TodoMainTop.vue";
import TodoMainTop2 from "@/views/todo/TodoMainTop2.vue";
import {getAllGroup} from "@/api/todo.js";

//todo数据，这里的数据应该按照组别创建一个map，存每个组的数据
let todoData = reactive({
    data: [],
    total: 0,
});

//todo查询数据
let todoQueryData = reactive({
    pageNo: 1,
    pageSize: 50,
    groupId: 0
})

//group数据
let groupData = reactive({
    data: [], //index为0表示all，他的id为0
    id2indexMap: new Map(),
    
    init(){
        this.id2indexMap.set(0, 0);
        this.data.push({
            id: 0,
            name: 'All',
            completedCount: 0,
            totalCount: 0
        });
    }
});

//todo打钩和取消时的操作
let modifyVer = 0;
let modifiedTask = [];
const addModifyTask = (index) => {
    modifyVer++;
    modifiedTask.push(index);
    
    //当前task
    const currentTask = todoData.data[index];
    
    //task状态
    currentTask.status = !currentTask.status;
    
    //completedTask改变
    const groupIndex = groupData.id2indexMap.get(currentTask.groupId);
    if(currentTask.status){
        groupData.data[groupIndex].completedCount++;
        groupData.data[0].completedCount++;
    } else {
        groupData.data[groupIndex].completedCount--;
        groupData.data[0].completedCount--;
    }
    
    //更新数据库
    setTimeout((ver, len) => {
        if(modifyVer === ver){ //假如2秒内没有执行打钩和取消勾，就更新状态
            let distinctIndex = Array.from(new Set(modifiedTask.slice(0, len)));
            modifiedTask.splice(0, len);
            const updateData = distinctIndex.map(() => { //取出最新状态
                const id = currentTask.id;
                const status = currentTask.status;
                return {id, status};
            });
            updateTodoStatusBatch(updateData);
        }
    }, 2000, modifyVer, modifiedTask.length);
}

//group改变时，0为全部
const groupChange = async (id) => {
    todoQueryData.groupId = id;
    const response = await todoPage(toRaw(todoQueryData));
    todoData.data = response.data.data.records;
    todoData.total = response.data.data.total;
}

//钩子
onMounted(async () => {
    //todo数据
    groupChange(0);
    
    //组数据
    groupData.init();
    let response = await getAllGroup();
    groupData.data.splice(1);
    groupData.data.push(... response.data.data);
    let allTotal = 0;
    let allCompleted = 0;
    response.data.data.forEach((item, index) => {
        console.log(index);
        groupData.id2indexMap.set(item.id, index + 1);
        allTotal += item.totalCount;
        allCompleted += item.completedCount;
    })
    groupData.data[0].completedCount = allCompleted;
    groupData.data[0].totalCount = allTotal;
})
</script>

<style scoped>

</style>