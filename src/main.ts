import { createApp } from 'vue'
import App from '@/App.vue'
import { GameLogic } from '@/classes/GameLogic'
import { store } from '@/store'

const app = createApp(App)
app.use(store)
app.mount('#app')

const gameLogic = new GameLogic()
gameLogic.Initialize()
