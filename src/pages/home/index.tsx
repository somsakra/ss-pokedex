
import PokemonCard from "@/components/PokemonCard";
import SearchForm from "@/components/SearchForm";
import { pokemonListStore } from "@/store/pokemonList";



const HomePage = () => {

    const {pokemon} = pokemonListStore()
    console.log(pokemon)

  return (
    <div className="w-[90%] m-auto max-w-[1100px]">
        <div className="flex justify-center">
            <img src="/images/logo.webp" className="max-h-[80px] mt-[20px]" alt="" />
        </div>
        <SearchForm/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[20px]">
            {pokemon.data?.map((item)=>{
                return <PokemonCard data={item} key={item.id}/>
                })}
        </div>
    </div>
  )
}
export default HomePage