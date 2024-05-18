import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    let name = ref();
    let token = ref();
    let isLoggedIn = ref(false);

    function $reset(){
        name.value = '';
        token.value = '';
        isLoggedIn.value = false;
    }

    return {name, token, isLoggedIn, $reset};
}, { persist: true })

export default useUserStore;
