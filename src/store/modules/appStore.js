import {defineStore} from "pinia";

export const useAppStore = defineStore('appStore', {
    state:()=>({
        themeSwitch:true,
        activeTab:'2',

    }),
    actions:{
    }

})