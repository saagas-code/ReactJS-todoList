
import { useContext, useEffect } from 'react';
import { AuthContext } from "./AuthContext";
import { NotFound } from '../pages/notfound'; 
import  axios  from 'axios';


export const RequireAuth = ({children}: {children: JSX.Element}) => {
    const auth = useContext(AuthContext);
    const token = localStorage.getItem('token')
    const userLogged = localStorage.getItem('userLOGGED')

    useEffect(() => {
        let request = async () => {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            let json = await auth.request(userLogged as string)
        }
        request() 
        
    }, [])
    
    if(!token) {
        return <NotFound />
    }


    return children
}