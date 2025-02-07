<template>
  <div class="stock">
    <div class="stock-head">
      <h3>{{ onTitle() }}</h3>
      <div class="stock-panel">
        <div class="stock-nature">
          <div class="stock-nature-title">股权性质:</div>
          <div class="stock-nature-box">
            <template v-for="(item, index) in stockNature" :key="index">
              <span
                :style="
                  natureStock == index
                    ? 'background-color: #D63F43; color: #ffffff;'
                    : ''
                "
                @click="onTabber(0, index)"
                >{{ item }}</span
              >
            </template>
          </div>
        </div>
        <div class="stock-address">
          <div class="stock-address-title">注册地址:</div>
          <div class="stock-address-box">
            <template v-for="(item, index) in stockAddress" :key="index">
              <span
                :style="
                  addressStock == index
                    ? 'background-color: #D63F43; color: #ffffff;'
                    : ''
                "
                @click="onTabber(1, index)"
                >{{ item }}</span
              >
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="stock-wind">
      <template v-for="(item, index) in countData" :key="index">
        <div class="stock-wind-list" @click="onRouter(item)">
          <div class="stock-wind-img">
            <img :src="item.pic_card" alt="" />
          </div>
          <div class="stock-wind-box">
            <div class="stock-wind-title">
              <span>名称: </span>
              <span>{{ item.title }}</span>
            </div>
            <div class="stock-wind-msg">
              <span>地址: </span>
              <span>{{ item.address }}</span>
            </div>
            <div class="stock-wind-msg">
              <span>日期: </span>
              <span>{{ item.setup }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { axiosFetch, getItem, setItem } from "@/assets/js/appUtils";
import { isWeChat, isIos } from "@/assets/js/usualUtils.js";
export default {
  name: "Stock",
  data() {
    return {
      stockKey: null,
      stockNature: ["内资", "外资", "中外合资"],
      stockAddress: ["北京", "上海", "浙江", "深圳"],
      stockData: [],
      countData: [],
      natureStock: 0,
      addressStock: Number,
    };
  },
  watch: {
    natureStock: {
      handler: function () {
        this.onCount();
      },
      deep: true,
    },
    addressStock: {
      handler: function () {
        this.onCount();
      },
      deep: true,
    },
  },
  created() {
    this.stockKey = this.$route.params.key;
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
        method: "GET",
        url: "api/equity/" + that.stockKey,
        load: "请求中..",
        params: {},
      })
        .then((res) => {
          if (res.status) {
            that.stockData = res.data;
            that.addressStock = 0;
          }
        })
        .catch(() => {});
    },
    onTitle() {
      return getItem("title");
    },
    onTabber(key, val) {
      switch (key) {
        case 0:
          this.natureStock = val;
          break;
        case 1:
          this.addressStock = val;
          break;
      }
    },
    onCount() {
      let arr = [];
      for (let i = 0; i < this.stockData.length; i++) {
        if (
          this.stockData[i].type == this.natureStock + 1 &&
          this.stockData[i].location == this.addressStock + 1
        ) {
          arr.push(this.stockData[i]);
        }
      }
      this.countData = arr;
    },
    onRouter(item) {
      const data = {
        title: item.title,
        release: item.release,
        capital: item.capital,
        setup: item.setup,
        time_limit: item.time_limit,
        register: item.register,
        address: item.address,
        pic_card: item.pic_card,
        advantage: item.advantage,
        flow: item.flow,
        need_time: item.need_time,
      };
      setItem("data", data);
      if (isWeChat() && isIos()) {
        this.$router.replace({
          name: "Detail",
          params: { id: this.stockKey + item.id },
        });
      } else {
        this.$router.push({
          name: "Detail",
          params: { id: this.stockKey + item.id },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.stock {
  width: 100%;
  min-height: 100vh;
  background-color: #ffffff;
  .stock-head {
    padding: 0 0 0.26rem 0;
    border-bottom: 1px solid #eeeeee;
    > h3 {
      margin: 0.34rem 0 0 0;
      font-size: 0.38rem;
      color: #333333;
      font-weight: bolder;
      text-align: center;
    }
    .stock-panel {
      .stock-nature {
        display: flex;
        flex-direction: row;
        margin: 0.28rem 0 0 0;
        .stock-nature-title {
          display: flex;
          align-items: center;
          margin: 0 0 0 0.3rem;
          font-size: 0.3rem;
          color: #666666;
        }
        .stock-nature-box {
          display: flex;
          flex-direction: row;
          margin: 0 0 0 0.18rem;
          > span {
            padding: 0.12rem 0.28rem;
            margin: 0 0.2rem 0 0;
            font-size: 0.3rem;
            color: #666666;
            background-color: #eeeeee;
          }
        }
      }
      .stock-address {
        display: flex;
        flex-direction: row;
        margin: 0.28rem 0 0 0;
        .stock-address-title {
          display: flex;
          align-items: center;
          margin: 0 0 0 0.3rem;
          font-size: 0.3rem;
          color: #666666;
        }
        .stock-address-box {
          display: flex;
          flex-direction: row;
          margin: 0 0 0 0.18rem;
          > span {
            padding: 0.12rem 0.28rem;
            margin: 0 0.2rem 0 0;
            font-size: 0.3rem;
            color: #666666;
            background-color: #eeeeee;
          }
        }
      }
    }
  }
  .stock-wind {
    .stock-wind-list {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      padding: 0.16rem 0;
      width: 6.9rem;
      overflow: hidden;
      border-bottom: 1px solid #eeeeee;
      .stock-wind-img {
        width: 1.42rem;
        height: 1.38rem;
        overflow: hidden;
        > img {
          width: 100%;
          height: auto;
          background-color: #eeeeee;
        }
      }
      .stock-wind-box {
        margin: 0 0 0 0.28rem;
        .stock-wind-msg {
          display: flex;
          flex-direction: row;
          margin: 0.08rem 0 0 0;
          > span {
            font-size: 0.28rem;
            color: #666666;
          }
        }
        .stock-wind-title {
          display: flex;
          flex-direction: row;
          margin: 0.04rem 0 0 0;
          > span {
            font-size: 0.3rem;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>