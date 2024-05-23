import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
    let name = ref();
    let avatar = ref();
    let id = ref();
    let vip = ref();
    let token = ref();
    let isLoggedIn = ref(false);

    function $reset(){
        name.value = undefined;
        token.value = undefined;
        isLoggedIn.value = false;
        avatar.value = undefined;
        vip.value = undefined;
        id.value = undefined;
    }

    return {name, token, isLoggedIn, $reset};
}, { persist: true })

export default useUserStore;
