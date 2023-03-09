import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

import './assets/main.css'

let app:any = null;

function render(props: any) {
    const { container } = props;
    app = createApp(App)
    app.use(router(container?'/vue':'/'))
    const c = container
      ? container.querySelector("#app")
      : document.getElementById("app")
      app.mount(c)
  }
  
  renderWithQiankun({
    mount(props) {
      //@ts-ignore
      window.abbbb = 'vue'
      //@ts-ignore
      console.log('vue WINODW',window.proxy.WINDOW);
       //@ts-ignore
      console.log('vue proxy',window.proxy)
      console.log('vue props',props)
      render(props);
    },
    bootstrap() {
      console.log("bootstrap");
    },
    unmount(props: any) {
      console.log("vue3sub unmount");
      app?.unmount();
    },
    update(props: any) {
      console.log("vue3sub update");
      console.log(props)
    },
  });
  
  if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
  }