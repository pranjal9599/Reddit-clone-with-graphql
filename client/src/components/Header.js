import React from 'react';

function Header() {
    return (
        <header class="flex justify-between items-center sticky bg-white w-full p-6 border-b border-gray-200 top-0">
            <div className="">

                <svg className="inline-block" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 001.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 00-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 005.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                <input className="pl-4 focus:outline-none" type="text" placeholder="Search" />
            </div>
            <div className="flex text-gray-500 items-center">
                <svg className="fill-current mr-4" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H6l-2 2V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z" /></svg>
                <svg className="fill-current mr-4" width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4a2 2 0 002 2z" /></svg>
                <div className="flex items-center text-gray-600 font-normal ml-4">
                    <img
                        src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=1.5&w=400&h=400&q=80"
                        className="rounded-full w-8 h-8 mr-2"
                    />
                    Alicia Keys
							<button>
                        <svg width="24" height="24"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z" /></svg>
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header;