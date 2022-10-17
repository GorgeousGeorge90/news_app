import styles from './Post.module.scss'

const Post = ({text,deletePost,id}) => {
    return (
        <div className={styles.content}>
            <span>{text}</span>
            <span onClick={() => deletePost(id)}>x</span>
        </div>
    )
}

export default Post