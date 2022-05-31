import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
    console.log('se llamo la funcion')
    return heroes.find(hero => hero.id === id)
}