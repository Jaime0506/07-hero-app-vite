import HeroList from "../hero/HeroList"

const MarvelScreen = () => {
    return (
        <div className="pb-5">
            <h1 className="mt-3">Marvel Screen</h1>
            <hr />

            <HeroList publisher='Marvel Comics' />
        </div>
    )
}

export default MarvelScreen
