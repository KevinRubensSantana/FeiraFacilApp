<template>
  <header class="app-header">
    <div class="container app-header__content">
      <RouterLink class="app-brand" :to="{ name: 'pedidos' }"> Feira Fácil App</RouterLink>

      <nav class="app-navigation" aria-label="Navegação principal">
        <RouterLink class="navigation-link" :to="{ name: 'pedidos' }">
          Resumo dos pedidos
        </RouterLink>

        <RouterLink class="navigation-link" :to="{ name: 'comprar' }"> Fazer compra </RouterLink>
      </nav>
    </div>
  </header>
</template>
