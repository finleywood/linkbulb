import create from "zustand";

const useStore = create(set => ({
    currentPage: "/",
    changeCurrentPage: newPage => set({ currentPage: newPage }),
    loggedInUser: {},
    changeLoggedInUser: user => set({ loggedInUser: user }),
    loggedIn: false,
    changeLoggedIn: isLoggedIn => set({ loggedIn: isLoggedIn })
}))

export default useStore