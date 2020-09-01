<template>
  <div id="wind">
    <Header @btn-slider="onSlider">
      <router-view :slider="slider" />
    </Header>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name: "App",
  data() {
    return {
      slider: false
    }
  },
  components: {
    Header
  },
  methods: {
    onSlider() {
      this.slider = true;
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  font-size: 0.32rem;
  border: 0px;
  outline: 0;
  -webkit-text-size-adjust: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-overflow-scrolling: touch;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
html, body {
  background-color: #ffffff;
}
input, textarea {
  padding: 0;
  margin: 0;
  -webkit-user-select: auto;
  -webkit-appearance: none;
}
img{
  display: block;
}
a, u{
  text-decoration: none;
}
b, em, i{
  font-weight: normal;
  font-style: normal;
}
ul li{
  list-style-type: none;
}
div, span, img {
  cursor: pointer;
}
#wind {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@-webkit-keyframes v-circular {
	0% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0
	}

	50% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -40
	}

	100% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -120
	}
}

@keyframes v-circular {
	0% {
		stroke-dasharray: 1,200;
		stroke-dashoffset: 0
	}

	50% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -40
	}

	100% {
		stroke-dasharray: 90,150;
		stroke-dashoffset: -120
	}
}
</style>
