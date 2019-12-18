import React, { useState, useEffect } from 'react'
import client from '../index';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { SUBREDDIT_QUERY, SUBREDDITS_QUERY } from './Sidebar';

// let { subreddits } = client.readQuery({
//     query: gql`
//         query subreddits {
//             subreddits {
//                 name
//                 _id
//                 image
//             }
//         }
//     `
// });


export default function Popup({ setPopup, onSubmit }) {
    const [title, setTitle] = useState('');
    const [link, setLink] = useState('');
    const [subreddit, setSubreddit] = useState('all');
    const [description, setDescription] = useState('');
    const { loading, error, data } = useQuery(SUBREDDITS_QUERY);

    useEffect(() => {
    }, [])

    const submit = e => {
        e.preventDefault();
        onSubmit({ title, link, subreddit, description });
    }

    if (loading) { return <p>Loading...</p> }
    if (error) { return <p>Something went wrong...</p> }

    return (
        <div className="fixed top-0 left-0 h-screen w-screen flex items-center justify-center">
            <div className="bg-gray-900 opacity-50 absolute top-0 left-0 h-screen w-screen"></div>
            <div className="z-10 bg-white p-8 rounded shadow-md relative">
                <span onClick={() => setPopup(false)} className="fill-current text-gray-600 w-8 h-8 absolute top-0 right-0 py-4 cursor-pointer">
                    <svg width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" /></svg>
                </span>


                <form onSubmit={submit}>

                    <div className="my-4">
                        <label className="block text-lg py-2">Title *</label>
                        <input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            className="bg-gray-100 p-4 rounded my-2 focus:outline-none w-64 border"
                        />
                    </div>

                    <div className="my-4">
                        <label className="block text-lg py-2">Link</label>
                        <input
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            placeholder="Link"
                            className="bg-gray-100 p-4 rounded my-2 focus:outline-none w-64 border"
                        />
                    </div>

                    <div className="my-4">
                        <label className="block text-lg py-2">Subreddit *</label>
                        <div className="relative ">
                            <select value={subreddit} onChange={e => setSubreddit(e.target.value)} className="block appearance-none w-full bg-gray-100 border p-4 my-2">
                                {data.subreddits.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
                                <option value="all">All</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="my-4">
                        <label className="block text-lg py-2">Description</label>
                        <textarea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="bg-gray-100 rounded border w-64 p-4 my-2"
                            placeholder="Description"
                        ></textarea>
                    </div>

                    <div className="my-4">
                        <input type="submit" className="w-100 bg-orange-500 text-white rounded py-2 px-6 hover:bg-orange-400" value="Post" />
                    </div>



                </form>

            </div>
        </div>
    )
}
