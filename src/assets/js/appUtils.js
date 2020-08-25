/**
 * 【共用方法】toast
 */
let toastStatus = true;
export function toastBox(text = "网络错误～") {
  if (toastStatus) {
    toastStatus = false;
    let toast = document.createElement("div");
    toast.id = "toast";
    toast.style.position = "fixed";
    toast.style.top = "50%";
    toast.style.left = "50%";
    toast.style.opacity = 0;
    toast.style.padding = "0.14rem 0.28rem";
    toast.style.borderRadius = "0.1rem";
    toast.style.transform = "translate(-50%, -50%)";
    toast.style.background = "rgba(0, 0, 0, 0.68)";
    toast.style.zIndex = "999";
    toast.innerHTML = `<span style="min-width: 1.4rem; max-width: 4.4rem; font-size: 0.28rem; color: #ffffff;">${text}</span>`;
    document.body.appendChild(toast);
    let count = 0;
    let show = setInterval(() => {
      count += 10;
      toast.style.opacity = count / 100;
      if (count >= 100) {
        clearInterval(show);
        setTimeout(() => {
          let hide = setInterval(() => {
            count -= 10;
            toast.style.opacity = count / 100;
            if (count <= 0) {
              clearInterval(hide);
              document.getElementById("toast").remove();
              toastStatus = true;
            }
          }, 30);
        }, 2600);
      }
    }, 30);
  }
}
/**
 * 【共用方法】loading
 */
let loadStatus = true;
export function loadedBox(type, text = null) {
  if (type && loadStatus) {
    loadStatus = false;
    let loaded = document.createElement("div");
    loaded.id = "loaded";
    loaded.style.opacity = 0;
    loaded.style.position = "fixed";
    loaded.style.top = 0;
    loaded.style.left = 0;
    loaded.style.width = "100%";
    loaded.style.height = "100vh";
    loaded.style.background = "rgba(0, 0, 0, 0.28)";
    loaded.style.zIndex = "999";
    loaded.innerHTML = `<div style="position: absolute; top: 50%; left: 50%; width: 1.6rem; height: 1.6rem; background: rgba(0, 0, 0, 0.68); transform: translate(-50%, -50%); border-radius: 0.1rem;">
      <svg viewBox="-5 3 70 70" style="color: rgb(255, 255, 255)">
        <circle cx="30" cy="30" r="15" fill="none" style="animation: v-circular 1.5s ease-in-out infinite; stroke: currentColor; stroke-width: 3; stroke-linecap: round;"></circle>
      </svg>
      <span style="position: absolute; left: 50%; bottom: 0.1rem; overflow: hidden; white-space: nowrap; width: 1.4rem; transform: translate(-50%); font-size: 0.24rem; color: #ffffff; text-align: center;">${text}</span>
    </div>`;
    document.body.appendChild(loaded);
    let count = 0;
    let show = setInterval(() => {
      count += 10;
      loaded.style.opacity = count / 100;
      if (count >= 100) {
        clearInterval(show);
      }
    }, 30);
  } else if (!type && !loadStatus) { //销毁load
    loadStatus = true;
    let loaded = document.getElementById("loaded");
    let count = 100;
    let hide = setInterval(() => {
      count -= 10;
      loaded.style.opacity = count / 100;
      if (count <= 0) {
        clearInterval(hide);
        document.getElementById("loaded").remove();
        loadStatus = true;
      }
    }, 30);
  }
}