import { createStore } from 'vuex'
import { isWeChat, isIos } from '@/assets/js/usualUtils.js'

export default createStore({
  state: {
    stateIndex: 0, // 是否首页
    stateHead: true, // 显示头部固定栏
    stateType: true, // 控制顶部固定栏目全屏和非全屏
    stateToggle: false, // 控制右侧菜单栏目显示隐藏
    statePoster: false, // 是否显示海报广告
    stateGiftbag: false, // 是否显示电话弹窗
    stateIosBar: isWeChat() && isIos(), // 是否是微信ios
  },
  getters: {
    getStateIndex(state) {
      return state.stateIndex;
    },
    getStateHead(state) {
      return state.stateHead;
    },
    getStateType(state) {
      return state.stateType;
    },
    getStateToggle(state) {
      return state.stateToggle;
    },
    getStatePoster(state) {
      return state.statePoster;
    },
    getStateGiftbag(state) {
      return state.stateGiftbag;
    },
    getStateIosBar(state) {
      return state.stateIosBar;
    }
  },
  mutations: {
    setStateIndex(state, stateIndex) {
      state.stateIndex = stateIndex;
    },
    setStateHead(state, stateHead) {
      state.stateHead = stateHead;
    },
    setStateType(state, stateType) {
      state.stateType = stateType;
    },
    setStateToggle(state, stateToggle) {
      state.stateToggle = stateToggle;
    },
    setStatePoster(state, statePoster) {
      state.statePoster = statePoster;
    },
    setStateGiftbag(state, stateGiftbag) {
      state.stateGiftbag = stateGiftbag;
    }
  },
  actions: {
  },
  modules: {
  }
})
