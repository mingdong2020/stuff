<template>
  <div class="home">
    <div class="swiper-container" :style="'height:' + clientHeight + 'px;'">
      <div class="swiper-wrapper">
        <div
          :class="
            bannerRatio
              ? 'swiper-slide slide-banner banner-aito'
              : 'swiper-slide slide-banner'
          "
        >
          <div class="slide-slogan">
            <h1>我们研究并提供</h1>
            <h1>企业需要的服务</h1>
            <h1>帮助企业</h1>
            <h1>实现更大的经济效益！</h1>
          </div>
          <div class="slide-arrow" @click="onSilder">
            <img src="~@/assets/image/arrow.png" alt="明动咨询" />
          </div>
        </div>
        <div class="swiper-slide slide-inpuk">
          <div
            class="slide-inform"
            :style="
              clientRatio == 1
                ? 'margin: 0.44rem auto 0 auto;'
                : 'margin: 1.34rem auto 0 auto;'
            "
          >
            <h3>
              明动咨询成立于2013年10月18日,
              是第一批入驻上海自贸区的咨询行业公司。
            </h3>
            <br />
            <h3>
              我们主要服务于中国(上海)自由贸易试验区的招商引资、客户运营咨询，资产管理、投资管理、融资租赁、商业保理以及其他类金融行业咨询服务。
            </h3>
          </div>
          <div class="slide-bus">
            <h2>我们的业务</h2>
            <div class="slide-grid">
              <template v-for="(item, index) in listData" :key="index">
                <div class="slide-list" @click="onRouter(item.path)">
                  <img :src="item.image" alt="明动咨询" />
                  <span>{{ item.name }}</span>
                </div>
              </template>
            </div>
          </div>
          <div class="slide-statement">
            <a href="https://beian.miit.gov.cn/" target="_blank"
              >沪ICP备17000006号</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper.less";
