import {defineStore} from 'pinia';
import {ref} from "vue";

const useToastStore = defineStore('useToastStore', () => {
    let msg = ref();

    /**
     * The type of toast. This can be info, warning, error.
     * @type {Ref<any>}
     */
    let type = ref();

    function $reset(){
        msg.value = undefined;
        type.value = undefined;
    }

    return {type, msg, $reset};
}, {persist: true})

export default useToastStore;