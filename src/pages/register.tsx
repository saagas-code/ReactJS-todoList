import css from './template.module.css'
import {useState } from 'react';
import {Link} from 'react-router-dom'
import { Header } from './partials/header/index';
import { MainRegister } from '../components/mainRegister';


export const Register = () => {
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
            <Header title='Criar conta' />
            <MainRegister />
        </div>
    )
}