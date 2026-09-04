<script setup>
import { computed, ref } from 'vue'
import { pedidos } from '@/data/pedidos'

const filtro = ref('')
const filtroAplicado = ref('')

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor) || 0)

const totalItensPedido = (pedido) =>
  pedido.itens.reduce((total, item) => total + Number(item.quantidade), 0)

const valorTotalPedido = (pedido) =>
  pedido.itens.reduce(
    (total, item) => total + Number(item.precoUnitario) * Number(item.quantidade),
    0,
  )

const pedidosFiltrados = computed(() => {
  const busca = filtroAplicado.value.trim().toLowerCase()

  if (!busca) {
    return pedidos.value
  }

  return pedidos.value.filter((pedido) => {
    const codigo = pedido.codigo.toLowerCase()
    const cliente = pedido.cliente.toLowerCase()

    return codigo.includes(busca) || cliente.includes(busca)
  })
})

const totalPedidos = computed(() => pedidos.value.length)

const totalItensVendidos = computed(() =>
  pedidos.value.reduce((total, pedido) => total + totalItensPedido(pedido), 0),
)

const totalVendido = computed(() =>
  pedidos.value.reduce((total, pedido) => total + valorTotalPedido(pedido), 0),
)

const aplicarFiltro = () => {
  filtroAplicado.value = filtro.value
}
</script>

<template>
  <main class="container page">
    <header class="page-header">
      <h1>Resumo dos pedidos</h1>
      <p>Consulte os pedidos finalizados e o total vendido.</p>
    </header>

    <section class="summary-grid" aria-label="Resumo geral das vendas">
      <article class="summary-card">
        <span>Pedidos realizados</span>
        <strong>{{ totalPedidos }}</strong>
      </article>

      <article class="summary-card">
        <span>Itens vendidos</span>
        <strong>{{ totalItensVendidos }}</strong>
      </article>

      <article class="summary-card">
        <span>Total vendido</span>
        <strong>{{ formatarMoeda(totalVendido) }}</strong>
      </article>
    </section>

    <section class="card" aria-labelledby="filtro-pedidos">
      <h2 id="filtro-pedidos">Filtrar pedidos</h2>

      <div class="filter-container">
        <div class="form-group">
          <label for="filtro"> Nome do cliente ou código do pedido </label>

          <input
            id="filtro"
            v-model="filtro"
            name="filtro"
            type="search"
            placeholder="Digite o cliente ou código"
          />
        </div>

        <button class="button button-primary" type="button" @click="aplicarFiltro">Filtrar</button>
      </div>
    </section>

    <section class="card" aria-labelledby="pedidos-realizados">
      <h2 id="pedidos-realizados">Pedidos realizados</h2>

      <p v-if="pedidosFiltrados.length === 0" class="empty-state">
        Nenhum pedido encontrado com esse filtro.
      </p>

      <div v-else class="table-responsive">
        <table>
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Cliente</th>
              <th scope="col">Produtos</th>
              <th scope="col">Itens</th>
              <th scope="col">Total</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="pedido in pedidosFiltrados" :key="pedido.codigo">
              <td>{{ pedido.codigo }}</td>
              <td>{{ pedido.cliente }}</td>
              <td>{{ pedido.itens.length }}</td>
              <td>{{ totalItensPedido(pedido) }}</td>
              <td>{{ formatarMoeda(valorTotalPedido(pedido)) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>
