import css from './template.module.css'
import {useState } from 'react';

import {Link} from 'react-router-dom'
import { Header } from './partials/header/index';
import { MainLogin } from '../components/mainLogin';


export const Login = () => {
    const[loadingError, setLoadingError] = useState(false)


    if (loadingError) {
        return(
            <div className={css.loading}>
                Erro ao carregar os dados. <Link to='/'>Voltar</Link>
            </div>
        )
    }


    return (
        <div className={css.homeContainer}>
            <Header title='Faca login' />
            <MainLogin />
        </div>
    )
}