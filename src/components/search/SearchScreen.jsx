import { useMemo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { useForm } from "../../hooks/useForm"
import { getHeroByName } from "../../helpers/getHeroByName"

import HeroCard from "../hero/HeroCard"

const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const [ value, handleInputChange ] = useForm({ 
        searchText: q
    })

    const { searchText } = value

    const heroFilted = useMemo(() => getHeroByName(q), [q])

    const handleSubmit = e => {
        e.preventDefault()

        navigate(`?q=${ searchText }`)
    }

    return (
        <>
            <div className="row">
                <div className="col-5 mt-4">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text" 
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText" 
                            autoComplete="off"
                            onChange={ handleInputChange }
                            value={ searchText }
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-3"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col-7 mt-4">
                    <h4>Resultados</h4>
                    <hr />

                    <div className='d-flex flex-column gap-3'>
                        {
                            (q === '') 
                                ? ( <div className="alert alert-info">Buscar un heroe</div> )
                                : ( heroFilted.length === 0 ) && ( <div className="alert alert-danger">No hay resultados: { q }</div> )
                        }

                        {
                            heroFilted.map(hero => (
                                <HeroCard key={hero.id} dataHero={hero} />
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SearchScreen