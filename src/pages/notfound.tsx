import {Link} from 'react-router-dom'

export const NotFound = () => {
    const token = localStorage.getItem('token')
    const userLogged = localStorage.getItem('userLOGGED')
    return (
        <div>
            <h1>Acesso negado !</h1>

            <Link to={'/login'}>Fazer Login</Link>
        </div>

        
    )
}