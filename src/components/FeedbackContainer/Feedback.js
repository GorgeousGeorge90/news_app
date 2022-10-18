import styles from './Feedback.module.scss';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {CommentSchema} from '../../validation/validation';
import Comment from './Comment/Comment';


const Feedback = ({comments,addLike,addComment,deleteComment})=> {

    const {register, reset, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(CommentSchema)
    })

    const sendComment = data => {
        addComment(data.name, data.comment)
        reset()
    }

    return (
        <div className={styles.content}>
            <h1>Leave your comment!</h1>
            <form onSubmit={handleSubmit(sendComment)}>
                <p><input type="text" {...register('name')} placeholder={'name'}/></p>
                <p><textarea type="text" {...register('comment')} placeholder={'Your comment'}/></p>
                <p><button type={"submit"}>Send comment</button></p>
                <div className={styles.errors}>
                    <p>{errors.name ? errors.name.message : null}</p>
                    <p>{errors.comment ? errors.comment.message : null}</p>
                </div>
            </form>
            <div>
                { comments.length === 0 ? <p>No comments!</p>: comments.map(comment=> {
                    return <Comment name={comment.name}
                                    text={comment.text}
                                    addLike={addLike}
                                    deleteComment={deleteComment}
                                    id={comment.id}
                                    likes={comment.likes}
                    />
                })}
            </div>
        </div>
    )
}

export default Feedback