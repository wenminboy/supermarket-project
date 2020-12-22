<template>
    <div id="show">
        <topa></topa>
        <div class="sm">    
            <router-view>

            </router-view>
        </div>
    
    </div>
</template>
<style scoped>
.sm{
   height: 740px;
}
</style>
<script>


import topa  from '@/components/top.vue'
    export default{
        components:{
            topa
  }
    }
</script>