import React from 'react';
import { Link } from '@reach/router';

function PostCard({ title, link, user, votes, _id }) {
    return (
        <a href={link} target="_blank">
            <div className="flex items-center border border-gray-200 px-4 py-6 my-2 rounded hover:border-gray-400" >
                <div className="flex flex-col items-center px-4 mr-4 border-r border-gray-100 text-gray-500">
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0L6.7 13.3a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z" /></svg>
                    </button>
                    <span>{votes}</span>
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
                    </button>

                </div>
                <div className="flex flex-1 items-center justify-between">
                    <div>
                        <Link to={_id}><h3 className="text-lg">{title}</h3></Link>
                        <div className="my-2 flex items-center">
                            <img
                                src={user.display_picture}
                                className="rounded-full w-6 h-6 mr-2"
                            />
                            <span className="text-orange-500">{user.username}</span>
                            <time className="text-gray-400 ml-4">1 days ago.</time>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                        {/* <img
                            className="w-32 h-20 mr-4 object-cover rounded shadow-lg"
                            src="https://images.unsplash.com/photo-1575492246178-0199b60408e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80" /> */}
                        <button>
                            <svg className="fill-current" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PostCard;