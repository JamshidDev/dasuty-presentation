import {defineStore} from "pinia";
import {getActivePinia} from "pinia"

export const useLoginStore = defineStore('loginStore', {
    state:()=>({
        payload:{
            login:null,
            password:null,
        },
        loading:false,

    }),
    actions:{
    }

})