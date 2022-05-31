import { useMemo } from "react"
import { getHeroByPublisher } from "../../helpers/getHeroByPublisher"
import HeroCard from "./HeroCard"

const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 mt-3">
            {
                heroes.map((hero) => (
                    <HeroCard key={hero.id} dataHero={hero} />
                ))
            }
        </div>
    )
}

export default HeroList