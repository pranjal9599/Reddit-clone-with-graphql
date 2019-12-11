import React from 'react';
import ReactDom from 'react-dom';
import Main from './pages/Main';
import Post from './pages/Post';

const App = () => (
	<Main />
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
