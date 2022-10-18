import styles from './Main.module.scss'
import {useForm} from 'react-hook-form';
import Post from "./Post/Post";
import {yupResolver} from '@hookform/resolvers/yup';
import {PostSchema} from '../../validation/validation';


const Main = ({posts, addPost, deletePost, updatePost, basePic}) => {

    const {register,handleSubmit,reset, formState:{errors}}=useForm({
        resolver: yupResolver(PostSchema),
    })

    const getPost = data => {
        addPost(data.post)
        reset()
    }

    return (
        <div className={styles.content}>
            <div className={styles.info}>
                <div>
                    <img src={basePic} alt="pic"/>
                </div>
            </div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(getPost)}>
                    <p><textarea {...register('post')} placeholder={'Typing...'}/></p>
                    <p><button type={'submit'}>Create new post</button></p>
                </form>
            </div>
            <div>
                {
                    errors?.post ?  <p>{errors?.post.message}</p> : null
                }
            </div>
            <div className={styles.posts}>
                {
                    posts.length === 0 ? <p>No posts</p>: posts.map(post=> {
                       return <Post deletePost={deletePost}
                                    updatePost={updatePost}
                                    text={post.text}
                                    id={post.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Main