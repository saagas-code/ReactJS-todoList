import css from './template.module.css'
import { useEffect, useState, useContext } from 'react';
import { TaskItem } from '../model/index';
import { API } from '../../api';
import { Category, Error, Task } from '../../types';
import { ButtonItem } from '../button/index';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

type Props = {
    
}

export const CreateItem = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState<Category[]>([])
    const [errors, setErrors] = useState<Error | null>(null)

    const auth = useContext(AuthContext)

    const navigate = useNavigate()

    useEffect(() => {
        let request = async () => {
        let json = await API.GetCategories(auth.user?.id as number)
        console.log(json)
        if(json) {
            setCategories(json)
        }
        }
        request()
    }, [])
    

    const handleCreateTask = async () => {
        let json = await API.Create(title, description, date, category as unknown as number, auth.user?.id as number)
        if(json.error) {
            setErrors(json.error)
            console.log(errors)
            return
        }
        setErrors(null)
        alert('Tarefa criada com sucesso !')
        navigate('/')
    }

    return (

        <section className={css.main}>
            <h1>Nova Tarefa</h1>
            <form>
                <div className={css.inputArea}>
                    <label htmlFor="title">Titulo da Task</label>
                    <input 
                        onChange={e => {setTitle(e.target.value)}}
                        type='text' 
                        name="title" 
                        id="title" 
                        placeholder="Digite o titulo da Tarefa"
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
                    <label htmlFor="date">Data de Realizacao</label>
                    <input 
                        onChange={e => {setDate(e.target.value)}}
                        type='datetime-local' 
                        name="due_date" 
                        id="date"
                        required
                    />
                    <div>
                        {errors?.due_date &&
                            <>
                                {errors.due_date}
                            </>
                        }
                    </div>
                </div>

                <div className={css.inputArea}>
                    <label htmlFor="category">Categoria {category}</label>
                    <select defaultValue={'DEFAULT'} name="category" id="category" onChange={e=>setCategory(e.target.value)}>
                        <option value='DEFAULT'  disabled>
                            Selecione a categoria 
                        </option>
                        {categories &&
                            <>
                                {categories.map((item, index) => (
                                    <option key={index} value={item.id}>{item.title}</option>
                                ))}
                            </>
                        }
                    </select>
                    <div>
                        {errors?.categoryId &&
                            <>
                                'erro'
                            </>
                        }
                    </div>
                </div>

                <div className={css.inputArea}>
                    <label htmlFor="textarea">Descricao</label>
                    <textarea onChange={e=>setDescription(e.target.value)} name="description" id="textarea">

                    </textarea>
                    <div>
                        {errors?.description &&
                            <>
                                {errors.description}
                            </>
                        }
                    </div>
                </div>

                <div>
                    
                </div>
            </form>
            <button onClick={handleCreateTask} className={css.btn}>
                Criar Tarefa
            </button>
        </section>
    )
}

