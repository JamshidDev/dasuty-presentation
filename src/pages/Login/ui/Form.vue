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
  >
    <div style="min-height:calc(100vh - 120px)">
      <n-form-item
          :label="$t(`login.form.login`)"
          path="login"
          :rule-path="rules.names.requiredStringField"
      >
        <n-input
            type="text"
            v-model:value="store.payload.login"
        />
      </n-form-item>
      <n-form-item
            :label="$t(`login.form.password`)"
            path="name"
            :rule-path="rules.names.requiredStringField"
      >
        <n-input
            type="password"
            v-model:value="store.payload.password"
            show-password-on="click"
            :maxlength="16"
        />
      </n-form-item>
      <n-button>

      </n-button>
    </div>
  </n-form>
</template>

<style scoped>

</style>