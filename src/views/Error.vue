<template>
  <div class="error" @scroll="onScroll">
    <img src="~@/assets/image/empty.png" alt="明动咨询" />
    <span>Error {{ $route.params.code }}</span>
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
    onScroll() {
      document.title = 'aaa';
    }
  }
}
</script>

<style lang="less" scoped>
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  > img {
    width: 3.66rem;
    height: 2.44rem;
  }
  > span {
    margin: 0.08rem 0 0 0;
    font-size: 0.28rem;
    color: #999999;
    line-height: 0.28rem;
  }
}
</style>