import React from 'react';
import Layout from '../components/Layout';

function Comment({ level = 0 }) {
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
                    <img className="w-8 h-8 rounded-full mr-2" src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
                    <a href="#" className="text-orange-400 mr-4">PrettyKid04</a>
                    <span className="text-gray-400 mr-2 text-sm">231 points</span>
                    <span className="text-gray-400 text-sm">1 day ago</span>
                </div>
                <div>
                    <p className="text-gray-800">Bethesa should borrow this for this ievitable steam holiday sale tommorow. This is quality!</p>
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

function Post() {
    return (
        <Layout>
            <div className="flex items-center border-b pb-8">
                <div>
                    <svg width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
                </div>
                <div className="flex flex-col items-center px-4 mx-8 text-gray-700">
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 101.41-1.41L12.7 8.71a.996.996 0 00-1.41 0L6.7 13.3a.996.996 0 000 1.41c.39.38 1.03.39 1.42 0z" /></svg>
                    </button>
                    <span>42.0k</span>
                    <button>
                        <svg className="fill-current" width="24" height="24"><path d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 111.41 1.41l-4.59 4.59a.996.996 0 01-1.41 0L6.7 10.7a.996.996 0 010-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
                    </button>

                </div>
                <div className="flex flex-1 justify-between items-center">
                    <div className="border-l px-6 py-3">
                        <div className="my-2 flex items-center">
                            <img
                                src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.5&w=400&h=400&q=80"
                                className="rounded-full w-6 h-6 mr-2"
                            />
                            <span className="text-orange-500">Julia Vega</span>
                            <time className="text-gray-400 ml-4">1 days ago.</time>
                        </div>
                        <h2 className="gray-700 text-3xl mt-2">Code monkey is a simple man</h2>
                        <p className="text-md text-gray-500 mt-2 w">Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <img className="" src="https://images.unsplash.com/photo-1575571342665-295c9cb8c016?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" />
                    </div>
                </div>
            </div>
            <div className="px-2 py-12">
                <div className="flex items-center">
                    <h2 className="text-lg text-gray-600 font-light mr-12">Comments (152)</h2>
                    <button className="bg-orange-500 hover:bg-orange-400 text-md font-semibold text-white px-4 py-2">Add Comment</button>
                </div>
            </div>
            <Comment />
            <Comment level={1} />
            <Comment level={2} />
            <Comment level={1} />
        </Layout>
    )
}

export default Post;