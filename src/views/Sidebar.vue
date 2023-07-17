<template>
<div class="el-menu-vertical-demo full-sidebar">
  <div class="m-auto" :class="isCollapse ? 'justify-content-start' : 'justify-content-end'">
    <el-icon class="cursor-pointer ms-2" @click="isCollapse = !isCollapse" size="30"><Menu /></el-icon>
  </div>
  <el-menu
  router
    class=""
    :collapse="isCollapse"
  >
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="/">
      <el-icon><home-filled/></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="about">
      <el-icon><document /></el-icon>
      <template #title>About</template>
    </el-menu-item>
    <el-menu-item index="settings">
      <el-icon><setting /></el-icon>
      <template #title>Settings</template>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default{
  data(){
    return{
      isCollapse: false,
    }
  },
  created() {
    this.isCollapse = true
  },
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    /* display: inline-flex !important; */
    /* flex-direction: column !important; */
  min-height: 100vh;
}
</style>