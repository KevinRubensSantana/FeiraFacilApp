<script setup>
  // O aluno deverá implementar a lógica do componente.
  import { pedidos } from '@/data/pedidos'
</script>

<template>
  <main class="container page">
    <header class="page-header">
      <h1>Resumo dos pedidos</h1>
      <p>
        Consulte os pedidos finalizados e o total vendido.
      </p>
    </header>

    <section
      class="summary-grid"
      aria-label="Resumo geral das vendas"
    >
      <article class="summary-card">
        <span>Pedidos realizados</span>

        <!-- O aluno deverá calcular este valor. -->
        <strong>0</strong>
      </article>

      <article class="summary-card">
        <span>Itens vendidos</span>

        <!-- O aluno deverá calcular este valor. -->
        <strong>0</strong>
      </article>

      <article class="summary-card">
        <span>Total vendido</span>

        <!-- O aluno deverá calcular este valor. -->
        <strong>R$ 0,00</strong>
      </article>
    </section>

    <section class="card" aria-labelledby="filtro-pedidos">
      <h2 id="filtro-pedidos">Filtrar pedidos</h2>

      <div class="filter-container">
        <div class="form-group">
          <label for="filtro">
            Nome do cliente ou código do pedido
          </label>

          <input
            id="filtro"
            name="filtro"
            type="search"
            placeholder="Digite o cliente ou código"
          />
        </div>

        <button class="button button-primary" type="button">
          Filtrar
        </button>
      </div>
    </section>

    <section class="card" aria-labelledby="pedidos-realizados">
      <h2 id="pedidos-realizados">Pedidos realizados</h2>

      <!--
        O aluno deverá utilizar uma diretiva condicional para
        apresentar esta mensagem quando nenhum pedido for encontrado.
      -->

      <!-- Exiba aqui uma mensagem quando nenhum pedido for encontrado -->
      <div class="table-responsive">
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
          <!-- O aluno deverá apresentar os pedidos utilizando v-for. -->
            <tr v-for="pedido in pedidos" :key="pedido.codigo">
              <!-- Informações do pedido -->
               <td>{{ pedido.codigo }}</td>
                <td>{{ pedido.cliente }}</td>
                <td>{{ pedido.itens.length }}</td>
                <td>{{ pedido.itens.reduce((total, item) => total + item.quantidade, 0) }}</td>
                <td>{{ pedido.itens.reduce((total, item) => total + (item.precoUnitario * item.quantidade), 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>
