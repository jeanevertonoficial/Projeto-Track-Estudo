import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import ListaDeTarefas from "../views/ListaDeTarefas.vue";
import ListaDeProjetos from "../views/ListaDeProjetos.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'ListaDeTarefas',
    component: ListaDeTarefas
  },
  {
    path: '/Projetos',
    name: 'ListaDeProjetos',
    component: ListaDeProjetos
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default router
