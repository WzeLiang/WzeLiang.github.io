import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import FlowChart from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-title.scss";
import Mermaid from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import Presentation from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("CodeTabs", CodeTabs);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/project/github/WzeLiang.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
        
  },
});
