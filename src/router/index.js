import { createRouter, createWebHistory } from 'vue-router'
import PedidosView from '../views/PedidosView.vue'
import CompraView from '@/views/CompraView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pedidos',
      component: PedidosView,
    },
    {
      path: '/comprar',
      name: 'comprar',
      component: CompraView,
    },
    {
      path: '/pedidos',
      redirect: '/',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

/** Glossário de URLs e páginas exibidas
 *
 * | Endereço         | Página exibida       |
   | ---------------- | -------------------- |
   | `/`              | `PedidosView.vue`    |
   | `/pedidos`       | Redireciona para `/` |
   | `/comprar`       | `CompraView.vue`     |
   | Rota inexistente | Redireciona para `/` |
 */

export default router
