import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail"

interface pokemonCardProps {
    data: IPokenmonDetailResponse
}

const PokemonCard = ({ data }: pokemonCardProps) => {
    return (

        <div className="block bg-[#253641] p-3 border border-default rounded-[20px] shadow-xs max-w-[275px] m-[auto]">
            <div className="bg-[url('/images/poke-card-bg.png')] w-full bg-center bg-cover rounded-[20px]">
                <a href="#" >
                    <img className="h-[218px] p-[40px] w-full" src={data.sprites.other.dream_world.front_default} alt={`pokemon-${data.name}-image`} />
                </a>
            </div>
            <div className="flex justify-between">
                <h5 className="capitalize mt-6 mb-2 text-xl font-semibold tracking-tight text-heading text-white">{data.name}</h5>
                <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight text-heading text-white">#{data.id}</h5>
            </div>
            <div className="flex gap-2 justify-end mt-[16px]">
                {data.types.map((item) => {
                    return <span className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[12px]`}>
                        {item.type.name}
                    </span>
                })}
            </div>
        </div>


    )
}
export default PokemonCard