import './App.scss';
import Header from './components/Header /Header';
import {RecoilRoot} from "recoil";
import News from './components/News/News';
import {Route,Routes} from 'react-router-dom';
import Article from "./components/News/Article/Article";
import FeedbackContainer from "./components/FeedbackContainer/FeedbackContainer";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <div className='app-wrapper'>
        <RecoilRoot>
                <Header/>
                <Routes>
                    <Route path='/main' element={<MainContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/news/:title' element={<Article/>}/>
                    <Route path ='/feedback' element={<FeedbackContainer/>}/>
                </Routes>
        </RecoilRoot>
    </div>
  );
}

export default App;
