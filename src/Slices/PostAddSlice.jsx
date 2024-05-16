import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';
const initialState =
    [
        {
            id: "1",
            title: "First Post",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            date: sub(new Date(), {minutes:10}).toISOString(),
            author:"karan"
        },
        {
            id: "2",
            title: "Second Post",
            content: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,",
            date: sub(new Date(), {minutes:5}).toISOString()
        },
        {
            id: "3",
            title: "Third Post",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            date: sub(new Date(), {minutes:2}).toISOString()
        },
        {
            id: "4",
            title: "Fourth Post",
            content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            date: sub(new Date(), {minutes:1}).toISOString()
        },
    ]

const PostAddSlice = createSlice({

    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content,author) {
                return {
                    payload: {
                        id: nanoid(),
                        title, 
                        content,
                        author,
                        date: sub(new Date(), {minutes:10}).toISOString(),
                        
                    }
                }
            }
        }
    }

})
export const { postAdded } = PostAddSlice.actions;
export default PostAddSlice.reducer;