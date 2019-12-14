import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const Subreddit = ({ name, image }) => (
    <div className="flex justify-between text-sm text-gray-600 my-5">
        <div>
            <img className="inline-block h-6 w-6 rounded-full mr-2" src={image} />
            {name}
        </div>
        <div className="text-gray-500"><svg width="24" height="24" className="fill-current"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" /></svg></div>
    </div>
)

const SUBREDDITS_QUERY = gql`
    {
        subreddits {
            _id
            name
            image
        }
    }

`;

function Sidebar() {
    const { loading, error, data } = useQuery(SUBREDDITS_QUERY);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Loading...</div>


    return (
        <div className="bg-gray-100 w-1/5 h-screen px-6 py-6 border-r border-gray-200">
            <div className="mb-8">
                <h1 className="text-sm font-semibold">Reddit</h1>
            </div>
            <div className="my-8">
                <h4 className="text-xs font-normal border-b border-gray-200 pb-2 text-gray-500 mb-4">Reddit Posts</h4>
                <div>
                    <ul>
                        <li className="text-gray-900 py-2 my-2 rounded text-sm font-semibold bg-gray-200 rounded">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path fill="none" d="M0 0h24v24H0V0z" /><path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z" />
                            </svg>
                            All
						</li>
                        <li className="text-gray-600 py-2 my-2 rounded text-sm hover:font-semibold hover:text-gray-900 hover:bg-gray-200">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path fill="none" d="M0 0h24v24H0V0z" /><path d="M11.57 13.16c-1.36.28-2.17 1.16-2.17 2.41 0 1.34 1.11 2.42 2.49 2.42 2.05 0 3.71-1.66 3.71-3.71 0-1.07-.15-2.12-.46-3.12-.79 1.07-2.2 1.72-3.57 2zM13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM12 20c-3.31 0-6-2.69-6-6 0-1.53.3-3.04.86-4.43a5.582 5.582 0 003.97 1.63c2.66 0 4.75-1.83 5.28-4.43A14.77 14.77 0 0118 14c0 3.31-2.69 6-6 6z" />
                            </svg>
                            Hot
						</li>
                        <li className="text-gray-600 py-2 my-2 rounded text-sm hover:font-semibold hover:text-gray-900 hover:bg-gray-200">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /><path d="M0 0h24v24H0z" fill="none" /><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                            </svg>
                            New
						</li>
                        <li className="text-gray-600 py-2 my-2 rounded text-sm hover:font-semibold hover:text-gray-900 hover:bg-gray-200">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path fill="none" d="M0 0h24v24H0V0z" /><path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z" />
                            </svg>
                            Controversial
						</li>
                        <li className="text-gray-600 py-2 my-2 rounded text-sm hover:font-semibold hover:text-gray-900 hover:bg-gray-200">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" /><path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                            Rising
						</li>
                        <li className="text-gray-600 py-2 my-2 rounded text-sm hover:font-semibold hover:text-gray-900 hover:bg-gray-200">
                            <svg width="24" height="24" className="inline-block mr-2 fill-current">
                                <path fill="none" d="M0 0h24v24H0V0z" /><path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
                            </svg>
                            Top
						</li>

                    </ul>
                </div>
            </div>
            <div>
                <h4 className="text-xs font-normal border-b border-gray-200 pb-2 text-gray-500 mb-4">Subscriptions</h4>
                <div>
                    {data.subreddits.map(s =>
                        <Subreddit key={s._id} name={s.name} image={s.image} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar;