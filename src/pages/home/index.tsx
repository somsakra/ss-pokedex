import { useEffect } from "react"
import { pokemonListService, pokemonDetailService } from "@/services";
import SearchForm from "@/components/SearchForm";

const getData = async () => {
    const response = await pokemonDetailService.getPokemonDetail('ditto');
    console.log("response", response);
}

const HomePage = () => {

    useEffect(() => {
      getData();
    }, [])
    
  return (
    <div className="w-[90%] m-auto max-w-[1100px]">
        <div className="flex justify-center">
            <img src="/images/logo.webp" className="max-h-[80px] mt-[20px]" alt="" />
        </div>
        <SearchForm/>
    </div>
  )
}
export default HomePage