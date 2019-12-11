import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import PostCard from './PostCard';

function Layout(props) {
    return (
        <div className="flex overflow-hidden">
            <Sidebar />
            <div className="w-4/5 h-screen overflow-scroll">
                <Header />
                <main className="pt-4 px-16">
                    {props.children}
                </main>
            </div>
        </div>
    )
}

export default Layout