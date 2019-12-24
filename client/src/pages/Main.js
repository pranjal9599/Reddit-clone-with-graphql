import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Popup from '../components/Popup';

const GET_POSTS = gql`
	{
		posts {
			_id
			title
			link
			subreddit
			votes
			op {
				username
				display_picture
			}
		}
	}
`

const CREATE_POST = gql`
	mutation CreatePost($input: NewPostInput!) {
		addPost(input: $input) {
			_id
			title
			link
			votes
		}
	}

`

function Main() {
	const { loading, error, data } = useQuery(GET_POSTS);
	const [popUp, setPopup] = useState(false);
	const [createPost, _] = useMutation(CREATE_POST, {
		update(cache, { data: { addPost } }) {
			const addedPost = addPost;
			addedPost.op = {
				username: 'cartmanbrah',
				display_picture: 'https://i1.sndcdn.com/avatars-000164434906-34hrkr-t500x500.jpg',
				__typename: 'User'
			}
			const { posts } = cache.readQuery({ query: GET_POSTS });
			//console.log(posts);
			cache.writeQuery({
				query: GET_POSTS,
				data: { posts: [addedPost, ...posts] }
			})
		}
	})
	if (loading) return <p>Loading....</p>;
	if (error) return <p>Loading....</p>;

	const onSubmit = input => {
		//console.log(input);
		createPost({
			variables: { input }
		});
		setPopup(false);
	}

	return (
		<Layout>
			{
				popUp && <Popup setPopup={setPopup} onSubmit={onSubmit} />
			}
			<div className="flex justify-between items-center mt-8 mb-8">
				<div className="flex items-center leading-tight">
					<h2 className="text-gray-700 text-2xl font-light">Top Posts</h2>
					<a onClick={() => setPopup(true)} href="#" className="bg-orange-500 text-white text-lg px-4 py-3 ml-4 rounded hover:bg-orange-400">Add Post</a>
				</div>
				<div className="flex text-gray-400">
					<svg className="mr-2" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 18h15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zM4 6v4c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1z" /></svg>
					<svg className="fill-current" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 11h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm0 7h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm6 0h3c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm-6-7h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm5-5v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z" /></svg>
				</div>
			</div>
			{data.posts.map(({ title, link, op, votes, _id }) => (
				<PostCard key={_id} title={title} link={link} user={op} votes={votes} _id={_id} />
			))}
		</Layout>
	);
}

export default Main;
