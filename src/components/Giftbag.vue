<template>
  <div class="giftbag" v-show="gift" ref="gift">
    <div class="gift-panel" ref="panel">
      <div class="gift-cancel" @click="onCancel">
        <img src="~@/assets/image/cancel2.png" alt="明动咨询" />
      </div>
      <div class="gift-content">
        <div class="gift-form">
          <div class="gift-input gift-form-name">
            <div class="gift-label">
              <div>*<em>姓名: </em></div>
              <input type="text" v-model="userName" placeholder="请输入姓名" @blur="nameBlur" />
            </div>
            <span v-show="warnName">{{ nameText }}</span>
          </div>
          <div class="gift-input gift-form-phone">
            <div class="gift-label">
              <div>*<em>电话: </em></div>
              <input type="number" v-model="userPhone" placeholder="请输入手机号" @blur="phoneBlur" />
            </div>
            <span v-show="warnPhone">{{ phoneText }}</span>
          </div>
          <div class="gift-form-word">
            <div>*<em>留言: </em></div>
            <textarea v-model="userWord" rows="3" cols="20" placeholder="请输入留言"></textarea>
          </div>
          <div v-show="!(warnName && warnPhone)" class="gift-form-btn" :style="btnStatus ? '' : 'opacity: 0.48;'" @click="onSubmit">
            <span>提交</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toastBox } from "@/assets/js/appUtils.js"
import { axiosFetch } from "@/assets/js/appUtils"
export default {
  name: "Giftbag",
  props: {
    toggle: Boolean
  },
  data() {
    return {
      gift: false,
      userName: null,
      nameVerify: false,
      warnName: false,
      nameText: "请输入姓名",
      userPhone: null,
      phoneVerify: false,
      warnPhone: false,
      phoneText: "请输入手机号",
      userWord: null,
      btnStatus: false
    }
  },
  watch: {
    toggle: {
      handler: function() {
        if (this.toggle) {
          this.gift = true;
          setTimeout(() => {
            this.$refs.gift.style.opacity = "1";
            this.$refs.panel.style.transform = "scale(1)";
          }, 30);
        } else {
          this.$refs.gift.style.opacity = "0";
          this.$refs.panel.style.transform = "scale(0)";
          setTimeout(() => {
            this.gift = false;
          }, 330);
        }
      }
    },
    userName: {
      handler: function() {
        if (this.userName && this.userName.length >= 2) {
          this.nameVerify = true;
          this.onBtnStatus();
        } else {
          this.nameVerify = false;
          this.userName ? this.nameText = "请输入正确姓名" : this.nameText = "请输入姓名"
        }
      }
    },
    userPhone: {
      handler: function() {
        let pattern = /(1[3-9]\d{9}$)/;
        if (this.userPhone && pattern.test(this.userPhone)) {
          this.phoneVerify = true;
          this.onBtnStatus();
        } else {
          this.phoneVerify = false;
          this.userPhone ? this.phoneText = "请输入正确手机号" : this.phoneText = "请输入手机号"
        }
      }
    }
  },
  methods: {
    onCancel() {
      this.$emit("btn-cancel");
    },
    nameBlur() {
      if (this.nameVerify) {
        this.warnName = false;
      } else {
        this.warnName = true;
      }
    },
    phoneBlur() {
      if (this.phoneVerify) {
        this.warnPhone = false;
      } else {
        this.warnPhone = true;
      }
    },
    onBtnStatus() {
      if (this.nameVerify && this.phoneVerify) {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }
    },
    onSubmit() {
      let that = this;
      if (that.nameVerify && that.phoneVerify && that.btnStatus) {
        that.btnStatus = false;
        axiosFetch({
          method: "POST",
          url: "/api/send",
          load: "预约中..",
          params: {
            source: location.href,
            name: that.userName,
            phone: that.userPhone,
            word: that.userWord
          }
        })
        .then((res) => {
          if (res.status) {
            toastBox(res.message);
            that.$store.commit("setStateGiftbag", false);
            that.$store.commit("setStateGiftSend", true);
          } else {
            toastBox(res.message);
          }
          that.btnStatus = true;
        })
        .catch((err) => {
          console.log(err);
          that.btnStatus = true;
        })
      }
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
    width: 6.2rem;
    height: 6.33rem;
    transform: scale(0);
    background: url("./../assets/image/gift.png") no-repeat;
    background-size: 100% 100%;
    background-position: top center;
    transition: transform 300ms ease-out 100ms;
    .gift-cancel {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.6rem;
      height: 0.6rem;
      > img {
        width: 0.6rem;
        height: 0.6rem;
      }
    }
    .gift-content {
      display: flex;
      flex-direction: row;
      .gift-form {
        margin: 0.8rem 0 0 0.6rem;
        .gift-input {
          padding: 0 0 0.12rem 0;
          border-bottom: 1px solid #eeeeee;
          .gift-label {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 0.42rem;
            > div {
              display: flex;
              align-items: center;
              width: 1rem;
              font-size: 0.28rem;
              color: #ffffff;
              line-height: 0.28rem;
              height: 0.42rem;
              > em {
                margin: 0 0 0 0.04rem;
                font-size: 0.28rem;
                color: #ffffff;
                line-height: 0.3rem;
              }
            }
            > input {
              width: 3rem;
              font-size: 0.28rem;
              color: #ffffff;
              line-height: 0.28rem;
              background-color: #ff5b00;
            }
            > input:-moz-placeholder {
              font-size: 0.28rem;
              color: #ffffff;
            }
          }
          > span {
            margin: 0 0 0 1rem;
            font-size: 0.22rem;
            color: #ffffff;
            line-height: 0.22rem;
          }
        }
        .gift-form-name {
          margin: 0.36rem 0 0 0;
        }
        .gift-form-phone {
          margin: 0.24rem 0 0 0;
        }
        .gift-form-word {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          margin: 0.24rem 0 0 0;
          > div {
            display: flex;
            align-items: center;
            width: 1rem;
            font-size: 0.28rem;
            color: #ff5b00;
            line-height: 0.28rem;
            > em {
              width: 1rem;
              font-size: 0.28rem;
              color: #ffffff;
              line-height: 0.36rem;
            }
          }
          > textarea {
            width: 3rem;
            font-size: 0.28rem;
            color: #212121;
            line-height: 0.38rem;
          }
          > textarea:-moz-placeholder {
            font-size: 0.28rem;
            color: #ffffff;
          }
        }
        .gift-form-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.32rem 0 0 1rem;
          width: 2.24rem;
          height: 0.68rem;
          background-color: #ffffff;
          border: 1px solid #ffffff;
          border-radius: 0.04rem;
          > span {
            font-size: 0.32rem;
            color: #ff5b00;
            line-height: 0.32rem;
            font-weight: bolder;
          }
        }
      }
    }
  }
}
</style>