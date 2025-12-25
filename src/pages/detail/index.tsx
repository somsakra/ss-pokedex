import PokemonDetail from "@/components/PokemonDetail"
import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail"
import { pokemonDetailService } from "@/services"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"


type pokemonType = {
  data: IPokenmonDetailResponse | undefined,
  loading: boolean,
  error: null | any
}

const DetailPage = () => {

  const { name } = useParams()

  const [pokemon, setPokemon] = useState<pokemonType>({ data:undefined, loading: true, error: null })

  const getData = async (name: string) => {
    const pokemonDetailResponse = await pokemonDetailService.getPokemonDetail(name)
    if (pokemonDetailResponse.status === 200) {
      setPokemon({ data: pokemonDetailResponse.data, loading: false, error: null })
    }
    else {
      setPokemon({ data: undefined, loading: false, error: pokemonDetailResponse.error })
    }
  }
  useEffect(() => {
    if(name) {
      getData(name)
    }
  }, [name])

  return (
    <div className="w-[90%] m-auto max-w-[1100px]">
      <div className="flex justify-center">
        <img src="/images/logo.webp" className="max-h-[80px] mt-[20px]" alt="" />
      </div>
      <div className="w-[90%] max-w-[600px] m-[auto]">
        <Link to={"/"} className="bg-[#4CAFEB] px-[16px] py-[4px] rounded-[16px] font-semibold">Back</Link>
        {pokemon.data && <PokemonDetail data={pokemon.data}/>}
      </div>
    </div>
  )
}
export default DetailPage 