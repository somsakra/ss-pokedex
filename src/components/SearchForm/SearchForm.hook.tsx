import { pokemonDetailService, pokemonListService } from "@/services";
import { pokemonListStore } from "@/store/pokemonList";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const userSearchForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setFetchPokemonList, fetchPokemon, pokemon, setPokemonList } = pokemonListStore();
    const keyword:string = watch('keyword')

    // Get pokemonList and use the name to get Detail
    const getData = async () => {
        const PokemonListresponse = await pokemonListService.getPokemonList();
        const pokemonList = []
        setFetchPokemonList({ data: [], loading: true, error: null })
        if (PokemonListresponse.status === 200) {
            const responseResult = PokemonListresponse.data?.results || []
            for (const item of responseResult) {
                const pokemonDetailResponse = await pokemonDetailService.getPokemonDetail(item.name)
                const pokemonData = pokemonDetailResponse.data
                pokemonList.push(pokemonData)
            }
            setFetchPokemonList({ data: pokemonList, loading: false, error: null })
            setPokemonList({ data: pokemonList, loading: false, error: null })
        } else {
            setFetchPokemonList({data:[],loading:false, error: PokemonListresponse.error })
            setPokemonList({data:[],loading:false, error: PokemonListresponse.error })
        }
        
    }
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        const data = fetchPokemon.data.filter((item)=> item.name.toLowerCase().includes(keyword.toLowerCase()))
        setPokemonList({
            data: data,
            loading: false,
            error: null
        })
    }, [keyword])

  

    return { fieldKeywork: register('keyword') }

}

export { userSearchForm };

