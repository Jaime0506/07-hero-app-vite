import { useNavigate } from "react-router-dom"

const LoginScreen = () => {

    const navigate = useNavigate()
    
    const handleLogin = () => {
        navigate('/', {
            replace: true,
        })
    }

    return (
        <div className="container mt-5">
            <h1>Iniciar Sesion</h1>
            <hr />

            <button
                className="btn btn-success"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen