import css from './template.module.css'
import { useEffect, useState, useContext } from 'react';
import { API } from '../../api';
import { Category, Task} from '../../types';

import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

type Props = {
    
}

export const EditItem = () => {
    const [data, setData] = useState<Task>()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory] = useState<string | number>('')
    const [categories, setCategories] = useState<Category[]>([])

    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        let getCategories = async () => {
          let json = await API.GetCategories(auth.user?.id as number)
          setCategories(json)
        }
        getCategories()
      }, [])

    useEffect(() => {
        let request = async () => {
            let json = await API.GetOneTask(id as unknown as number)
            setData(json)
        }
        request()
    }, [])

    useEffect(() => {
        setTitle(data?.title as string)
        setDescription(data?.description as string)
        setDate(data?.due_date as string)
        setCategory(data?.category_id as number)
    }, [data])
    

    const handleCreateTask = async () => {
        let json = await API.EditTask(id as unknown as number, title, date, description, category as number)
        if(json) {
            alert('Tarefa editada com sucesso !')
        }
        navigate('/')
    }

    return (

        <>
            {data &&
                <section className={css.main}>
                    <h1>Editar</h1>
                    <form>
                        <div className={css.inputArea}>
                            <label htmlFor="title">Titulo da Task</label>
                            <input 
                                onChange={e => {setTitle(e.target.value)}}
                                value={title}
                                type='text' 
                                name="title" 
                                id="title" 
                                placeholder="Digite o titulo da Tarefa"
                                required
                            />
                        </div>
        
                        <div className={css.inputArea}>
                            <label htmlFor="date">Data de Realizacao {date}</label>
                            <input 
                                onChange={e => {setDate(e.target.value)}}
                                value={date}
                                type='datetime-local' 
                                name="due_date" 
                                id="date"
                                required
                            />
                        </div>
        
                        <div className={css.inputArea}>
                            <label htmlFor="category">Categoria</label>
                            {categories &&
                                <select defaultValue='DEFAULT' name="category" id="category" onChange={e=>setCategory(e.target.value)}>
                                    <option value='DEFAULT'  disabled>
                                        {data.category.title}
                                    </option>
                                        {categories &&
                                            <>
                                                {categories.map((item, index) => (
                                                    <option key={index} value={item.id}>{item.title}</option>
                                                ))}
                                            </>
                                        }
                                </select>
                            }
                            
                        </div>
        
                        <div className={css.inputArea}>
                            <label htmlFor="textarea">Descricao</label>
                            <textarea value={description} onChange={e=>setDescription(e.target.value)} name="description" id="textarea">
        
                            </textarea>
                        </div>
        
                        <div>
                            
                        </div>
                    </form>
                    <button onClick={handleCreateTask} className={css.btn}>
                        Editar Tarefa
                    </button>
                </section>
            }
        </>
    )
}

