import css from './template.module.css'
import {useState } from 'react'
import {Link} from 'react-router-dom'
import { Header } from './partials/header/index';
import { MainHome } from '../components/mainHome/index';
import { EditItem } from './../components/editTask/index';


export const Edit = () => {
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
            <Header title='Editar Tarefa' />
            <EditItem />
        </div>
    )
}