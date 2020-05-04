<template>
  <div>
    <h2>用户添加</h2>
    <el-form
      :model="userinfo"
      status-icon
      label-width="50px"
    >
      <el-form-item
        label="姓名"
        prop="name"
      >
        <el-input
          type="text"
          v-model="userinfo.name"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="年龄"
        prop="age"
      >
        <el-input
          type="text"
          v-model="userinfo.age"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="生日"
        prop="birth"
      >
        <el-date-picker
          v-model="userinfo.birth"
          style="width: 100%;"
          type="date"
          placeholder="选择生日"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm()"
        >提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserAdd',
  data () {
    return {
      userinfo: {
        name: '',
        age: 0,
        birth: ''
      }
    }
  },
  methods: {
    submitForm () {
      this.$axios({
        method: 'post',
        url: 'http://localhost:8900/user/add',
        data: this.userinfo
      }).then(response => {
        this.$router.push("/user")
      }).catch(error => console.error()
      )
    }

  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
