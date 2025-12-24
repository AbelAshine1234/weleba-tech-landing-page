import { create } from 'zustand'

const useStore = create((set) => ({
  // Demo Modal State
  isDemoModalOpen: false,
  openDemoModal: () => set({ isDemoModalOpen: true }),
  closeDemoModal: () => set({ isDemoModalOpen: false }),
  
  // Navigation State
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  
  // Scroll State
  scrollY: 0,
  setScrollY: (y) => set({ scrollY: y }),
  
  // Form State
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    title: '',
    organization: '',
    country: '',
    companyType: '',
    message: ''
  },
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),
  resetFormData: () => set({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      organization: '',
      country: '',
      companyType: '',
      message: ''
    }
  })
}))

export default useStore
