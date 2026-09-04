<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { pedidos } from '@/data/pedidos'

const router = useRouter()

const codigoPedido = ref('')
const nomeCliente = ref('')
const nomeProduto = ref('')
const precoUnitario = ref('')
const quantidade = ref('')
const itensPedido = ref([])
const mensagemErro = ref('')
const mensagemSucesso = ref('')

const formatarMoeda = (valor) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(valor) || 0)

const limparProduto = () => {
  nomeProduto.value = ''
  precoUnitario.value = ''
  quantidade.value = ''
}

const limparPedido = () => {
  codigoPedido.value = ''
  nomeCliente.value = ''
  itensPedido.value = []
  limparProduto()
  mensagemErro.value = ''
  mensagemSucesso.value = ''
}

const totalItem = (item) => Number(item.precoUnitario) * Number(item.quantidade)

const totalPedido = computed(() =>
  itensPedido.value.reduce((total, item) => total + totalItem(item), 0),
)

const adicionarProduto = () => {
  const produto = nomeProduto.value.trim()
  const preco = Number(precoUnitario.value)
  const qtd = Number(quantidade.value)

  if (!produto || !Number.isFinite(preco) || preco <= 0 || !Number.isInteger(qtd) || qtd <= 0) {
    mensagemErro.value = 'Preencha o produto, o preço e a quantidade corretamente.'
    mensagemSucesso.value = ''
    return
  }

  itensPedido.value.push({
    id: Date.now() + Math.random(),
    produto,
    precoUnitario: Number(preco.toFixed(2)),
    quantidade: qtd,
  })

  mensagemErro.value = ''
  mensagemSucesso.value = 'ai dento.'
  limparProduto()
}

const removerProduto = (idProduto) => {
  itensPedido.value = itensPedido.value.filter((item) => item.id !== idProduto)

  if (mensagemSucesso.value === 'Produto adicionado ao pedido.') {
    mensagemSucesso.value = ''
  }
}

const finalizarPedido = () => {
  const codigo = codigoPedido.value.trim()
  const cliente = nomeCliente.value.trim()

  if (!codigo || !cliente) {
    mensagemErro.value = 'o código do pedido e o teu nome man'
    mensagemSucesso.value = ''
    return
  }

  if (itensPedido.value.length === 0) {
    mensagemErro.value = 'minimo é um bro🥀'
    mensagemSucesso.value = ''
    return
  }

  pedidos.value.push({
    codigo,
    cliente,
    itens: itensPedido.value.map((item) => ({ ...item })),
  })

  mensagemErro.value = 'big tung ira incomodar-lo🥀'
  mensagemSucesso.value = `Pedido ${codigo} cadastrado com sucesso`
  limparPedido()
  router.push({ name: 'pedidos' })
}
</script>

<template>
  <main class="container page">
    <header class="page-header">
      <h1>Fazer compra</h1>
      <p>Cadastre o cliente e adicione os produtos do pedido.</p>
    </header>

    <section class="card" aria-labelledby="dados-pedido">
      <h2 id="dados-pedido">Dados do pedido</h2>

      <div class="form-grid form-grid-two-columns">
        <div class="form-group">
          <label for="codigoPedido"> Código do pedido </label>

          <input
            id="codigoPedido"
            v-model="codigoPedido"
            name="codigoPedido"
            type="text"
            placeholder="Ex.: PED-001"
          />
        </div>

        <div class="form-group">
          <label for="nomeCliente"> Nome do cliente </label>

          <input
            id="nomeCliente"
            v-model="nomeCliente"
            name="nomeCliente"
            type="text"
            placeholder="Digite o nome do cliente"
          />
        </div>
      </div>

      <p v-if="mensagemErro" class="feedback">
        {{ mensagemErro }}
      </p>

      <p v-else-if="mensagemSucesso" class="feedback">
        {{ mensagemSucesso }}
      </p>
    </section>

    <section class="card" aria-labelledby="adicionar-produto">
      <h2 id="adicionar-produto">Adicionar produto</h2>

      <div class="form-grid form-grid-product">
        <div class="form-group">
          <label for="nomeProduto"> Produto </label>

          <input
            id="nomeProduto"
            v-model="nomeProduto"
            name="nomeProduto"
            type="text"
            placeholder="Ex.: Tomate"
          />
        </div>

        <div class="form-group">
          <label for="precoUnitario"> Preço unitário </label>

          <input
            id="precoUnitario"
            v-model="precoUnitario"
            name="precoUnitario"
            type="number"
            min="0"
            step="0.01"
            placeholder="0,00"
          />
        </div>

        <div class="form-group">
          <label for="quantidade"> Quantidade </label>

          <input
            id="quantidade"
            v-model="quantidade"
            name="quantidade"
            type="number"
            min="1"
            step="1"
            placeholder="0"
          />
        </div>
      </div>

      <div class="form-actions">
        <button class="button button-primary" type="button" @click="adicionarProduto">
          Adicionar produto
        </button>
      </div>
    </section>

    <section class="card" aria-labelledby="itens-pedido">
      <h2 id="itens-pedido">Itens do pedido</h2>

      <p v-if="itensPedido.length === 0" class="empty-state">
        Ainda não há produtos adicionados ao pedido.
      </p>

      <div v-else class="table-responsive">
        <table>
          <thead>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Preço unitário</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Total</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in itensPedido" :key="item.id">
              <td>{{ item.produto }}</td>
              <td>{{ formatarMoeda(item.precoUnitario) }}</td>
              <td>{{ item.quantidade }}</td>
              <td>{{ formatarMoeda(totalItem(item)) }}</td>
              <td>
                <button class="button button-danger" type="button" @click="removerProduto(item.id)">
                  Excluir"
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="order-total">
        <span>Total da compra</span>
        <strong>{{ formatarMoeda(totalPedido) }}</strong>
      </div>

      <div class="form-actions">
        <button class="button button-secondary" type="button" @click="limparPedido">Limpar</button>

        <button class="button button-primary" type="button" @click="finalizarPedido"></button>
      </div>
    </section>
  </main>
</template>
