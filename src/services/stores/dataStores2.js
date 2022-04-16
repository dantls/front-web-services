import create from 'zustand'

export const useDataNewServiceStore = create((set) => ({
  orderData: null,
  setOrderData: (orderData) => set({ orderData }),
}))