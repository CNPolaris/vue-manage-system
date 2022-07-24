<template>
  <div class="content">
    <div class="searchModule">
      <el-form :model="query" :inline="true">
        <el-form-item label="角色名称">
          <el-input v-model="query.name" />
        </el-form-item>
        <el-form-item label="权限字符">
          <el-input v-model="query.code" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="query.status">
            <el-option v-for="item in status" :key="item.key" :value="item.key" :label="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small">查询</el-button>
          <el-button size="small">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="buttonModule">
      <el-button type="primary" size="small">添加</el-button>
      <el-button type="warning" size="small">导出</el-button>
    </div>
    <div class="tableModule">
      <el-table :data="list">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="角色名称" />
        <el-table-column prop="code" label="权限字符" />
        <el-table-column prop="order" label="显示顺序" />
        <el-table-column label="状态">
          <template #default="scope">
            <el-switch v-model="scope.row.status" />
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="text">详情</el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getRoleList } from "../../api/roles";
import { ElMessage } from "element-plus";

export default {
  name: "index",
  data() {
    return {
      query: {
        page: 1,
        limit: 10,
        name: '',
        code: '',
        status: 1
      },
      list: [],
      total: 0,
      status: [{key:1,value:"正常"},{key:0,value:"无效"}]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      getRoleList(this.query).then(re=>{
        if(re.code === 2000){
          ElMessage.success("获取角色列表成功");
          this.list = re.data.list
          this.total = re.data.total
        }
      })
    }
  }
}
</script>

<style scoped>
</style>