<template>
  <div class="equity">
    <div v-if="equityData" class="equity-panel">
      <template v-for="(item, index) in equityData" :key="index">
        <div
          :class="['equity-list', 'equity-list-' + index]"
          @click="onRouter(index, item)"
        >
          <div>
            <img :src="equityImage[index]" alt="" />
            <span>{{ item }}</span>
          </div>
        </div>
      </template>
    </div>
    <div v-if="!equityData" class="equity-develop">开发中..</div>
  </div>
</template>

<script>
import { axiosFetch, setItem } from "@/assets/js/appUtils";
import { isWeChat, isIos } from "@/assets/js/usualUtils.js";
export default {
  name: "Equity",
  data() {
    return {
      equityData: {},
      equityImage: {
        agency: require("@/assets/image/agency-icon.png"),
        assets: require("@/assets/image/assets-icon.png"),
        broker: require("@/assets/image/broker-icon.png"),
        equity: require("@/assets/image/equity-icon.png"),
        factor: require("@/assets/image/factor-icon.png"),
        invest: require("@/assets/image/invest-icon.png"),
        itloan: require("@/assets/image/itloan-icon.png"),
        lease: require("@/assets/image/lease-icon.png"),
        loan: require("@/assets/image/loan-icon.png"),
        other: require("@/assets/image/other-icon.png"),
        pawn: require("@/assets/image/pawn-icon.png"),
        private: require("@/assets/image/private-icon.png"),
      },
    };
  },
  created() {
    this.initData();
  },
  mounted() {
    document.getElementById("scroll").scrollTo(0, 0);
    this.$nextTick(() => {
      document.body.style.display = "block";
    });
  },
  methods: {
    initData() {
      let that = this;
      axiosFetch({
        method: "POST",
        url: "api/inform",
        load: "请求中..",
        params: {},
      })
        .then((res) => {
          if (res.status) {
            that.equityData = res.data;
          }
        })
        .catch(() => {});
    },
    onRouter(val, item) {
      setItem("title", item);
      if (isWeChat() && isIos()) {
        this.$router.replace({
          name: "Stock",
          params: { key: val },
        });
      } else {
        this.$router.push({
          name: "Stock",
          params: { key: val },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.equity {
  padding: 0 0 0.42rem 0;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  .equity-panel {
    margin: 0.32rem 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 6.9rem;
    .equity-list {
      display: flex;
      align-items: flex-end;
      margin: 0.32rem 0 0 0;
      width: 3.3rem;
      height: 1.86rem;
      border-radius: 0.08rem;
      > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 0 0.18rem 0;
        > img {
          margin: 0 0 0 0.3rem;
          width: 0.36rem;
          height: 0.36rem;
        }
        > span {
          margin: 0 0 0 0.18rem;
          font-size: 0.3rem;
          color: #333333;
        }
      }
    }
    .equity-list-agency {
      background: url("../assets/image/agency.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-assets {
      background: url("../assets/image/assets.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-broker {
      background: url("../assets/image/broker.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-equity {
      background: url("../assets/image/equity.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-factor {
      background: url("../assets/image/factor.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-invest {
      background: url("../assets/image/invest.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-itloan {
      background: url("../assets/image/itloan.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-lease {
      background: url("../assets/image/lease.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-loan {
      background: url("../assets/image/loan.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-equity {
      background: url("../assets/image/equity.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-other {
      background: url("../assets/image/other.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-pawn {
      background: url("../assets/image/pawn.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
    .equity-list-private {
      background: url("../assets/image/private.png") no-repeat;
      background-size: 100%;
      background-position: center center;
      background-color: #ffffff;
    }
  }
  .equity-develop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    font-size: 0.38rem;
    color: #adadad;
  }
}
</style>