
import { defineStore } from 'pinia'


export const useImageCartStore = defineStore('ImageCarf', {
  state: () => ({ 
    selectedColorImageIndex: 0
}),
  getters: {

  },
  actions: {
    setSelectedColorIndex(index: number) {
        // Asigna el índice de color seleccionado al producto correspondiente
        this.selectedColorImageIndex = index
      },
  },
  })
