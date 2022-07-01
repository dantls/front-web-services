import create from 'zustand'

export const useDataStoreShipment2 = create((set) => ({
  selectedData2: null,
  setSelectedData2: (selectedData2) => set({ selectedData2 }),
}))