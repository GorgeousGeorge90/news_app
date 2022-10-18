import styles from './Comment.module.scss';
import user from './../../../assets/img/user.png';

const Comment = ({name, text, addLike, deleteComment, id, likes}) => {
    return (
        <div className={styles.content}>
             <div className={styles.info}>
                 <img src={user} alt="logo"/>
                 <span>{name}</span>
             </div>
            <div className={styles.text}>
                <span>{text}</span>
                <div className={styles.heart}>
                    <span onClick={()=>deleteComment(id)}>&#128465;</span>
                    <span onClick={()=>addLike(id)}>&#129505;<sub>{likes}</sub></span>
                </div>
            </div>
        </div>
    )
}

export default Comment