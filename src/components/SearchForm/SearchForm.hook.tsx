import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail";
import type { IPokenmonListResponse } from "@/interface/pokemonList";
import { pokemonDetailService, pokemonListService } from "@/services";
import { pokemonListStore } from "@/store/pokemonList";
import { generationList } from "@/utils/optionList";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const userSearchForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setFetchPokemonList, fetchPokemon, pokemon, setPokemonList } = pokemonListStore();
    const keyword: string = watch('keyword')
    const generation: string = watch('generation')
    const type: string = watch('type')
    const sort: string = watch('sort')

    // Get pokemonList and use the name to get Detail
    const getData = async (generationData: {
        name: string;
        limit: number;
        offset: number;
    }) => {
        setPokemonList({ data: [], loading: true, error: null })
        setFetchPokemonList({ data: [], loading: true, error: null })
        const PokemonListresponse = await pokemonListService.getPokemonList((generationData.limit).toString(), generationData.offset.toString());
        const pokemonList = []
        if (PokemonListresponse.status === 200) {
            const responseResult = PokemonListresponse.data?.results || []
            for (const item of responseResult) {
                const pokemonDetailResponse = await pokemonDetailService.getPokemonDetail(item.name)
                const pokemonData = pokemonDetailResponse.data
                pokemonList.push(pokemonData)
            }
            setFetchPokemonList({ data: pokemonList, loading: false, error: null })
            const pokemonListData = filterPokemon(pokemonList, keyword, type, sort)
            setPokemonList({ data: pokemonListData, loading: false, error: null })
        } else {
            setFetchPokemonList({ data: [], loading: false, error: PokemonListresponse.error })
            setPokemonList({ data: [], loading: false, error: PokemonListresponse.error })
        }
    }

    const filterPokemon = (pokemonList: (IPokenmonDetailResponse | undefined)[],keyword: string, type: string, sort: string) => {
        const keywordFilter = pokemonList.filter((item) => item!.name.toLowerCase().includes(keyword?.toLowerCase()))
        const typeFilter = type !== 'all types' ? keywordFilter.filter((item) =>  item?.types.find((f) => f.type.name.toLowerCase().includes(type.toLocaleLowerCase())) ) : keywordFilter
    
            return sortBy(typeFilter, sort)
      

    }

    const sortBy = (data: (IPokenmonDetailResponse | undefined)[], type: string) =>{
        switch (type) {
            case 'id':
                return data?.sort((a, b) => a!.id - b!.id)
            case 'name':
                return data?.sort((a, b) => a!.name > b!.name ? 1 : a!.name < b!.name ? -1 : 0)
            default:
                return data?.sort((a,b) => a!.id - b!.id)
        }
    }
    useEffect(() => {
        generation && getData(generationList[+generation])
    }, [generation])
    useEffect(() => {
        const data = filterPokemon(fetchPokemon.data,keyword, type, sort)
        setPokemonList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword, type, sort])



    return {
        fieldKeywork: register('keyword'),
        fieldGeneration: register('generation'),
        fieldType: register('type'),
        fieldSort: register('sort'),
    }

}

export { userSearchForm };

