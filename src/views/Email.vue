<template>
  <div class="email">
    <div class="email-content">
      <div class="email-form">
        <div class="email-input email-form-name">
          <div class="email-label">
            <div>*<em>姓名: </em></div>
            <input type="text" v-model="userName" placeholder="请输入姓名" @blur="nameBlur" />
          </div>
          <span v-show="warnName">{{ nameText }}</span>
        </div>
        <div class="email-input email-form-phone">
          <div class="email-label">
            <div>*<em>电话: </em></div>
            <input type="number" v-model="userPhone" placeholder="请输入手机号" @blur="phoneBlur" />
          </div>
          <span v-show="warnPhone">{{ phoneText }}</span>
        </div>
        <div class="email-input email-form-company">
          <div class="email-label">
            <div>*<em>公司: </em></div>
            <input type="text" v-model="userCompany" placeholder="请输入公司名称" @blur="companyBlur" />
          </div>
          <span v-show="warnCompany">{{ companyText }}</span>
        </div>
        <div class="email-form-word">
          <div><em>留言: </em></div>
          <textarea v-model="userWord" rows="4" cols="20" placeholder="请输入留言"></textarea>
        </div>
        <div class="email-form-btn" :style="btnStatus ? '' : 'opacity: 0.48;'" @click="onSubmit">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toastBox } from "@/assets/js/appUtils.js"
import { axiosFetch } from "@/assets/js/appUtils"
export default {
  name: 'Email',
  data() {
    return {
      userName: null,
      nameVerify: false,
      warnName: false,
      nameText: "请输入姓名",
      userPhone: null,
      phoneVerify: false,
      warnPhone: false,
      phoneText: "请输入手机号",
      userCompany: null,
      companyVerify: false,
      warnCompany: false,
      companyText: "请输入公司名称",
      userWord: null,
      btnStatus: false
    }
  },
  watch: {
    userName: {
      handler: function() {
        if (this.userName && this.userName.length >= 2) {
          this.nameVerify = true;
        } else {
          this.nameVerify = false;
          this.userName ? this.nameText = "请输入正确姓名" : this.nameText = "请输入姓名"
        }
        this.onBtnStatus();
      }
    },
    userPhone: {
      handler: function() {
        let pattern = /(1[3-9]\d{9}$)/;
        if (this.userPhone && pattern.test(this.userPhone)) {
          this.phoneVerify = true;
        } else {
          this.phoneVerify = false;
          this.userPhone ? this.phoneText = "请输入正确手机号" : this.phoneText = "请输入手机号"
        }
        this.onBtnStatus();
      }
    },
    userCompany: {
      handler: function() {
        if (this.userCompany && this.userCompany.length >= 6) {
          this.companyVerify = true;
        } else {
          this.companyVerify = false;
          this.userCompany ? this.companyText = "请输入正确公司名称" : this.companyText = "请输入公司名称"
        }
        this.onBtnStatus();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      document.body.style.display = "block";
    })
  },
  methods: {
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
    companyBlur() {
      if (this.companyVerify) {
        this.warnCompany = false;
      } else {
        this.warnCompany = true;
      }
    },
    onBtnStatus() {
      if (this.nameVerify && this.phoneVerify && this.companyVerify) {
        this.btnStatus = true;
      } else {
        this.btnStatus = false;
      }
    },
    onSubmit() {
      let that = this;
      if (that.nameVerify && that.phoneVerify && that.companyVerify && that.btnStatus) {
        that.btnStatus = false;
        axiosFetch({
          method: "POST",
          url: "/api/send",
          load: "预约中..",
          params: {
            source: location.href,
            name: that.userName,
            phone: that.userPhone,
            company: that.userCompany,
            word: that.userWord
          }
        })
        .then((res) => {
          if (res.status) {
            toastBox(res.message);
            if (!(location.href.includes("https://mdqygl.cn"))) {
              that.$store.commit("setStateGiftbag", false);
              that.$store.commit("setStateGiftSend", true);
            }
          } else {
            toastBox(res.message);
          }
          that.btnStatus = true;
        })
        .catch((err) => {
          that.btnStatus = true;
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.email {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #eeeeee;
  .email-order {
    > h3 {
      margin: 0.54rem 0 0 0;
      font-size: 0.38rem;
      color: #212121;
      text-align: center;
    }
  }
  .email-content {
    display: flex;
    flex-direction: row;
    padding: 0 0 0.48rem 0;
    margin: 0.38rem auto 0 auto;
    width: 6.8rem;
    border-radius: 0.05rem;
    background-color: #ffffff;
    .email-form {
      margin: 0.4rem 0 0 0.6rem;
      .email-input {
        padding: 0 0 0.12rem 0;
        .email-label {
          display: flex;
          flex-direction: column;
          > div {
            display: flex;
            align-items: center;
            font-size: 0.32rem;
            color: #de2128;
            line-height: 0.32rem;
            > em {
              margin: 0 0 0 0.04rem;
              font-size: 0.32rem;
              color: #212121;
              line-height: 0.32rem;
            }
          }
          > input {
            margin: 0.24rem 0 0 0;
            padding: 0.14rem;
            width: 5.6rem;
            font-size: 0.32rem;
            color: #212121;
            line-height: 0.32rem;
            background-color: #ffffff;
            border: 1px solid #eeeeee;
            border-radius: 0.05rem;
          }
          > input:-moz-placeholder {
            font-size: 0.32rem;
            color: #999999;
          }
        }
        > span {
          font-size: 0.26rem;
          color: #de2128;
          line-height: 0.26rem;
        }
      }
      .email-form-name {
        margin: 0.36rem 0 0 0;
      }
      .email-form-phone {
        margin: 0.24rem 0 0 0;
      }
      .email-form-company {
        margin: 0.24rem 0 0 0;
      }
      .email-form-word {
        display: flex;
        flex-direction: column;
        margin: 0.24rem 0 0 0;
        > div {
          display: flex;
          align-items: center;
          width: 1rem;
          font-size: 0.32rem;
          color: #ff5b00;
          line-height: 0.32rem;
          > em {
            font-size: 0.32rem;
            color: #212121;
            line-height: 0.32rem;
          }
        }
        > textarea {
          margin: 0.24rem 0 0 0;
          padding: 0.08rem;
          width: 5.6rem;
          font-size: 0.32rem;
          color: #212121;
          line-height: 0.48rem;
          border: 1px solid #eeeeee;
        }
        > textarea:-moz-placeholder {
          font-size: 0.32rem;
          color: #999999;
        }
      }
      .email-form-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.48rem auto 0 auto;
        width: 5.6rem;
        height: 0.8rem;
        background-color: #5cb85c;
        border: 1px solid #5cb85c;
        border-radius: 0.05rem;
        > span {
          font-size: 0.32rem;
          color: #ffffff;
          line-height: 0.32rem;
          font-weight: bolder;
        }
      }
    }
  }
}
</style>