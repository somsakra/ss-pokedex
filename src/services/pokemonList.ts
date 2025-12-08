// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

import axios from "axios";
import { POKEMON_API_BASE_URL } from "@/utils/constant";
import type { IPokenmonListResponse } from "@/interface/pokemonList";

interface IGetPokemonListResponse {
    status: number | undefined,
    data: IPokenmonListResponse
}


export const pokemonListService = {

    getPokemonList: async (limit?:string, offset?:string):Promise<IGetPokemonListResponse> => {
        const result =  await axios.get(`${POKEMON_API_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`);
        return result;
    }

};