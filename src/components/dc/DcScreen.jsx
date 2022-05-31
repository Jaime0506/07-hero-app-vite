import HeroList from "../hero/HeroList"

const DcScreen = () => {
    return (
        <div className="pb-5">
            <h1 className="mt-3">DC Comics</h1>
            <hr />

            <HeroList publisher='DC Comics' />
        </div>
    )
}

export default DcScreen