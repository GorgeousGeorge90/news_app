import {useRecoilState} from "recoil";
import {usersComments} from "../../recoil/atoms";
import {v4 as uuid} from 'uuid';
import Feedback from "./Feedback";
import {useEffect} from "react";


const FeedbackContainer = () => {

    const [comments, setComments] = useRecoilState(usersComments)

    useEffect(()=> {
        localStorage.setItem('comments', JSON.stringify(comments))
    },[comments])

    const addComment = (name,text) => {
        const newCom = {
            id:uuid(),
            name,
            text,
            likes:0,
        }
        setComments(comments => {
            return [
                ...comments,
                newCom,
            ]
        })
    }

    const deleteComment = id => {
        const newComments = comments.filter(comment => comment.id !== id)
        setComments(newComments)
    }

    const addLike = id => {
        const newCommentsLike = comments.map(comment => {
            if (comment.id === id) {
                return {...comment, likes: comment.likes + 1}
            } else {
                return comment
            }
        })
        setComments(newCommentsLike)
    }

    return (
        <>
            <Feedback addComment={addComment}
                      deleteComment={deleteComment}
                      addLike={addLike}
                      comments={comments}
                        />
        </>
    )
}

export default FeedbackContainer