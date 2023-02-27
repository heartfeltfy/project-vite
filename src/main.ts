import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import "@/style/root.scss"
import "normalize.css"
import router from "./router"
import store from "@/store"

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app")
