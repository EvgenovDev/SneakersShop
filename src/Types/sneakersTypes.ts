export interface SneakersInterface {
    name: string
    sex: string
    cost: string
    urlImage: string
    id: number
    index: string
}

export interface SneakersInterfaceCart extends SneakersInterface {
    count: string
}