import css from './template.module.css'
import { useContext } from 'react';
import { API } from '../../../api';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import { ButtonItem } from './../../../components/button/index';
type Props = {
    title: string
}


export const Header = ({title}: Props) => {
    const auth = useContext(AuthContext)

    const currentURL = window.location.href 
    const pathname = window.location.pathname
    const navigate = useNavigate()

    const handleLogout = async  () => {

        let json = await auth.signout()
        localStorage.clear()
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <nav className={css.header}>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {!auth.user &&
                    <>
                        {pathname == '/login' &&
                            <>
                                <ButtonItem path={'/register'}>Registrar-se</ButtonItem>
                            </>
                        }
                        {pathname == '/register' &&
                            <>
                                <ButtonItem path={'/login'}>Logar-se</ButtonItem>
                            </>
                        }
                    </>
                }
                {auth.user &&
                    <>
                        {pathname != '/' &&
                            <ButtonItem path={'/'}>Voltar</ButtonItem> 
                        }
                        {pathname == '/' &&
                            <>
                                <ButtonItem path={'create/category'}>Criar Categoria</ButtonItem>
                                <ButtonItem path={'create/task'}>Criar Tarefa</ButtonItem>
                                <span onClick={handleLogout}>
                                    <ButtonItem path={'#'}>Deslogar</ButtonItem>
                                </span>
                            </>
                        }
                    </>
                }
            </div>
        </nav>
    )
}

