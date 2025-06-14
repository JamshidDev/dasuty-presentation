import {defineStore} from "pinia";
import {getActivePinia} from "pinia"

export const useLoginStore = defineStore('loginStore', {
    state:()=>({
        payload:{
            login:true,
            password:true,
        },
        loading:false,

    }),
    actions:{
    }

})