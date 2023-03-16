<template>
  <div class="menu-index">
    <!-- :router="true" -->
    <el-menu 
      background-color="#222f3e" 
      text-color="#fff" 
      active-text-color="#54a0ff"
      :unique-opened="true"
      default-active="1"
      :router="true"
      :collapse-transition="false"
      :collapse="isOpen">
        <div style="color: #fff; margin: 20px 0;text-align: center;">
          <span v-show="!isOpen">疫情地理信息管理</span>
          <span v-show="isOpen" style="font-size: 24px;"><i class="el-icon-menu"></i></span>
        </div>
        <div v-for="(item, index) in menuList" :key="index">
          <el-menu-item v-if="item.children.length === 0" :index="item.index">
            <i :class="item.icon"></i>
            <span v-show="!isOpen">{{ item.title }}</span>
          </el-menu-item>
          <el-submenu v-else :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span v-show="!isOpen">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(children, inde) in item.children" :key="inde" :index="children.index">
              <i :class="children.icon"></i>
              {{ children.title }}
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
  </div>
</template>

<script>
import { menuList }  from '../service/menuList'

export default {
  name: 'menuLeft',
  props: {
    isOpen: {
      default: false
    }
  },
  data() {
    return {
      menuList
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-index {
  text-align: left;
  .el-menu {
    border-right: none;
  }
}
</style>