import Swiper from "swiper/swiper-bundle.js";
import { isWeChat, isIos } from "@/assets/js/usualUtils.js";
export default {
  name: "Home",
  props: {
    slider: Boolean,
  },
  data() {
    return {
      clientRatio: 1, // 1 正常屏幕 2 高屏幕
      clientWidth: 0,
      clientHeight: 0,
      bannerSwiper: Object,
      bannerRatio: false, // 首屏图片自适应
      hasHandler: false, // 用户是否手动滑动过
      listData: [
        {
          name: "财务代理",
          path: "/account",
          image: require("./../assets/image/home2.png"),
        },
        {
          name: "园区直招",
          path: "/garden",
          image: require("./../assets/image/home3.png"),
        },
        // {
        //   name: "爱税筹",
        //   path: "/mitax",
        //   image: require("./../assets/image/home4.png"),
        // },
        {
          name: "舟山自贸区",
          path: "/steamer",
          image: require("./../assets/image/home5.png"),
        },
        {
          name: "股权服务",
          path: "/equity",
          image: require("./../assets/image/home6.png"),
        },
        {
          name: "在线预约",
          path: "/email",
          image: require("./../assets/image/home7.png"),
        },
        {
          name: "关于我们",
          path: "/about",
          image: require("./../assets/image/home8.png"),
        },
      ],
    };
  },
  watch: {
    slider: {
      handler: function () {
        if (!this.hasHandler && this.bannerSwiper.activeIndex == 0) {
          this.bannerSwiper.slideTo(1, 1000, false);
          this.$store.commit("setStateType", false);
        }
      },
    },
  },
  mounted() {
    let that = this;
    that.clientWidth = window.innerWidth;
    that.clientHeight = window.innerHeight;
    // 底图自适应
    const imgWidth = 750;
    const imgHeight = 1334;
    const imgHeightActual = (imgHeight * that.clientWidth) / imgWidth;
    if (imgHeightActual < that.clientHeight) {
      that.bannerRatio = true;
    }
    // 小屏幕大屏幕适配
    if ((that.clientWidth / that.clientHeight).toFixed(2) >= "0.62") {
      that.clientRatio = 1;
    } else if ((that.clientWidth / that.clientHeight).toFixed(2) <= "0.52") {
      that.clientRatio = 2;
    }
    // 初始化模块
    that.$nextTick(() => {
      that.bannerSwiper = new Swiper(".home .swiper-container", {
        mousewheel: true,
        direction: "vertical",
        height: that.clientHeight,
        observer: true,
        observeParents: true,
        on: {
          slideChangeTransitionStart: function () {
            that.hasHandler = true;
            that.$store.commit(
              "setStateType",
              this.activeIndex == 0 ? true : false
            );
          },
        },
      });

      setTimeout(() => {
        document.body.style.display = "block";
      }, 300);
    });
  },
  methods: {
    onSilder() {
      if (this.bannerSwiper.activeIndex == 0) {
        this.bannerSwiper.slideTo(1, 1000, false);
        this.$store.commit("setStateType", false);
      }
    },
    onRouter(path) {
      if (isWeChat() && isIos()) {
        this.$router.replace({
          path: path,
        });
      } else {
        this.$router.push({
          path: path,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  background-color: #ffffff;
  .swiper-container {
    .swiper-wrapper {
      .swiper-slide {
        width: 100%;
        height: 100%;
        background-color: #ffffff;
      }
      .slide-banner {
        background: url("~@/assets/image/banner.jpg") no-repeat;
        background-size: 100%;
        background-position: top center;
        .slide-slogan {
          margin: 4.74rem 0 0 0.5rem;
          > h1 {
            font-size: 0.5rem;
            color: #ffffff;
            font-weight: normal;
            line-height: 0.5rem;
            &:nth-child(1) {
              margin: 0 0 0 0.88rem;
            }
            &:nth-child(2) {
              margin: 0.22rem 0 0 1.88rem;
            }
            &:nth-child(3) {
              margin: 0.44rem 0 0 0.88rem;
            }
            &:nth-child(4) {
              margin: 0.22rem 0 0 1.88rem;
            }
          }
        }
        .slide-arrow {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translate(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 0 0.68rem 0;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50px;
          border: 0.02rem solid #ffffff;
          overflow: hidden;
          z-index: 888;
          > img {
            width: 0.34rem;
            height: 0.34rem;
            animation: arrowAnimat 1s linear 0s infinite normal;
            -moz-animation: arrowAnimat 1s linear 0s infinite normal;
            -webkit-animation: arrowAnimat 1s linear 0s infinite normal;
            -o-animation: arrowAnimat 1s linear 0s infinite normal;
            z-index: 999;
          }
          @keyframes arrowAnimat {
            0% {
              margin-top: -1.2rem;
            }
            100% {
              margin-top: 1.2rem;
            }
          }

          @-moz-keyframes arrowAnimat {
            0% {
              margin-top: -1.2rem;
            }
            100% {
              margin-top: 1.2rem;
            }
          }

          @-webkit-keyframes arrowAnimat {
            0% {
              margin-top: -1.2rem;
            }
            100% {
              margin-top: 1.2rem;
            }
          }

          @-o-keyframes arrowAnimat {
            0% {
              margin-top: -1.2rem;
            }
            100% {
              margin-top: 1.2rem;
            }
          }
        }
      }
      .slide-inpuk {
        position: relative;
        .slide-inform {
          margin: 1.34rem auto 0 auto;
          line-height: 0.48rem;
          width: 6.5rem;
          > h3 {
            width: 6.7rem;
            font-size: 0.32rem;
            color: #222222;
            font-weight: 400;
          }
        }
        .slide-bus {
          margin: 0.26rem 0 0 0;
          > h2 {
            margin: 0 0 0 0.48rem;
            font-size: 0.38rem;
            color: #222222;
            font-weight: bolder;
          }
          .slide-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            margin: 0.12rem auto 0 auto;
            width: 7.04rem;
            .slide-list {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              width: 1.76rem;
              margin: 0.26rem 0 0 0;
              > img {
                margin: 0 auto;
                width: 1.26rem;
                height: 1.26rem;
                background-color: #eeeeee;
                border-radius: 0.12rem;
              }
              > span {
                margin: 0.12rem 0 0 0;
                font-size: 0.32rem;
                color: #666666;
                font-weight: 400;
                text-align: center;
              }
            }
          }
        }
        .slide-statement {
          position: absolute;
          bottom: 1.22rem;
          left: 0;
          margin: 0.42rem 0 0 0;
          width: 100%;
          text-align: center;
          > a {
            font-size: 0.26rem;
            color: #8f8f8f;
          }
        }
      }
      .banner-aito {
        background: url("~@/assets/image/banner.jpg") no-repeat;
        background-position: top center;
        background-size: auto 100%;
      }
    }
  }
}
</style>
