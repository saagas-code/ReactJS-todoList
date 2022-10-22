import css from './template.module.css'
import { useState, useContext } from 'react';
import { API } from '../../api';
import {Error } from '../../types';

import {useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

type Props = {
    
}

export const CategoryItem = () => {
    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')

    const [errors, setErrors] = useState<Error | null>(null)

    const auth = useContext(AuthContext)
    const navigate = useNavigate()


    const handleCreateCategory = async () => {
        let json = await API.CreateCategory(title, color, auth.user?.id as number)
        if(json.error) {
            setErrors(json.error)
            return
        }
        alert('Categoria criada com sucesso!')
        navigate('/')
    }

    return (

        <section className={css.main}>
            <h1>Nova Categoria</h1>
            <form>
                <div className={css.inputArea}>
                    <label htmlFor="title">Titulo</label>
                    <input 
                        onChange={e => {setTitle(e.target.value)}}
                        type='text' 
                        name="title" 
                        id="title" 
                        placeholder="Digite o titulo da Categoria"
                        required
                    />
                    <div>
                        {errors?.title &&
                            <>
                                {errors.title}
                            </>
                        }
                    </div>
                </div>

                <div className={css.inputArea}>
                    <label htmlFor="category">Cor</label>
                    <select defaultValue={'DEFAULT'} name="category" id="category" onChange={e=>setColor(e.target.value)}>
                        <option value='DEFAULT'  disabled>
                            Selecione a cor
                        </option>

                        <option value='green'>Verde</option>
                        <option value='blue'>Azul</option>
                        <option value='yellow'>Amarelo</option>
                        <option value='red'>Vermelho</option>
                  
                    </select>
                    <div>
                        {errors?.color &&
                            <>
                                {errors.color}
                            </>
                        }
                    </div>
                </div>

            </form>
            <button onClick={handleCreateCategory} className={css.btn}>
                Criar Categoria
            </button>
        </section>
    )
}

