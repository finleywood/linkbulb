import create from "zustand";

const useStore = create(set => ({
    currentPage: "/",
    changeCurrentPage: newPage => set({ currentPage: newPage })
}))

export default useStore