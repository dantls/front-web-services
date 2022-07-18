import create from 'zustand'

export const useDataStoreBarcode = create((set) => ({
  barcodeData: null,
  setBarcodeData: (barcodeData) => set({ barcodeData }),
}))