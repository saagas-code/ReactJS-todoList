import css from './template.module.css'
import { useState } from 'react';

import { API } from '../../api';
import { Error} from '../../types';

import { useNavigate } from 'react-router-dom';

type Props = {
    
}


export const MainRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<Error>()

    const navigate = useNavigate()

    const handleCreateTask = async () => {
        if(name && email && password) {
            let json = await API.Registeer(name, email, password)
            console.log(json)
            if(json.error) {
                setErrors(json.error)
                return
            }
            alert('Conta criada com sucesso!')
            navigate('/login')
        }
        
    }

    return (

        <section className={css.main}>
            <h1>Registro</h1>
            
            <form>
            <div className={css.inputArea}>
                    <label htmlFor="name">Nome</label>
                    <input 
                        onChange={e => {setName(e.target.value)}}
                        type='text' 
                        name="name" 
                        id="name" 
                        placeholder="Digite o seu nome"
                        required
                    />
                    {errors?.name &&
                        <>
                            {errors.name}
                        </>
                    }
                </div>
                <div className={css.inputArea}>
                    <label htmlFor="email">Email</label>
                    <input 
                        onChange={e => {setEmail(e.target.value)}}
                        type='text' 
                        name="email" 
                        id="email" 
                        placeholder="Digite o seu email"
                        required
                    />
                    <div>
                        {errors?.email &&
                            <>
                                {errors.email}
                            </>
                        }
                    </div>
                </div>
                <div className={css.inputArea}>
                    <label htmlFor="pass">Senha</label>
                    <input 
                        onChange={e => {setPassword(e.target.value)}}
                        type='password' 
                        name="pass" 
                        id="pass" 
                        placeholder="Digite o titulo da Tarefa"
                        required
                    />
                    <div>
                        {errors?.password &&
                            <>
                                {errors.password}
                            </>
                        }
                    </div>
                </div>

            </form>
            <button onClick={handleCreateTask} className={css.btn}>
                Criar Tarefa
            </button>
        </section>
    )
}

