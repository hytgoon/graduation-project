<template>
  <div class="statement">
    <el-form :model="userForm" label-width="80px" :inline="true">
      <el-form-item label="用户名称">
        <el-input v-model="userForm.userName" placeholder="请输入用户名称"></el-input>
      </el-form-item>
      <el-form-item label="用户账号">
        <el-input v-model="userForm.userName" placeholder="请输入用户账号"></el-input>
      </el-form-item>
      <el-button type="primary"><i class="el-icon-search"></i> 查询</el-button>
    </el-form>
    <div class="statement-data">
      <el-table :data="tableData" :border="true" style="width: 98%">
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="用户名称">
        </el-table-column>
        <el-table-column prop="account" label="用户账号">
        </el-table-column>
        <el-table-column label="操作" width="150px" :align="'center'">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      userForm: {
        userName: '',
        userAccount: ''
      },
      tableData: [
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.statement {
  width: 100%;
  height: 100%;
  .statement-data {
    margin-left: 10px;
  }
}
</style>