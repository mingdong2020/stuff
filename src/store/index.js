import { createStore } from 'vuex'
import { isWeChat, isIos } from '@/assets/js/usualUtils.js'

export default createStore({
  state: {
    stateHead: true, // 显示头部固定栏
    stateType: true, // 控制顶部固定栏目全屏和非全屏
    stateToggle: false, // 控制右侧菜单栏目显示隐藏
    statePoster: false, // 是否显示海报广告
    stateIosBar: isWeChat() && isIos(), // 是否是微信ios
  },
  getters: {
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
    getStateIosBar(state) {
      return state.stateIosBar;
    }
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
