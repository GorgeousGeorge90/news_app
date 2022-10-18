import styles from './Post.module.scss'
import {useState} from 'react';


const Post = ({text,deletePost,updatePost, id}) => {

    const [newText,setNewText] = useState('')
    const [editMode, setEditMode] = useState(false)


    const modeOn  = ()=> {
        setEditMode(true)
    }

    const modeOff = () => {
        setEditMode(false)
        updatePost(id,newText)
    }
    const onChange = (e) => setNewText(e.currentTarget.value)

    return (
        <div className={styles.content}>
            { editMode ? <input value={newText}  autoFocus={true} onBlur={modeOff} onChange={onChange}/>:
            <span onDoubleClick={()=>{
                modeOn()
            }}>{text}</span>}
            <span onClick={() => deletePost(id)}>&#128465;</span>
        </div>
    )
}

export default Post