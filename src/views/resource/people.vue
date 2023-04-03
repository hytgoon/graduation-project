<template>
  <div class="statement">
    <!-- 查询表单 -->
    <el-form :model="userForm" label-width="80px" :inline="true">
      <el-form-item label="人员姓名">
        <el-input v-model="userForm.userName" placeholder="请输入人员姓名"></el-input>
      </el-form-item>
      <el-form-item label="人员类型">
        <el-input v-model="userForm.userName" placeholder="请输入人员类型"></el-input>
      </el-form-item>
      <el-form-item label="所属区域">
        <el-input v-model="userForm.userName" placeholder="请输入所属区域"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"><i class="el-icon-search"></i> 查询</el-button>
        <el-button type="primary" @click="addUser"><i class="el-icon-plus"></i> 添加</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格信息 -->
    <div style="margin-left: 10px;">
      <el-table :data="tableData.slice((userForm.page - 1) * userForm.pageSize, userForm.page*userForm.pageSize)" :border="true">
        <el-table-column prop="id" label="序号">
        </el-table-column>
        <el-table-column prop="name" label="用户名称">
        </el-table-column>
        <el-table-column prop="account" label="用户账号">
        </el-table-column>
        <el-table-column label="操作" width="150px" :align="'center'">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editUser(scope.row)">编辑</el-button>
            <el-popconfirm title="确定删除该用户信息" @confirm="delUser(scope.row.id)">
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
        <el-form-item label="用户名称" prop="userName">
          <el-input v-model="userInfo.userName" placeholder="请输入用户名称"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="userType">
          <el-input v-model="userInfo.userType" placeholder="请输入用户类型"></el-input>
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
export default {
  name: 'people',
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
        userName: '',
        userType: ''
      },
      rules: {
        userName: [
          {required: true, message: "用户名称不能为空", trigger: "blur"}
        ],
        userType: [
          {required: true, message: "用户类型不能为空", trigger: "blur"}
        ]
      },
      tableData: [
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        },
        {
          id: 1,
          name: '何友婷',
          account: '2019131235'
        }
      ]
    }
  },
  mounted() {
    this.total = this.tableData.length
    console.log(this.userForm)
  },
  methods: {
    /** 获取用户信息列表 */
    getList() {
      
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
      this.userInfo.userName = row.name
      this.userInfo.userType = row.account
    },

    /** 删除用户信息 */
    delUser(id) {

    },

    /** 提交新增或编辑表单 */
    submitForm() {
      this.showPop = false
    },

    /** 取消新增或编辑用户信息 */
    cancel() {
      this.showPop = false,
      this.userInfo = {
        userName: '',
        userType: ''
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