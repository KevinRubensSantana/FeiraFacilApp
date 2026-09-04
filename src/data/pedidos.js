import { ref } from 'vue'

export const pedidos = ref([
  {
    codigo: 'PED-001',
    cliente: 'Tung Tung Tung Sahur',
    itens: [
      {
        id: 67,
        produto: '67 chain',
        precoUnitario: 67.00,
        quantidade: 1,
      },
      {
        id: 69,
        produto: 'tsar bomb',
        precoUnitario: 42500.00,
        quantidade: 15,
      },
      {
        id: 13,
        produto: 'moranguette',
        precoUnitario: 1.99,
        quantidade: 1,
      },
    ],
  },
])
