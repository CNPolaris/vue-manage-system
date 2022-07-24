<template>
  <el-row :gutter="20">
    <el-col :xs="0" :sm="4" :lg="4" :xl="4">
      <el-tree :data="struct" :props="defaultProps" :default-expand-all="true" />
    </el-col>
    <el-col :xs="24" :sm="20" :lg="20" :xl="20">
      <el-form :model="param" :inline="true" ref="param">
        <el-form-item label="用户名">
          <el-input v-model="param.username" />
        </el-form-item>
        <el-form-item label="角色类别">
          <el-input v-model="param.role" />
        </el-form-item>
        <el-form-item>
          <el-button @click="getList" type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleClear" type="success">重置</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="list">
        <el-table-column prop="id" label="Id" width="70px" />
        <el-table-column prop="username" label="用户名" width="150px" />
        <el-table-column prop="nickName" label="昵称" width="150px" />
        <el-table-column label="头像">
          <template #default="scope">
            <el-avatar shape="square" size="small" :src="scope.row.avatar"/>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="70px" />
        <el-table-column prop="company" label="公司" />
        <el-table-column prop="department" label="部门" />
        <el-table-column label="操作" width="250px">
          <template #default="scope">
            <el-button @click="handleDetail(scope.row.id)" size="small">详情</el-button>
            <el-button @click="handleUpdate(scope.row)" size="small">编辑</el-button>
            <el-button @click="handleDelete(scope.row.id)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pageModule">
        <el-pagination
            small
            background
            layout="prev, pager, next"
            :total="total"
            class="mt-4"
            @prev-click="handlePrev"
            @next-click="handleNext"
        />
      </div>
      <el-dialog v-model="editDialogVisible">
        <el-form :model="form">
          <el-form-item label="头像">
            <el-avatar :size="50" :src="form.avatar" />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickName" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input-number v-model="form.age" :min="0" :max="200"/>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.sex">
              <el-option v-for="item in grade" :key="item.key" :value="item.key" :label="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确认</el-button>
      </span>
        </template>
      </el-dialog>
      <el-dialog v-model="detailVisible">
        <el-descriptions title="用户详情">
          <el-descriptions-item label="用户名">
            {{ form.username }}
          </el-descriptions-item>
          <el-descriptions-item label="昵称">
            {{ form.nickName }}
          </el-descriptions-item>
          <el-descriptions-item label="公司">
            {{ form.company }}
          </el-descriptions-item>
          <el-descriptions-item label="部门">
            {{ form.department }}
          </el-descriptions-item>
        </el-descriptions>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { getUserList, getUserDetail } from "../../api/user"
import { getDepartStruct } from "../../api/department"

export default {
  data() {
    return {
      list: [],
      total: 0,
      param: {
        page: 1,
        limit: 10,
        username: '',
        role: ''
      },
      form: null,
      struct: [],
      editDialogVisible: false,
      detailVisible: false,
      grade:[{key:1, value:'男'},{key:0, value: '女'}],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    this.getList()
    getDepartStruct().then(re=>{
      console.log(re.data)
      this.struct = re.data
    })
  },
  methods: {
    getList() {
      getUserList(this.param).then(re=> {
        this.list = re.data.list
      })
    },
    handleDetail(id) {
      getUserDetail(id).then(re => {
        this.form = re.data
        this.detailVisible = true
      })
    },
    handleDelete(id){
      const tempList = []
      for(const item of this.list){
        if(item.id !== id){
          tempList.push(item)
        }
      }
      this.list = tempList
    },
    handleUpdate(data){
      this.editDialogVisible = true
      this.form = data
    },
    submitForm() {
      console.log(this.form)
      this.editDialogVisible = false
    },
    handleClear(){
      this.param.username = ''
      this.param.role = ''
    },
    handlePrev() {
      this.param.page --
      this.getList()
    },
    handleNext() {
      this.param.page ++
      this.getList()
    }
  }
}
</script>

<style scoped>

</style>