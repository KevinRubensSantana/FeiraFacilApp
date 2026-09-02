<script setup>
  // import { pedidos } from '@/data/pedidos'
  // O aluno deverá implementar a lógica do componente.
</script>

<template>
  <main class="container page">
    <header class="page-header">
      <h1>Fazer compra</h1>
      <p>
        Cadastre o cliente e adicione os produtos do pedido.
      </p>
    </header>

    <section class="card" aria-labelledby="dados-pedido">
      <h2 id="dados-pedido">Dados do pedido</h2>

      <div class="form-grid form-grid-two-columns">
        <div class="form-group">
          <label for="codigoPedido">
            Código do pedido
          </label>

          <input
            id="codigoPedido"
            name="codigoPedido"
            type="text"
            placeholder="Ex.: PED-001"
          />
        </div>

        <div class="form-group">
          <label for="nomeCliente">
            Nome do cliente
          </label>

          <input
            id="nomeCliente"
            name="nomeCliente"
            type="text"
            placeholder="Digite o nome do cliente"
          />
        </div>
      </div>

      <!-- O aluno deverá implementar as mensagens de validação. -->

      <!-- Exiba aqui uma mensagem quando os dados forem inválidos. -->
    </section>

    <section class="card" aria-labelledby="adicionar-produto">
      <h2 id="adicionar-produto">Adicionar produto</h2>

      <div class="form-grid form-grid-product">
        <div class="form-group">
          <label for="nomeProduto">
            Produto
          </label>

          <input
            id="nomeProduto"
            name="nomeProduto"
            type="text"
            placeholder="Ex.: Tomate"
          />
        </div>

        <div class="form-group">
          <label for="precoUnitario">
            Preço unitário
          </label>

          <input
            id="precoUnitario"
            name="precoUnitario"
            type="number"
            min="0"
            step="0.01"
            placeholder="0,00"
          />
        </div>

        <div class="form-group">
          <label for="quantidade">
            Quantidade
          </label>

          <input
            id="quantidade"
            name="quantidade"
            type="number"
            min="1"
            step="1"
            placeholder="0"
          />
        </div>
      </div>

      <div class="form-actions">
        <button class="button button-primary" type="button">
          Adicionar produto
        </button>
      </div>
    </section>

    <section class="card" aria-labelledby="itens-pedido">
      <h2 id="itens-pedido">Itens do pedido</h2>

      <!--
        O aluno deverá utilizar uma diretiva condicional para
        mostrar esta mensagem quando não houver produtos.
      -->

      <!-- Exiba aqui uma mensagem quando nenhum produto foi adicionado ao pedido.-->

      <!--
        O aluno deverá utilizar v-for para apresentar os produtos.
      -->

      <div class="table-responsive">
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
            <!--
              Exemplo da estrutura que deverá ser repetida pelo aluno:

              <tr>
                <td>Nome do produto</td>
                <td>Preço unitário</td>
                <td>Quantidade</td>
                <td>Total do item</td>
                <td>
                  <button type="button">Excluir</button>
                </td>
              </tr>
            -->
          </tbody>
        </table>
      </div>

      <div class="order-total">
        <span>Total da compra</span>

        <!-- O aluno deverá apresentar aqui o total calculado. -->
        <strong>R$ 0,00</strong>
      </div>

      <div class="form-actions">
        <button class="button button-secondary" type="button">
          Limpar
        </button>

        <button class="button button-primary" type="button">
          Finalizar pedido
        </button>
      </div>
    </section>
  </main>
</template>


