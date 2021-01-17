import { createApp } from 'vue'
import App from '@/App.vue'
import { GameLogic } from '@/classes/GameLogic'
import { store } from '@/store'
import '@/scripts/UserControls'

const app = createApp(App)
app.use(store)

const gameLogic = new GameLogic(10, 10)
gameLogic.Initialize()

app.mount('#app')
