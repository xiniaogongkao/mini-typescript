<template>
	<view class="content">
        <image class="logo" src="../../static/logo.png"></image>
		<view>
            <text class="title">{{title}}</text>
            <u-button type="primary">主要按钮</u-button>
        </view>
	</view>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  @Component
  export default class App extends Vue {
      // 初始化数据
      public title: string = 'hello typescript123';
      // 声明周期钩子
      mounted () {
      }  
  }
</script>

<style>
	
</style>
