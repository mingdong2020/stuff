<template>
  <div class="holdout">
    <a href="tel:400-888-7899">点<br>击<br>免<br>费<br>通<br>话</a>
  </div>
</template>

<script>
export default {
  name: "Holdout"
}
</script>

<style lang="less" scoped>
.holdout {
  position: fixed;
  top: 34%;
  left: 0.26rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0.54rem;
  height: 2.68rem;
  background-color: #D63F43;
  transform: translate(-50%);
  line-height: 0.36rem;
  border-top-right-radius: 0.05rem;
  border-bottom-right-radius: 0.05rem;
  z-index: 998;
  > a {
    font-size: 0.3rem;
    color: #ffffff;
  }
}
</style>