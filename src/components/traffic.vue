<template>
  <div class="traffic">
    <el-form label-width="50px" :inline="true">
      <el-form-item label="起点">
        <el-input v-model="start" placeholder="请输入起点"></el-input>
      </el-form-item>
      <el-form-item label="终点">
        <el-input v-model="end" placeholder="请输入终点"></el-input>
      </el-form-item>
      <el-button type="primary" @click="searchAdd"><i class="el-icon-search"></i> 查询</el-button>
    </el-form>
    <baidu-map class="map" center="重庆">
      <bm-view class="map-item">
      </bm-view>
      <bm-driving
        :start="startAdd"
        :end="endAdd"
        :auto-viewport="true"
        policy="BMAP_DRIVING_POLICY_LEAST_DISTANCE"
        :panel="false"
        location="重庆">
      </bm-driving>
    </baidu-map>
  </div>
</template>

<script>
export default {
  name: 'traffic',
  data() {
    return {
      start: '',
      end: '',
      startAdd: '',
      endAdd: ''
    }
  },
  methods: {
    searchAdd() {
      this.startAdd = this.start
      this.endAdd = this.end
      if (this.startAdd || this.endAdd) {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.traffic {
  width: 100%;
  height: 100%;
  .map {
    width: 100%;
    height: 90%;
    &-item {
      width: 100%;
      height: 100%;
    }
  }
}
</style>