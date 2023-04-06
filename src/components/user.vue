<template>
  <div class="statement">
    <!-- 查询表单 -->
    <el-form :model="userForm" label-width="80px" :inline="true">
      <el-form-item label="用户名称">
        <el-input v-model="userForm.userName" placeholder="请输入用户名称"></el-input>
      </el-form-item>
      <el-form-item label="用户账号">
        <el-input v-model="userForm.userName" placeholder="请输入用户账号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"><i class="el-icon-search"></i> 查询</el-button>
        <el-button type="primary" @click="addUser"><i class="el-icon-plus"></i> 添加</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格信息 -->
    <div style="margin-left: 10px; width: 98%">
      <el-table :data="tableData.slice((userForm.page - 1) * userForm.pageSize, userForm.page*userForm.pageSize)" :border="true">
        <el-table-column prop="userId" label="序号" :align="'center'"/>
        <el-table-column prop="userName" label="用户名称" :align="'center'"/>
        <el-table-column prop="loginName" label="用户账号" :align="'center'" />
        <el-table-column prop="userSex" label="用户性别" :align="'center'">
          <template slot-scope="scope">
            {{ scope.row.userSex === 0 ? '男' : '女' }}
          </template>
        </el-table-column>
        <el-table-column prop="userEmail" label="邮箱" :align="'center'">
          <template slot-scope="scope">
            {{ scope.row.userEmail ? scope.row.userEmail : '无' }}
          </template>
        </el-table-column>
        <el-table-column prop="userPhone" label="手机号" :align="'center'" >
          <template slot-scope="scope">
            {{ scope.row.userPhone ? scope.row.userPhone : '无' }}
          </template>
        </el-table-column>
        <el-table-column prop="userAddress" label="地址" :align="'center'" >
          <template slot-scope="scope">
            {{ scope.row.userAddress ? scope.row.userAddress : '无' }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150px" :align="'center'">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editUser(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除该用户信息" @confirm="delUser(scope.row.userId)">
              <el-button style="margin-left: 8px;" slot="reference" type="text" size="small">删除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        :align="'right'"
        :current-page.sync="userForm.page"
        :page-sizes="[10, 20, 30, 40]"
        :page-size.sync="userForm.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        style="margin: 15px 0;"
        :total="total">
      </el-pagination>
    </div>

    <!-- 添加和编辑用户信息 -->
    <el-dialog :title="title" :visible.sync="showPop" width="500px" append-to-body>
      <el-form :model="userInfo" label-width="80px" :rules="rules">
            <el-form-item label="用户账户" prop="loginName" >
              <el-input v-model="userInfo.loginName" placeholder="请输入用户账户" :disabled="title !== '添加用户'"></el-input>
            </el-form-item>
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="userInfo.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
            <el-form-item label="密码" prop="loginPwd" v-if="title === '添加用户'">
              <el-input v-model="userInfo.userPassord" placeholder="请输入用户密码"></el-input>
            </el-form-item>
        <el-form-item label="用户性别" prop="userSex">
          <el-select v-model="userInfo.userSex" placeholder="请选择用户性别" style="width: 380px">
            <el-option :value="0" label="男"></el-option>
            <el-option :value="1" label="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="userEmail">
          <el-input v-model="userInfo.userEmail" placeholder="请输入用户邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="userPhone">
          <el-input v-model="userInfo.userPhone" placeholder="请输入用户手机号"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="userAddress">
          <el-input v-model="userInfo.userAddress" placeholder="请输入用户地址"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getUserList, addUser, delUser, editUser } from '@/api/user/user'

export default {
  name: 'user',
  data() {
    return {
      title: '',
      showPop: false,
      total: 0,
      userForm: {
        page: 1,
        pageSize: 10,
        userName: '',
        userAccount: ''
      },
        userInfo: {
            loginName: '',
            userName: '',
        loginPwd: '',
        userSex: 0,
        userEmail: '',
        userPhone: '',
        userAddress: ''
      },
        rules: {
        loginName: [
                    { required: true, message: "用户名称不能为空", trigger: "blur" }
                ],
        userName: [
          {required: true, message: "用户名称不能为空", trigger: "blur"}
        ],
                loginPwd: [
                    { required: true, message: "用户名称不能为空", trigger: "blur" }
                ]
      },
      tableData: []
    }
  },
  mounted() {
      this.getList()
  },
  methods: {
    /** 获取用户信息列表 */
    getList() {
      getUserList(this.userForm.page, this.userForm.pageSize).then((res) => {
                this.tableData = res.data
                this.total = this.tableData.length
            })
    },

    /** 展示新增新用户弹窗 */
    addUser() {
      this.title = "添加用户"
      this.showPop = true
    },

    /** 展示编辑用户信息弹窗 */
    editUser(row) {
      this.title = '编辑用户信息'
      this.showPop = true
    // console.log(row)
    this.userInfo = row
    },

    /** 删除用户信息 */
    delUser(id) {
        delUser(id).then( _ => {
            this.$notify({
                title: '修改成功',
                message: '修改个人信息成功',
                type: 'success'
            });
            this.getList()
        })
    },

    /** 提交新增或编辑表单 */
    submitForm() {
        this.showPop = false
        if (this.title === '添加用户') {
            addUser(this.userInfo).then(_ => {
                this.$notify({
                        title: '添加成功',
                        message: '添加用户信息成功',
                        type: 'success'
                    });
                    this.getList()
            })
        } else {
            editUser(this.userInfo).then(_ => {
                this.$notify({
                        title: '修改成功',
                        message: '修改用户信息成功',
                        type: 'success'
                    });
                    this.getList()
            })
      }
    },

    /** 取消新增或编辑用户信息 */
    cancel() {
      this.showPop = false,
      this.userInfo = {
        loginName: '',
                    userName: '',
                    loginPwd: '',
        userSex: 0,
        userEmail: '',
        userPhone: '',
        userAddress: ''
      }
    },
  }
}
</script>

<style lang="scss" scoped>
.statement {
  width: 100%;
  height: 100%;
}
</style>