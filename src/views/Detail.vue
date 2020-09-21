<template>
  <div class="detail">
    <h3>{{ detailData.title }}</h3>
    <div class="detail-part">
      <div class="detail-title">{{ detailData.release }}</div>
      <div class="detail-panel">
        <span>公司名称: {{ detailData.title }}</span>
        <span>注册资本: {{ detailData.capital }}</span>
        <span>成立日期: {{ detailData.setup }}</span>
        <span>营业期限至: {{ detailData.time_limit }}</span>
        <span>登记机关: {{ detailData.register }}</span>
        <span>注册地址: {{ detailData.address }}</span>
      </div>
    </div>
    <div class="detail-part">
      <div class="detail-title">证件展示</div>
      <div class="detail-panel">
        <img :src="detailData.pic_card" alt="" />
      </div>
    </div>
    <div class="detail-part">
      <div class="detail-title">转让优势</div>
      <div class="detail-panel">
        <span>{{ detailData.advantage }}</span>
      </div>
    </div>
    <div class="detail-part">
      <div class="detail-title">转让流程</div>
      <div class="detail-panel">
        <span>{{ detailData.flow }}</span>
      </div>
    </div>
    <div class="detail-part">
      <div class="detail-title">转让时间</div>
      <div class="detail-panel">
        <span>{{ detailData.need_time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getItem } from "@/assets/js/appUtils"
export default {
  name: "Detail",
  data() {
    return {
      detailData: {}
    }
  },
  created() {
    this.detailData = getItem("data");
  },
  mounted() {
    document.getElementById("scroll").scrollTo(0, 0);
    this.$nextTick(() => {
      document.body.style.display = "block";
    })
  },
}
</script>

<style lang="less" scoped>
.detail {
  padding: 0 0 0.34rem 0;
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
  > h3 {
    margin: 0.48rem 0 0 0.3rem;
    font-size: 0.38rem;
    color: #333333;
    font-weight: bolder;
  }
  .detail-part {
    margin: 0.32rem 0.3rem 0 0.3rem;
    width: 6.9rem;
    .detail-title {
      position: relative;
      padding: 0 0 0 0.2rem;
      font-size: 0.3rem;
      color: #333333;
      &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0.06rem;
        height: 0.42rem;
        background-color: #D63F43;
      }
    }
    .detail-panel {
      display: flex;
      flex-direction: column;
      margin: 0.22rem 0 0 0;
      padding: 0 0.14rem 0.28rem 0.14rem;
      border: 1px solid #eeeeee;
      border-radius: 0.08rem;
      > span {
        margin: 0.16rem 0 0 0;
        font-size: 0.28rem;
        color: #666666;
      }
      > img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>