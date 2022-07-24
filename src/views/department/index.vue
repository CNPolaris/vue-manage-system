<template>
  <div class="searchModule">
    <el-form :model="query" :inline="true">
      <el-form-item label="公司">
<!--        <el-input v-model="query.company" />-->
        <el-select v-model="query.company" placeholder="">
          <el-option v-for="item in companies" :key="item.id" :value="item.id" :label="item.name"/>
        </el-select>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="query.department" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small">
          查询
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button size="small">
          重置
        </el-button>
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
      <el-table-column prop="company" label="公司" />
      <el-table-column prop="name" label="部门" />
      <el-table-column prop="address" label="地址" />
      <el-table-column label="状态">
        <template #default="scope">
          <el-switch v-model="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="text">
            详情
          </el-button>
          <el-button type="text">
            编辑
          </el-button>
          <el-button type="text">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getDepartmentPage } from "../../api/department";
import { getCompanyList } from "../../api/company";
import {ElMessage} from "element-plus";

export default {
  data() {
    return {
      query: {
        page: 1,
        limit: 10,
        company: "",
        department: ""
      },
      list: [],
      total: 0,
      companies: []
    }
  },
  created() {
    this.getList()
    getCompanyList().then(re => {
      this.companies = re.data
    })
  },
  methods: {
    getList() {
      getDepartmentPage(this.query).then(re=>{
        this.total = re.data.total
        this.list = re.data.list
        ElMessage.success(re.message)
      })
    }
  }
}
</script>

<style scoped>
</style>