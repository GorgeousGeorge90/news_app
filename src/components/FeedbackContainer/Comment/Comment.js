



const Comment = ({name, text, addLike, deleteComment, id}) => {
    return (
        <div>
             <div>
                 {name}
             </div>
            <div>
                {text}
                <span onClick={()=>deleteComment(id)}>X</span>
            </div>
        </div>
    )
}

export default Comment