// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0

import axios from "axios";
import { POKEMON_API_BASE_URL } from "@/utils/constant";
import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail";
import { handleResponse, type IResponse } from "@/utils/handleResponse";

interface IGetPokemonDetailResponse extends IResponse {
    status: number | undefined,
    data?: IPokenmonDetailResponse
}


export const pokemonDetailService = {

    getPokemonDetail: async (name:string):Promise<IGetPokemonDetailResponse> => {
       try {
        const result =  await axios.get(`${POKEMON_API_BASE_URL}/pokemon/${name}`);
        return handleResponse.success(result)
       } catch (error:any) {
        return handleResponse.error(error)
       }
    }

};