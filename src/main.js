import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false

/**
 * Глобальная регистрация компонентов
 * https://ru.vuejs.org/v2/guide/components-registration.html
 */
// 

const requireComponent = require.context(
  './components',
  // Обрабатывать или нет подкаталоги
  false,
  // Регулярное выражение для определения файлов базовых компонентов
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Получение конфигурации компонента
  const componentConfig = requireComponent(fileName)

  // Получение имени компонента в PascalCase
  const componentName = upperFirst(
    camelCase(
      // Получаем имя файла независимо от глубины вложенности
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Глобальная регистрация компонентов
  Vue.component(
    componentName,
    // Поиск опций компонента в `.default`, который будет существовать,
    // если компонент экспортирован с помощью `export default`,
    // иначе будет использован корневой уровень модуля.
    componentConfig.default || componentConfig
  )
})

Vue.use(Vuelidate)
Vue.use(VueMask);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
