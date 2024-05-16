import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../Slices/PostAddSlice';

const CreatePost = () => {
    const dispatch = useDispatch()
    const [title, settitle] = useState('');
    const [content, setContent] = useState('');
    const Authors = useSelector((state) => state.Author)
    const [author, setAuthor] = useState('')
    const handleChange = (e) => {
        setAuthor(e.target.value)
       

    }

    const sendPost = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content,author));
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setContent('');
        settitle('');
    }
    return (
        <>
            <form className='m-3 form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter title' value={title} onChange={(e) => settitle(e.target.value)} /><br />
                <input type='text' placeholder='Enter Content' value={content} onChange={(e) => setContent(e.target.value)} /><br/>
                <select onChange={handleChange} >
                    <option>Select Author*</option>
                    {
                        Authors.map((data) =>
                            <option key={data.id} value={data.name}>
                                {data.name}
                            </option>)
                    }
                </select>
                <br />
                <input className='btn ms-3' type='submit' value='Add post' onClick={sendPost} />
            </form>
        </>
    )
}

export default CreatePost