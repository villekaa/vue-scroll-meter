import { has } from "lodash";

const VueScrollMeter = {
  install(Vue, options) {
    new Vue({
      created() {
        const div = document.createElement("div");
        // Added class for customization
        div.setAttribute("class", "ScrollMeter");
        // CSS
        div.style.zIndex = "99999999";
        div.style.position = "fixed";
        div.style.top = "0";
        div.style.left = "0";

        div.style.WebkitTransition = has(options, "delay")
          ? `all ${options.delay}s`
          : "all 1s";
        div.style.MozTransition = has(options, "delay")
          ? `all ${options.delay}s`
          : "all 1s";
        div.style.opacity = has(options, "opacity")
          ? `${options.opacity}`
          : "1";
        div.style.height = has(options, "height")
          ? `${options.height}px`
          : "4px";
        div.style.background = has(options, "color")
          ? options.color
          : "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)";

        document.body.appendChild(div);

        window.addEventListener("scroll", () => {
          const current =
            ((document.documentElement.scrollTop + document.body.scrollTop) /
              (document.documentElement.scrollHeight -
                document.documentElement.clientHeight)) *
            100;
          div.style.width = Math.ceil(current) + "%";
        });
      },
    });
  },
};
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueScrollMeter);
}
export default VueScrollMeter;
