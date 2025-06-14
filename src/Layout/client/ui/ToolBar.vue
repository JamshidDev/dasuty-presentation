<script setup>
import { Icon } from "@/components/icon/index.js"
import { Search12Regular } from "@vicons/fluent"
import { useAppStore } from "@/store/modules/index.js"

const store = useAppStore()
</script>

<template>
  <div class="flex justify-between items-center h-[60px] px-[40px] bg-white shadow-md">
    <img class="w-[80px]" src="/imgs/logo.png" alt="logo">

    <div class="flex items-center">
      <div class="bg-background-secondary-mutable w-[500px] min-w-[500px] rounded-lg mr-[100px]">
        <n-input class="input-override" placeholder="">
          <template #suffix>
            <n-icon size="20" class="text-text-icon-primary2-mutable">
              <Search12Regular />
            </n-icon>
          </template>
        </n-input>
      </div>
      <n-tabs :default-value="store.activeTab">
        <n-tab-pane name="1" :tab="$t('layout.tabs.projects')">
        </n-tab-pane>
        <n-tab-pane name="2" :tab="$t('layout.tabs.projectsList')">
        </n-tab-pane>
        <n-tab-pane name="3" :tab="$t('layout.tabs.slides')">
        </n-tab-pane>
      </n-tabs>
    </div>

    <div>
      <component class="text-text-icon-secondary2-mutable" :is="Icon.Profile" />
    </div>


  </div>
</template>