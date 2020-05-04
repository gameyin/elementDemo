<template>
  <div>
    <h2>用户编辑</h2>
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
          type="date"
          style="width: 100%;"
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
  name: 'UserEdit',
  data () {
    return {
      id: 0,
      userinfo: {
      }
    }
  },
  methods: {
    findone () {
      this.$axios({
        method: 'get',
        url: 'http://localhost:8900/user/info',
        params: {
          id: this.id
        }
      }).then(response => {
        this.userinfo = response.data
      }).catch(error => console.error()
      )
    },

    submitForm () {
      this.$axios({
        method: 'post',
        url: 'http://localhost:8900/user/update',
        data: this.userinfo
      }).then(response => {
        this.$router.push("/user")
      }).catch(error => console.error()
      )
    }

  },
  created () {
    this.id = this.$route.query.id;
    this.findone()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
