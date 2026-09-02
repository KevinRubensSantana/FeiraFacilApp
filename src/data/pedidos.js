import { ref } from 'vue'

export const pedidos = ref([
  {
    codigo: 'PED-001',
    cliente: 'Maria da Silva',
    itens: [
      {
        id: 1,
        produto: 'Tomate',
        precoUnitario: 8.5,
        quantidade: 2,
      },
      {
        id: 2,
        produto: 'Batata',
        precoUnitario: 6,
        quantidade: 3,
      },
    ],
  },
  {
    codigo: 'PED-002',
    cliente: 'João Pereira',
    itens: [
      {
        id: 3,
        produto: 'Banana',
        precoUnitario: 7.5,
        quantidade: 2,
      },
      {
        id: 4,
        produto: 'Maçã',
        precoUnitario: 12,
        quantidade: 1,
      },
      {
        id: 5,
        produto: 'Laranja',
        precoUnitario: 5.5,
        quantidade: 4,
      },
    ],
  },
])
