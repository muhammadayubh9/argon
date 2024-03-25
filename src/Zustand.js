import create from 'zustand';

export const useStore = create((set) => ({
    // Initial state
    data: true,

    // Action to set data
    setData: (newData) => set({ data: newData }),
}));
