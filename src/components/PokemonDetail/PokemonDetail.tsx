import type { IPokenmonDetailResponse } from "@/interface/pokemonDetail"

interface pokemonDetailProps {
    data?: IPokenmonDetailResponse
}

const PokemonDetail = ({ data }: pokemonDetailProps) => {

    return (
        <div>
            <div className="block p-3 m-[auto]">
                <div className="w-full bg-center bg-cover rounded-[20px] relative h-[400px]">
                    <img className="absolute h-auto max-h-[400px] aspect-square -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src="/images/pokemon_bg.png" alt="pokemon-detail-bg" />
                    <img className="absolute h-[50%] sm:h-[250px] p-[40px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        src={data!.sprites.other.dream_world.front_default} alt={`pokemon-${data?.name}-image`} />
                </div>
                <div className="bg-[#253641] rounded-[20px] p-[16px] mt-[20px]">
                    <div className="flex justify-between">
                        <h5 className="capitalize mt-6 mb-2 text-xl font-semibold tracking-tight text-heading text-white">{data?.name}</h5>
                        <h5 className="mt-6 mb-2 text-xl font-semibold tracking-tight text-heading text-white">#{data?.id}</h5>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] gap-y-[30px]">
                        <div>
                            <div className="flex gap-x-[10px]">
                                <div className="text-[#2261A7] font-semibold">Height</div>
                                <div className="text-white">{(data!.height / 10).toFixed(2)} cm.</div>
                            </div>
                            <div className="flex gap-x-[10px]">
                                <div className="text-[#2261A7] font-semibold">Weight</div>
                                <div className="text-white">{(data!.weight / 10).toFixed(2)} kg.</div>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-start sm:justify-end mt-[16px]">
                            {data!.types.map((item) => {
                                return <span className={`badge-type-${item.type.name} px-[14px] capitalize py-1 rounded-[12px]`}>
                                    {item.type.name}
                                </span>
                            })}
                        </div>
                        <div>
                            <h5 className="text-white semibold">Abilities</h5>
                            <div className="grid grid-cols-2 sm:grid-cols-1 gap-[16px] mt-[16px]">
                                {data?.abilities.map((item) => {
                                    return <div className={`badge-type-${item.ability.name} bg-[#2261A7] px-[14px] capitalize py-1 rounded-[12px]`}>
                                        {item.ability.name}
                                    </div>
                                })}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-white semibold">Stats</h5>
                            <div className="grid grid-cols-1 gap-[16px] mt-[16px]">

                                {data?.stats.map((item) => {
                                    return <div className="flex gap-x-[10px] justify-between">
                                        <div className="text-[#2261A7] font-semibold capitalize">{item.stat.name}</div>
                                        <div className="text-white">{item.base_stat}</div>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokemonDetail