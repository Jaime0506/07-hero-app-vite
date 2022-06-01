import { useMemo } from "react"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById"

const HeroScreen = () => {

    const { heroId } = useParams()
    const navigate = useNavigate()

    const hero = useMemo(() => getHeroById(heroId), [heroId]) 

    if(!hero) return <Navigate to='/' />

    const {
        id,
        superhero,
        alter_ego,
        characters,
        first_appearance,
        publisher
    } = hero

    const imagePath =  `/07-hero-app-vite/assets/${id}.jpg`

    const handleReturn = () => {
        navigate(-1, {
            replace: true
        })
    }

    return (
        <div className="d-flex flex-direction-row mt-5 gap-4">
            <div className="col-3">
                <img 
                    src={ imagePath } 
                    alt={ superhero } 
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"> <b>First appearance:</b> { first_appearance } </li>
                    <li className="list-group-item"> <b>Publisher:</b> { publisher } </li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-success"
                    onClick={ handleReturn }
                >
                    Come back
                </button>
            </div>
        </div>
    )
}

export default HeroScreen