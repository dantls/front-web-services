import create from 'zustand'

export const useDataStoreBarcode = create((set) => ({
  barcodeData: '',
  setBarcodeData: (barcodeData) => set({ barcodeData }),
}))