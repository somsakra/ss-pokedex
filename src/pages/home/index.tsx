import { useEffect } from "react"
import { pokemonListService, pokemonDetailService } from "@/services";

const getData = async () => {
    const response = await pokemonDetailService.getPokemonDetail('ditto');
    console.log("response", response);
}

const HomePage = () => {

    useEffect(() => {
      getData();
    }, [])
    
  return (
    <div>HomePage</div>
  )
}
export default HomePage