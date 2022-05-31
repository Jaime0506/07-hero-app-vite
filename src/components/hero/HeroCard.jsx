import { Link } from "react-router-dom"

const HeroCard = ({ dataHero }) => {
    
    const imagePath = `./assets/${dataHero.id}.jpg`

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ imagePath } alt={dataHero.superhero} className='card-img' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ dataHero.superhero }</h5>
                            <p className="card-text">{ dataHero.alter_ego}</p>

                            {
                                (dataHero.alter_ego !== dataHero.characters) && (
                                    <p className="text-muted">{ dataHero.characters }</p>
                                )
                            }

                            <p className="card-text">
                                <small className="text-muted">{ dataHero.first_appearance}</small>
                            </p>

                            <Link to={`/hero/${dataHero.id}`}>
                                Mass...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroCard