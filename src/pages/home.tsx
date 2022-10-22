import css from './template.module.css'
import { useState, useContext } from 'react';
import {Link} from 'react-router-dom'
import { Header } from './partials/header/index';
import { MainHome } from './../components/mainHome/index';
import { AuthContext } from '../contexts/AuthContext';


export const Home = () => {
    //const[pageSHOW, setPageSHOW] = useState(0)
    //const[query, setQuery] = useState('')
    const[loadingError, setLoadingError] = useState(false)
    const auth = useContext(AuthContext);


    if (loadingError) {
        return(
            <div className={css.loading}>
                Erro ao carregar os dados. <Link to='/'>Voltar</Link>
            </div>
        )
    }


    return (
        <div className={css.homeContainer}>
            {auth.user &&
                <>
                    <Header title='Minhas Tarefas' />
                    <MainHome />
                </>
            }
        </div>
    )
}