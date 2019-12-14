import React, { useState } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import Popup from '../components/Popup';

import { useQuery } from '@apollo/react-hooks';
import { gql, InMemoryCache } from 'apollo-boost';

const POSTS_QUERY = gql`
	{
		posts {
			title
			link
			op {
				username
				display_picture
			}
		}
	}
`

function Main() {
	const { loading, error, data } = useQuery(POSTS_QUERY);
	const [popUp, setPopup] = useState(true);
	if (loading) return <p>Loading....</p>;
	if (error) return <p>Loading....</p>;

	return (
		<Layout>
			{
				popUp && <Popup setPopup={setPopup} />
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
			{data.posts.map(({ title, link, op }) => (
				<PostCard title={title} link={link} user={op} />
			))}
		</Layout>
	);
}

export default Main;
