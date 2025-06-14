<script setup>
import {customTheme, naiveBreakpoints} from "@/assets/theme"
import { uzUZ, dateUzUZ, ruRU, dateRuRU, enUS, dateEnUS, }  from 'naive-ui'
import i18n from "@/i18n/index"
import ClientLayout from "@/Layout/ClientLayout.vue"
import {NProgress} from 'naive-ui'

const localProvider = computed(()=>{
  if(i18n.global.locale==='uz'){
    return {
      lang: uzUZ,
      date: dateUzUZ,
    }
  }else if(i18n.global.locale==='en'){
    return {
      lang: enUS,
      date: dateEnUS,
    }
  }else if(i18n.global.locale==='ru'){
    return {
      lang: ruRU,
      date: dateRuRU,
    }
  }
})
</script>

<template>
  <n-config-provider
      :breakpoints="naiveBreakpoints"
      :theme-overrides="customTheme()"
      :locale="localProvider.lang"
      :date-locale="localProvider.date"
  >
    <n-message-provider placement="top-right">
      <n-dialog-provider>
         <router-view></router-view>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

