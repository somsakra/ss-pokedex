export interface IPokenmonListResponse {
    count: number
    next: string
    previous: null
    results: IPokemonList[]
}

export interface IPokemonList {
    name: string,
    url: string
}