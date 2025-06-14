<script setup>
import {rules} from "../../../utils/index.js"
import {useLoginStore} from "../../../store/modules/index.js"

const formRef = ref(null)
const store = useLoginStore()

const onSubmit = ()=>{
  formRef.value?.validate((error)=>{
    if(!error){}
})
}

</script>

<template>
  <n-form
      ref="formRef"
      :rules="rules.common"
      :model="store.payload"
      class="grid grid-cols-12 w-full max-w-[440px]
       bg-white p-8 rounded-3xl  mt-[180px]"
  >
    <h1 class="text-4xl font-bold text-center col-span-12 text-text-icon-primary2-mutable mb-10">{{$t(`login.form.enter`)}}</h1>
    <n-form-item
        class="col-span-12"
        :label="$t(`login.form.login`)"
        path="login"
        :rule-path="rules.names.requiredStringField"
        :show-label="false"
    >
      <n-input
          size="large"
          type="text"
          v-model:value="store.payload.login"
          :placeholder="$t(`login.form.login`)"
      />
    </n-form-item>
    <n-form-item
        class="col-span-12"
        :label="$t(`login.form.password`)"
        path="password"
        :rule-path="rules.names.requiredStringField"
        :show-label="false"
    >
      <n-input
          size="large"
          type="password"
          v-model:value="store.payload.password"
          show-password-on="click"
          :maxlength="16"
          :placeholder="$t(`login.form.password`)"
      />
    </n-form-item>
    <n-button
        size="large"
        type="primary"
        class="col-span-12"
    >
      {{$t(`login.form.enter`)}}
    </n-button>
  </n-form>
</template>

<style scoped>

</style>