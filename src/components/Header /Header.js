import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';


const Header = ()=> {

    const setIsActive = ({isActive}) => ({color: isActive ? 'red': 'whitesmoke'})
    const basePic = 'https://freesvg.org/img/YurisNight.png'
    return (
       <header className={styles.header}>
           <div className={styles.logo}>
               <img src={basePic} alt="pic"/>
           </div>
           <div className={styles.title}>
                <h1>News APP</h1>
                <p>Powered by recoil!</p>
           </div>
           <nav>
               <ul>
                   <li><NavLink style={setIsActive} to='/main'>Main</NavLink></li>
                   <li><NavLink style={setIsActive} to='/news'>News</NavLink></li>
                   <li><NavLink style={setIsActive} to='/feedback'>Feedback</NavLink></li>
               </ul>
           </nav>
       </header>
    )
}

export default Header