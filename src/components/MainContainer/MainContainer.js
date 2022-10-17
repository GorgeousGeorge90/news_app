import {useRecoilState} from "recoil";
import {userPosts} from "../../recoil/atoms";
import {v4 as uuid} from "uuid";
import Main from "./Main";
import {useEffect} from "react";


const MainContainer = () => {

    const [posts, setPosts] = useRecoilState(userPosts)

    useEffect(()=>{
        localStorage.setItem('posts',JSON.stringify(posts))
        },[posts])

    const addPost = text => {
        const newPost = {
            id:uuid(),
            text,
        }
        setPosts(posts=> {
            return [
                ...posts,
                newPost,
            ]
        })
    }

    const deletePost = id => {
        const newPosts = posts.filter(post=> post.id !== id)
        setPosts(newPosts)
        }

    const basePic = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
    return (<>
            <Main   posts={posts}
                    addPost={addPost}
                    deletePost={deletePost}
                    basePic={basePic}/>
        </>
    )
}

export default MainContainer