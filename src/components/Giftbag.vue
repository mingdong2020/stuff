<template>
  <div class="giftbag" v-show="gift" ref="gift">
    <div class="gift-panel" ref="panel">
      <div class="gift-cancel" @click="onCancel"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Giftbag',
  props: {
    toggle: Boolean
  },
  data() {
    return {
      gift: false,
    }
  },
  watch: {
    toggle: {
      handler: function() {
        if (this.toggle) {
          this.gift = true;
          setTimeout(() => {
            this.$refs.gift.style.opacity = '1';
            this.$refs.panel.style.transform = 'scale(1)';
          }, 30);
        } else {
          this.$refs.gift.style.opacity = '0';
            this.$refs.panel.style.transform = 'scale(0)';
          setTimeout(() => {
            this.gift = false;
          }, 330);
        }
      }
    } 
  },
  methods: {
    onCancel() {
      this.$emit('btn-cancel')
    }
  }
}
</script>

<style lang="less" scoped>
.giftbag {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  opacity: 0;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.46);
  transition: opacity 300ms ease-out 100ms;
  z-index: 999;
  .gift-panel {
    position: relative;
    width: 6.9rem;
    height: 4.2rem;
    transform: scale(0);
    background-color: #ffffff;
    transition: transform 300ms ease-out 100ms;
    .gift-cancel {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.3rem;
      height: 1.3rem;
      background-color: red;
    }
  }
}
</style>