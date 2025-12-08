// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

import axios from "axios";
import { POKEMON_API_BASE_URL } from "@/utils/constant";
import type { IPokenmonListResponse } from "@/interface/pokemonList";
import { handleResponse, type IResponse } from "@/utils/handleResponse";

interface IGetPokemonListResponse extends IResponse{
    status: number | undefined,
    data?: IPokenmonListResponse
}


export const pokemonListService = {

    getPokemonList: async (limit?: string, offset?: string): Promise<IGetPokemonListResponse> => {
        try {
            const result = await axios.get(`${POKEMON_API_BASE_URL}/pokemon?limit=${limit || 151}&offset=${offset || 0}`);
            return handleResponse.success(result);

        } catch (error: any) {
            return handleResponse.error(error);

        }

    }

};