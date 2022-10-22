import css from './template.module.css'
import { useEffect, useState, useContext } from 'react';
import { API } from '../../api';
import { Tasks } from '../../types';
import { TaskItem } from './../model/index';
import { AuthContext } from '../../contexts/AuthContext';



type Props = {
    
}


export const MainHome = ({}: Props) => {
    const [tasks, setTasks] = useState<Tasks[]>([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const limit = 100

    const auth = useContext(AuthContext)

    useEffect(() => {
      let request = async () => {
        let json = await API.GetTask(page, limit, auth.user?.id as number)
        setTasks(json.result)
        setTotalPages(json.total)
      }
      request()
    }, [tasks])

    return (

        <main className={css.main}>

                <div className={css.container}>
                    <div className={css.selectContainer}>
                        <select name="" id="">
                            <option value="">Todas as tarefas</option>
                        </select>
                    </div>
                    <div className={css.taskList}>
                        {tasks.map((item, key) => (
                            <TaskItem setPage={setPage} limit={limit} totalPages={totalPages} key={key} data={item} index={key}/>
                        ))}
                    </div>
                    {/* <div>
                        <Pagination limit={limit} total={totalPages} offset={limit * (page - 1)} currentPage={page} setCurrentPage={setPage}></Pagination>
                    </div> */}
                </div>
            
        </main>
    )
}

