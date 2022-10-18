import {useParams} from 'react-router-dom';
import styles from './Article.module.scss'
import {useRecoilValue} from 'recoil';
import {getSingleArticle} from '../../../recoil/selectors';
import {useNavigate} from 'react-router-dom';
import Preloader from "../../common /Preloader/Preloader";



const Article = ()=> {

    const {title} = useParams()
    const [article] = useRecoilValue(getSingleArticle(title))
    console.log(article)
    const navigate = useNavigate()

    const navigateTo = () => {
        navigate('/news')
    }


    return (
        <div className={styles.content}>
            <div className={styles.first}>
                <button onClick={navigateTo}>Back to News</button>
                <img src={article.urlToImage} alt="pic"/>
            </div>
            <div className={styles.info}>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
            </div>
        </div>
    )
}

export default Article