<template>
  <div id="show" style="overflow-y:auto;">
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
          <template slot="title">商品</template>
          <router-link to="/homePage/page1/shangpinga" tag="span"> <el-menu-item index="1-1">商品类别</el-menu-item></router-link>
          <router-link to="/homePage/page1/shangpingb" tag="span"><el-menu-item index="1-2">商品品牌</el-menu-item></router-link>
          <router-link to="/homePage/page1/shangpingc" tag="span"><el-menu-item index="1-3">商品单位</el-menu-item></router-link>
          <router-link to="/homePage/page1/shangpingd" tag="span"><el-menu-item index="1-4">商品编码设置</el-menu-item></router-link>
          <router-link to="/homePage/page1/shangpinge" tag="span"><el-menu-item index="1-5">商品档案</el-menu-item></router-link>
          <router-link to="/homePage/page1/shangpingf" tag="span"><el-menu-item index="1-6">图片库管理</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">采购</template>
          <router-link to="/homePage/page1/caigoua" tag="span"> <el-menu-item index="2-1">供应商管理</el-menu-item></router-link>
           <router-link to="/homePage/page1/caigoub" tag="span"><el-menu-item index="2-2">采购单</el-menu-item></router-link>
           <router-link to="/homePage/page1/caigouc" tag="span"><el-menu-item index="2-3">采购退货单</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">库存</template>
          <router-link to="/homePage/page1/kucuna" tag="span"> <el-menu-item index="3-1">商品入库</el-menu-item></router-link>
           <router-link to="/homePage/page1/kucunb" tag="span"><el-menu-item index="3-2">库存调拨</el-menu-item></router-link>
          <router-link to="/homePage/page1/kucunc" tag="span"> <el-menu-item index="3-3">商品出库</el-menu-item></router-link>
          <router-link to="/homePage/page1/kucund" tag="span"><el-menu-item index="3-4">库存盘点</el-menu-item></router-link>
           <router-link to="/homePage/page1/kucune" tag="span"><el-menu-item index="3-5">商品库存</el-menu-item></router-link>
           <router-link to="/homePage/page1/kucunf" tag="span"><el-menu-item index="3-6">商品库存明细</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">促销</template>
           <router-link to="/homePage/page1/cuxiaoa" tag="span"><el-menu-item index="4-1">订单促销</el-menu-item></router-link>
           <router-link to="/homePage/page1/cuxiaob" tag="span"><el-menu-item index="4-2">商品促销</el-menu-item></router-link>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">零售</template>
           <router-link to="/homePage/page1/lingshoua" tag="span"><el-menu-item index="5-1">终端销售单</el-menu-item></router-link>
           <router-link to="/homePage/page1/lingshoub" tag="span"><el-menu-item index="5-2">终端退货单</el-menu-item></router-link>
            <router-link to="/homePage/page1/lingshouc" tag="span"><el-menu-item index="5-3">商城销售单</el-menu-item></router-link>
            <router-link to="/homePage/page1/lingshoud" tag="span"><el-menu-item index="5-4">终端销售交易明细</el-menu-item></router-link>
            <router-link to="/homePage/page1/lingshoue" tag="span"><el-menu-item index="5-5">终端财务收银明细</el-menu-item></router-link>
            <router-link to="/homePage/page1/lingshouf" tag="span"><el-menu-item index="5-6">终端财务收银汇总</el-menu-item></router-link>
          <el-menu-item index="5-7">终端财务退款汇总</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">会员</template>
           <router-link to="/homePage/page1/huiyuana" tag="span"><el-menu-item index="6-1">会员类别</el-menu-item></router-link>
          <router-link to="/homePage/page1/huiyuanb" tag="span"><el-menu-item index="6-2">会员列表</el-menu-item></router-link>
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
