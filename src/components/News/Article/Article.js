import {useParams} from 'react-router-dom';
import styles from './Article.module.scss'
import {useRecoilValue} from 'recoil';
import {getSingleArticle} from '../../../recoil/selectors';


const Article = ()=> {
    const {id} = useParams()
    const article = useRecoilValue(getSingleArticle(id))
    console.log(article)
    return (
        <div className={styles.content}>
            {id}
        </div>
    )
}

export default Article