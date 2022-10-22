import css from './template.module.css'
import {useState, useContext } from 'react';

import { API } from '../../api';

import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

type Props = {
    
}

export const MainLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [date, setDate] = useState('')
    const [errors, setErrors] = useState<string>('')
    
    const token = localStorage.getItem('token')
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const handleCreateTask = async () => {
        setErrors('')
        const json = await API.Logiin(email, password);
        if(json.error) {
            //navigate('/')
            return setErrors(json.error)
        }
        await auth.signin(json.token, json.user)
        alert('Logado com sucesso !')
        navigate('/')
        
    }

    return (

        <section className={css.main}>
            <h1>Login {token}</h1>
            <div>
                {errors}
            </div>
            <form>
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
                </div>

            </form>
            <button type='submit' onClick={handleCreateTask} className={css.btn}>
                Logar
            </button>
        </section>
    )
}

