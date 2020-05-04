<template>
  <div>
    <h2>用户列表</h2>
    <el-table
      :data="tableData"
      style="width: 100%"
      border
    >
      <el-table-column
        label="序号"
        width="180"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.$index +1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="birth"
        label="生日"
        width="180"
      >
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
<router-link to="/user/edit"></router-link>
    <router-link to="/user/add">添加</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleEdit (index, user) {
      this.$router.push("/user/edit?id=" + user.id)
    },
    handleDelete (index, user) {
      this.$axios({
        method: 'get',
        url: 'http://localhost:8900/user/del?id=' + user.id
      }).then(response => {
        this.findAll()
      }).catch(error => console.error()
      )
    },

    findAll () {
      this.$axios({
        method: 'get',
        url: 'http://localhost:8900/user/list'
      }).then(response => {
        this.tableData = response.data
      }).catch(error => console.error()
      )
    }

  },
  created () {
    this.findAll()
  },
  watch: {
    $route: {
      handler: function (val) {
        if (val.path == '/user') {
          this.findAll()
        }

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
