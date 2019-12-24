import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Link } from '@reach/router';

const GET_POST = gql`
    query GetPost($id: String!) {
        post(id: $id) {
            title
            votes
            description
            op {
                name
                display_picture
            }
            commentCount
            comments {
                _id
                comment
                votes
                user {
                    username
                    display_picture
                }
            }
        }
    }
`

import Layout from '../components/Layout';

function Comment({ level = 0, username, display_picture, votes, comment }) {
    return (
        <div className={`flex items-top ml-${level * 6} mb-4`} >
            <div className="flex flex-col pr-6 items-center text-gray-400">
                <button>
                    <svg className="fill-current" width="24" height="24"><path d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0L6.7 13.3a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z" /></svg>
                </button>
                <button>
                    <svg className="fill-current" width="24" height="24"><path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
                </button>
            </div>
            <div>
                <div className="flex items-center py-3">
                    <img className="w-8 h-8 rounded-full mr-2" src={display_picture} />
                    <a href="#" className="text-orange-400 mr-4">{username}</a>
                    <span className="text-gray-400 mr-2 text-sm">{votes} points</span>
                    <span className="text-gray-400 text-sm">1 day ago</span>
                </div>
                <div>
                    <p className="text-gray-800">{comment}</p>
                </div>
                <div className="text-gray-500 py-3">
                    <span className="mr-3">Reply</span>
                    <span className="mr-3">Share</span>
                    <span className="mr-3">Report</span>
                    <span className="mr-3">Save</span>
                    <span>Give Gold</span>
                </div>
            </div>
        </div >
    )
}

function Post({ id }) {
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { id: id }
    });

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <Layout>
            <div className="flex items-center border-b pb-8">
                <Link to="/">
                    <svg width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                </Link>
                <div className="flex flex-col items-center px-4 mx-8 text-gray-700">
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0L6.7 13.3a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z" /></svg>
                    </button>
                    <span>{data.post.votes}</span>
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
                    </button>

                </div>
                <div className="flex flex-1 justify-between items-center">
                    <div className="border-l px-6 py-3">
                        <div className="my-2 flex items-center">
                            <img
                                src={data.post.op.display_picture}
                                className="rounded-full w-6 h-6 mr-2"
                            />
                            <span className="text-orange-500">{data.post.op.name}</span>
                            <time className="text-gray-400 ml-4">1 days ago.</time>
                        </div>
                        <h2 className="gray-700 text-3xl mt-2">{data.post.title}</h2>
                        <p className="text-md text-gray-500 mt-2 w">{data.post.description}</p>
                    </div>
                </div>
            </div>
            <div className="px-2 py-12">
                <div className="flex items-center">
                    <h2 className="text-lg text-gray-600 font-light mr-12">Comments ({data.post.commentCount})</h2>
                    <button className="bg-orange-500 hover:bg-orange-400 text-md font-semibold text-white px-4 py-2">Add Comment</button>
                </div>
                <div className="my-8">
                    {data.post.commentCount === 0 ?
                        <p className="text-gray-500 font-light">No comments...</p> :
                        data.post.comments.map(comment => <Comment key={comment._id} username={comment.user.username} comment={comment.comment} votes={comment.votes} display_picture={comment.user.display_picture} />)
                    }
                </div>
            </div>

        </Layout>
    )
}

export default Post;