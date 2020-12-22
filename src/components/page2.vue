<template>
    <div id="show">
        <div class="nab">
        <nab></nab>
    </div>
        <div class="sm"  style="overflow-y:auto;">    
                <router-view>
    
                </router-view>
            </div>
    </div>
</template>
<style scoped>
    #show{
      
        width:100%;
    }
    
.sm{
    width:82.2%;
    height: 740px;
      background: rgb(214, 213, 213);
    position: absolute;
    top: 80px;
    left:17.8%;
}
</style>
<script>
    import nab  from '@/components/nab.vue'
    export default{
        components:{
            nab
  }
    }
</script>