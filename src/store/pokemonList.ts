import { create } from 'zustand'
import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail";

const initialStore = {
    pokemon: {
        data: [],
        loading: false,
        error: null
    },
    fetchPokemon: {
        data: [],
        loading: false,
        error: null
    }
}

type pokemonType = {
    data: IPokenmonDetailResponse[],
    loading: boolean,
    error: null | any
}

type pokemonStoreType = {
    pokemon: pokemonType,
    fetchPokemon: pokemonType,
    setPokemonList: (value: pokemonType) => void,
    setFetchPokemonList: (value: pokemonType) => void,
    clearPokemon: () => void
}

export const pokemonListStore = create<pokemonStoreType>((set) => ({
    ...initialStore,
    setPokemonList: (value: pokemonType) => set({pokemon:value}),
    setFetchPokemonList: (value: pokemonType) => set({fetchPokemon: value}),
    clearPokemon: () => set({...initialStore})
}))

