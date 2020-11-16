<template>
  <div style="text-align: left">
    <el-button class="add-button" type="success" @click="dialogFormVisible = true">add role</el-button>
    <el-dialog
      title="add role"
      :visible.sync="dialogFormVisible"
      @close="clear"
      width="25%">
      <el-form :model="roleForm" :rules="rules" label-position="left"
               label-width="0px" v-loading="loading">
        <el-form-item prop="name">
          <el-input type="text" v-model="roleForm.name"
                    auto-complete="off" placeholder="role name"></el-input>
        </el-form-item>
        <el-form-item prop="nameZh">
          <el-input type="text" v-model="roleForm.nameZh"
                    auto-complete="off" placeholder="role description"></el-input>
        </el-form-item>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 40%;background: #505458;border: none" v-on:click="createRole">add</el-button>
        </el-form-item>
        <el-form-item prop="username">
          <el-tag>initial permission: none</el-tag>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'RoleCreate',
    data () {
      return {
        dialogFormVisible: false,
        rules: {
          name: [{required: true, message: 'role name cannot be null', trigger: 'blur'}]
        },
        checked: true,
        roleForm: {
          name: '',
          nameZh: ''
        },
        loading: false
      }
    },
    methods: {
      clear () {
        this.roleForm = {
          name: '',
          nameZh: ''
        }
      },
      createRole () {
        this.$axios
          .post('/admin/role', {
            name: this.roleForm.name,
            nameZh: this.roleForm.nameZh
          })
          .then(resp => {
            if (resp.data.code === 200) {
              this.$alert(resp.data.result, 'remind', {
                confirmButtonText: 'confirm'
              })
              this.clear()
              this.$emit('onSubmit')
            } else {
              this.$alert(resp.data.message, 'remind', {
                confirmButtonText: 'confirm'
              })
            }
          })
          .catch(failResponse => {})
        this.dialogFormVisible = false
      }
    }
  }
</script>

<style scoped>
  .add-button {
    margin: 18px 0 0 10px;
  }
</style>
