<script setup lang="ts">
import { Lock, Unlock, User } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import type { FormInstance } from "element-plus"
import useUserStore from "@/store/user"
import { useRouter } from "vue-router"
const router = useRouter();
const userStore = useUserStore();
const formRef = ref<FormInstance | null>(null)

const formData = reactive({
    account: 'admin',
    loading: false,
    password: '123456',
    code: ''
})
const onSubmit = async () => {
    formData.loading = true;
    await userStore.password(formData);
    formData.loading = false;
    router.push("/")
}
</script>

<template>
    <div class="container">
        <div class="login-content">
            <h2>设备报修系统</h2>
            <ElForm v-loading="formData.loading" ref="formRef" :model="formData" label-position="top" size="large">
                <ElFormItem prop="account" :rules="[
                    { required: true, message: '请输入账号', trigger: 'blur' },
                ]">
                    <ElInput @keyup.enter.native="onSubmit" :prefix-icon="User" clearable v-model="formData.account"
                        placeholder="请输入用户名"></ElInput>
                </ElFormItem>
                <ElFormItem prop="password" :rules="[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
                ]">
                    <ElInput @keyup.enter.native="onSubmit" :prefix-icon="Lock" type="password"
                        v-model="formData.password" :show-password="true" placeholder="请输入密码"></ElInput>
                </ElFormItem>
                <ElFormItem prop="code" :rules="[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                    { min: 4, max: 4, message: '请输入正确的验证码', trigger: 'blur' },
                ]">
                    <ElInput @keyup.enter.native="onSubmit" :prefix-icon="Unlock" type="password"
                        v-model="formData.code" :show-password="true" placeholder="验证码"></ElInput>
                </ElFormItem>
                <ElFormItem>
                    <ElButton @keyup.enter.native="onSubmit" style="width: 100%;" type="primary" @click.stop="onSubmit">
                        登录</ElButton>
                </ElFormItem>
            </ElForm>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    height: 100vh;
    width: 100vw;
    background-image: url("@/assets/loginbg.png");
    background-position: center;
    background-size: cover;
    position: relative;

    .login-content {
        position: absolute;
        top: 50%;
        right: 17%;
        width: 250px;
        transform: scale(1.3) translateY(-40%);
        background-color: #fff;
        padding: 2.5em;

        h2 {
            color: #888;
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 1.5em;
        }
    }
}
</style>