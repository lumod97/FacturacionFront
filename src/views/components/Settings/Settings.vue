<template>
  <el-form label-position="top" class="mt-5">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="RUC">
          <el-input v-model="RUC" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Clave SOL">
          <el-input v-model="solKey" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-form-item label="Secret ID">
          <el-input v-model="secretId" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="Secret Key">
          <el-input v-model="secretKey" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input
          v-model="textarea1"
          autosize
          type="textarea"
          placeholder="Please input"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col class="d-flex justify-content-end">
        <el-button type="primary"> Enviar </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      RUC: "",
      solKey: "",
      secretId: "",
      secretKey: "",
    }
  },
  methods:{
    async getSUNATToken(){
        // const data = await axios.post()
    }
  }
};
</script>