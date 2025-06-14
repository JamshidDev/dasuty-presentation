<script setup>
import { UIProgress } from "@/shared/components"

const options = [
  {
    name: 'Leonardo DiCaprio',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Jennifer Lawrence',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: 'Audrey Hepburn',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Anne Hathaway',
    src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg'
  },
  {
    name: 'Taylor Swift1',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Taylor Swift2',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  },
  {
    name: 'Taylor Swift3',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'
  }
]

function createDropdownOptions(options) {
  return options.map(option => ({
    key: option.name,
    label: option.name
  }))
}
</script>

<template>
  <div>
    <div class="w-[400px] h-[480px] bg-background-primary-mutable rounded-3xl p-2">
      <div class="rounded-2xl aspect-[2/1] overflow-hidden relative">
        <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/aacac176932859.Y3JvcCwxMDgzLDg0NywxMDQsMTMyNw.png"
          class="w-full h-full object-cover" />
        <div class="absolute bottom-2 right-4 left-4 flex gap-5 items-center">
          <p class="w-[30px] text-white font-semibold">100%</p>
          <div class="grow basis-auto">
            <n-progress :height="12" type="line" :percentage="60" class="w-full!" />
          </div>
        </div>
      </div>
      <div class="px-5 py-4 flex flex-col gap-3">
        <p class="text-lg font-[700]">Railmap</p>
        <p class="font-medium text-text-icon-secondary1-mutable">
          Hamma ma'lumotlar bitta xaritada — real vaqtda nazorat va tahlil
        </p>
      </div>
      <div class="px-4 py-3 rounded-2xl bg-background-default-mutable">
        <p class="text-text-icon-primary1-mutable font-medium">Yuklangan hujjatlar</p>
        <UIProgress class="mt-3" :total="6" :done="5" />
      </div>
      <div class="px-5 py-4 flex items-center">
        <div class="w-[160px]">
          <n-avatar-group :options="options" :size="40" :max="5">
            <template #avatar="{ option: { name, src } }">
              <n-tooltip>
                <template #trigger>
                  <n-avatar :src="src" />
                </template>
                {{ name }}
              </n-tooltip>
            </template>
            <template #rest="{ options: restOptions, rest }">
              <n-dropdown :options="createDropdownOptions(restOptions)" placement="top">
                <n-avatar>+{{ rest }}</n-avatar>
              </n-dropdown>
            </template>
          </n-avatar-group>
        </div>
        <p class="font-medium text-text-icon-secondary1-mutable">
          {{ options.length }} ta xodim
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.n-progress-icon--as-text {
  display: none;
}
</style>
