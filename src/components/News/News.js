import {useRecoilValueLoadable} from 'recoil';
import {filteredNews} from '../../recoil/selectors';
import styles from './News.module.scss'
import {NavLink} from 'react-router-dom';
import Preloader from '../common /Preloader/Preloader';




const News = ()=> {
    const myNews = useRecoilValueLoadable(filteredNews)
    switch(myNews.state) {
        case 'hasValue': {
            return (
                <div className={styles.content}>
                    <ul>
                        {
                             myNews.contents.map(post => {
                                 return <li><NavLink to={`/news/${post.title}`}
                                                     key={post.id}>
                                     {post.title}</NavLink></li>
                        })
                        }
                    </ul>
                </div>
            )
        }

        case 'loading': {
            return <Preloader/>
        }

    }
}

export default News