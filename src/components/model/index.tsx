import css from './template.module.css'
import { API } from '../../api';
import { useNavigate} from 'react-router-dom';
import edit from '../../assets/images/icon-edit.png'
import del from '../../assets/images/icon-delete.png'
import { Tasks } from '../../types';



type Props = {
    data: Tasks
    setPage: React.Dispatch<React.SetStateAction<number>>
    limit: number
    totalPages: number
    index: number


}

export const TaskItem = ({data, setPage, limit, totalPages, index}: Props) => {
    const navigate = useNavigate()

    const handleDelete = async () => {

        let json = await API.Delete(data.id)
        console.log(json)
        
    }

    const handleEdit = async () => {
        navigate(`/editar/${data.id}`)
    }

    const handleCheck = async () => {
        console.log(data.id)
        await API.ChangeDone(data.id)
    }

    return (     
        <div className={css.taskList}>
            <div className={css.task}>
                <div className={css.title}>
                    <input onChange={handleCheck} type="checkbox" defaultChecked={data.is_done}/>
                    <div className={css.taskTitle}>{data.title}</div>
                </div>
                <div className={css.priority}>
                    <div style={{backgroundColor: data.categoryColor}} className={css.sphere}></div>
                    <div>{data.categoryTitle}</div>
                </div>
                <div className={css.actions}>
                    <div onClick={handleEdit}className={css.action}><img src={edit} alt="" /></div>
                    <div onClick={handleDelete} className={css.action}><img src={del} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

