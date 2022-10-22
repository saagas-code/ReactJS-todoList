import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const API = {
    
    Login: async (username: string, password: string) => {
        let response = await axios.post("http://localhost:8819/login", {
            username, password, 
          });
        return response.data
    },

    Register: async (username: string, password: string) => {
        let response = await axios.post("http://localhost:8819/register", {
            username, password, 
          });
        return response.data
    },

    AccountREQUEST: async (email: string) => {
        let response = await axios.post("http://127.0.0.1:8000/api/request", {
            email
        });
        return response.data
    },

    GetTask: async (page: number, limit: number, id: number) => {
        let response = await axios.get(
            `http://localhost:8000/api/tasks?limit=${limit}&page=${page}&id=${id}`
        )
        return response.data
    },


    GetOneTask: async (id: number) => {
        let response = await axios.get("http://localhost:8000/api/tasks/"+id)
        return response.data
    },
    EditTask: async (id: number, title: string, due_date: string, description: string, category_id: number) => {
        let response = await axios.post("http://localhost:8000/api/tasks/editar/"+id, {
            title,
            due_date,
            description,
            category_id
        })
        return response.data
    },
    Create: async (title: string, description: string, due_date: string, category_id: number, user_id: number) => {
        let response = await axios.post(`http://127.0.0.1:8000/api/tasks`, {
            title: title,
            category_id: category_id,
            description: description,
            due_date: due_date,
            user_id: user_id
        })
        return response.data
    },
    GetCategories: async (id: number) => {
        let response = await axios.get(`http://127.0.0.1:8000/api/categories?id=${id}`)
        return response.data
    },
    CreateCategory: async (title: string, color: string, user_id: number) => {
        let response = await axios.post("http://127.0.0.1:8000/api/categories", {
            title,
            color,
            user_id
        })
        return response.data
    },
    
    ChangeDone: async (id: number) => {
        let response = await axios.post("http://127.0.0.1:8000/api/tasks/check/"+id)
        return response.data
    },
    
    Delete: async (index: number) => {

        let response = await axios.post(`http://127.0.0.1:8000/api/tasks/delete/${index}`)
        return response.data
    },




    Logiin: async (email: string, password: string) => {

        let response = await axios.post("http://127.0.0.1:8000/api/login", {
            email: email,
            password: password
        })
        return response.data
    },
    Registeer: async (name: string, email: string, password: string) => {

        let response = await axios.post("http://localhost:8000/api/register", {
            name: name,
            email: email,
            password: password,
            password_confirmation: password
        })
        return response.data
    },
    Logout: async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/logout')
        return response.data
    }

}