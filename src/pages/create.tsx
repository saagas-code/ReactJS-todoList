import css from './template.module.css'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import { Header } from './partials/header/index';
import { CreateItem } from './../components/newTask/index';

export const Create = () => {
    //const[pageSHOW, setPageSHOW] = useState(0)
    //const[query, setQuery] = useState('')
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
            <Header title='Criar nova Tarefa' />
            <CreateItem />
        </div>
    )
}