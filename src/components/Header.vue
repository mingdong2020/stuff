<template>
  <div class="content">
    <div class="header" v-if="$store.getters.getStateHead" ref="header" :style="$store.getters.getStateType ? 'background-color: transparent' : 'background-color: #ffffff;border-bottom: 1px solid #EEEEEE;'">
      <div class="header-logo" @click="onIndex">
        <img v-show="$store.getters.getStateType" src="~@/assets/image/logo-white.png" alt="明动咨询" />
        <img v-show="!$store.getters.getStateType" src="~@/assets/image/logo-white.png" alt="明动咨询" />
      </div>
      <div :class="$store.getters.getStateType ? 'header-menu menu-white' : 'header-menu'" @click="onToggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="panel" id="scroll" :style="[$store.getters.getStateType ? 'height:' + clientHeight + 'px;margin: 0;' : 'height:' + panelHeight + 'px;', $store.getters.getStateHead ? '' : 'margin: 0;']">
      <slot></slot>
    </div>
    <Options :toggle="$store.getters.getStateToggle" @btn-cancel="onToggle" />
    <Poster :toggle="$store.getters.getStatePoster" @btn-cancel="onCancel" @btn-poster="onPoster" />
    <Giftbag :toggle="$store.getters.getStateGiftbag" @btn-cancel="onClose" />
    <Holdout />
  </div>
</template>

<script>
import { getCookie, setCookie, isWeChat, isIos } from "@/assets/js/usualUtils.js"
import Poster from "@/components/Poster.vue"
import Options from "@/components/Options.vue"
import Giftbag from "@/components/Giftbag.vue"
import Holdout from "@/components/Holdout.vue"
export default {
  name: "Header",
  components: {
    Poster,
    Options,
    Giftbag,
    Holdout
  },
  data() {
    return {
      clientHeight: 0,
      panelHeight: 0,
      watchPoster: false,
      watchCancel: false
    }
  },
  watch: {
    watchPoster: {
      handler: function() {
        if (this.watchPoster && this.watchCancel) {
          this.onSlide();
        }
      }
    },
    watchCancel: {
      handler: function() {
        if (this.watchPoster && this.watchCancel) {
          this.onSlide();
        }
      }
    }
  },
  mounted() {
    this.clientHeight = window.innerHeight;
    window.onload = () => {
      // 无法获取高度硬核处理
      this.panelHeight = this.clientHeight - this.$refs.header.offsetHeight;
    }
    // 每隔1小时显示海报
    let advert = getCookie("advert");
    if (advert == process.env.VUE_APP_VERSION) {
      this.onSlide();
    } else {
      if (!(location.href.includes("error") || location.href.includes("mitax") || location.href.includes("email"))) {
        setTimeout(() => {
          this.$store.commit("setStatePoster", true);
          setCookie("advert", process.env.VUE_APP_VERSION, 1);
          this.watchPoster = true;
        }, 2400);
      }
    }
    // 每18秒显示一次
    let timeStamp = (new Date()).getTime();
    setCookie("expiredTime", timeStamp + 18000, 1);
    let giftTimer = setInterval(() => {
      if (!this.$store.getters.getStateGiftSend) {
        let nowTime = (new Date()).getTime();
        if (nowTime >= getCookie("expiredTime") && !location.href.includes("error") && !location.href.includes("email") && !this.$store.getters.getStateGiftbag && !this.$store.getters.getStatePoster) {
          setCookie("expiredTime", nowTime + 18000, 1);
          this.$store.commit("setStateGiftbag", true);
        }
      } else {
        clearInterval(giftTimer);
      }
    }, 3000);
  },
  methods: {
    onIndex() {
      if (isWeChat() && isIos()) {
        this.$router.replace({
          name: "Home"
        })
      } else {
        this.$router.push({
          name: "Home"
        })
      }
    },
    onToggle() {
      let toggle = !this.$store.getters.getStateToggle;
      this.$store.commit("setStateToggle", toggle);
    },
    onCancel() {
      this.watchCancel = true;
      this.$store.commit("setStatePoster", false);
    },
    onPoster() {
      this.$store.commit("setStatePoster", false);
      if (isWeChat() && isIos()) {
        this.$router.replace({
          name: "Mitax"
        })
      } else {
        this.$router.push({
          name: "Mitax"
        })
      }
    },
    onSlide() {
      setTimeout(() => {
        if (this.$store.getters.getStateIndex == "home") {
          this.$emit("btn-slider");
        }
      }, 3600);
    },
    onClose() {
      this.$store.commit("setStateGiftbag", false);
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  position: relative;
  width: 7.5rem;
  min-height: 100vh;
  background-color: #eeeeee;
  overflow: hidden;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.18rem;
    z-index: 666;
    .header-logo {
      display: flex;
      align-items: center;
      width: 2.33rem;
      height: 1.18rem;
      > img {
        margin: 0 0 0 0.4rem;
        width: 2.6rem;
        height: 0.85rem;
      }
    }
    .header-menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      margin: 0 0.4rem 0 0;
      width: 0.4rem;
      height: 0.32rem;
      > span {
        display: flex;
        background-color: #1C1C1C;
        &:nth-child(1) {
          width: 0.24rem;
          height: 0.04rem;
        }
        &:nth-child(2) {
          width: 0.4rem;
          height: 0.04rem;
        }
        &:nth-child(3) {
          width: 0.32rem;
          height: 0.04rem;
        }
      }
    }
    .menu-white {
      > span {
        background-color: #ffffff;
      }
    }
  }
  .panel {
    margin: 1.18rem 0 0 0;
    background-color: #ffffff;
    overflow-y: scroll;
  }
}
</style>