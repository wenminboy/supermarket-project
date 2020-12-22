<template>
        <div id="show">
            <div class="nava">
                <nava></nava>
            </div>
                <div class="sm"  style="overflow-y:auto;">    
                        <router-view>
                        </router-view>
                    </div>
        </div>
    </template>
    <style scoped>
.nava{
 
     width:100%;
}
.sm{
    width:82.2%;
     height: 740px;
    position: absolute;
    top: 80px;
    left:17.8%;
    background: rgb(214, 213, 213);
 
}
    </style>
<script>
    import nava  from '@/components/nav.vue'
    export default{
        components:{
            nava
  }
    }
</script>