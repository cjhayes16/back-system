<template>
  <div>
    <el-dropdown>
      <el-button type="primary">
        更多菜单
        <i class="el-icon-arrow-down el-icon--right" />
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>企业基本信息</el-dropdown-item>
        <el-dropdown-item>重大危险源</el-dropdown-item>
        <el-dropdown-item>人员在岗在位</el-dropdown-item>
        <el-dropdown-item>安全风险分区</el-dropdown-item>
        <el-dropdown-item>全流程管理</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert('button click')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown {
//   vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
