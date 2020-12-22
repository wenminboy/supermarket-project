<template>
  <div id="show">
    <el-col :span="24">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">账号管理</template>
          <el-menu-item index="1-1">个人信息</el-menu-item>
          <el-menu-item index="1-2">修改密码</el-menu-item>
          <el-menu-item index="1-3">部门设置</el-menu-item>
          <el-menu-item index="1-4">员工账号</el-menu-item>
          <el-menu-item index="1-5">角色管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">商户门店</template>
          <el-menu-item index="2-1">商户资料</el-menu-item>
          <el-menu-item index="2-2">门店管理</el-menu-item>
          <el-menu-item index="2-3">终端管理</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">平台租用</template>
          <el-menu-item index="3-1">购买服务</el-menu-item>
          <el-menu-item index="3-2">购买记录</el-menu-item>
          <el-menu-item index="3-3">申请发票</el-menu-item>
          <el-menu-item index="3-4">发票记录</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">消息管理</template>
          <el-menu-item index="4-1">业务消息</el-menu-item>
          <el-menu-item index="4-2">系统公告</el-menu-item>
          <el-menu-item index="4-3">升级公告</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">零售</template>
          <el-menu-item index="5-1">登录日志</el-menu-item>
          <el-menu-item index="5-2">操作日志</el-menu-item>

        </el-submenu>
     
      </el-menu>
    </el-col>
  </div>
</template>
<style scoped>
#show {
  background-color: #545c64;
   height: 740px;
  width:18%;
}
</style>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
