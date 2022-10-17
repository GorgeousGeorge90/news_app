import * as yup from 'yup';


export const PostSchema = yup.object().shape({
    post: yup.string().min(2).max(200).required(),
})

export const CommentSchema = yup.object().shape({
    name: yup.string().min(2).max(200).required(),
    comment: yup.string().min(2).max(400).required(),
})