<template>
    <div id="show">
        <span class="one" @click="cla()" :class="{'style1':num==0}">内容管理</span> 
        <span class="two" @click="clb()" :class="{'style1':num==1}">系统设置</span> 
        <ul class="big">
            <li><i class="el-icon-user"></i></li>
            <li><i class="el-icon-message-solid"></i></li>
            <li><i class="el-icon-c-scale-to-original"></i></li>
            <li><i class="el-icon-s-home"></i></li>
            <li><i class="el-icon-switch-button"></i></li>
        </ul>

    </div>
</template>
<style scoped>
    #show{

        background:blue;
        height: 80px;
        line-height: 80px;
        font-size: 20px;    
    }
    .style1{
        background:rgba(104, 104, 104, 0.205);
    }
    .one{
        margin-left:100px;
    }
    span{
        color: white;
        padding:0px 20px;
      
        cursor: pointer;
    }
    .big,span{
      float: left;
    }
    .big{
        padding:0px;
        height: 80px;
        width: 500px;
        margin: 0;
        color: white;
        margin-left: 540px; 
    }
    .big li{
        float: left;
        font-size: 40px;
        list-style-type: none;
        cursor: pointer;
        height: 80px;
        border-right: 1px solid rgb(168, 163, 163);
        padding: 0px 20px;
    }
    .one{
        margin-left: 300px;
    
    }
</style>
<script>
    export default{
        data() {
            return {
                num:0
            }
        },methods: {
            cla(){
                this.num=0
                this.$router.push({
                    path:'/homePage/page1'
                })
            },clb(){
                this.num=1
                this.$router.push({
                    path:'/homePage/page2'
                })
            }
        },
    }

</script>