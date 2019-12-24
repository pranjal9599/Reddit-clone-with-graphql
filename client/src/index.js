import React from 'react';
import ReactDom from 'react-dom';
import Main from './pages/Main';
import Post from './pages/Post';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Router } from '@reach/router';

const client = new ApolloClient({
	uri: 'http://localhost:4000',
	cache: new InMemoryCache()
})

export default client;

const App = () => (
	<ApolloProvider client={client}>
		<Router>
			<Main path="/" />
			<Post path="/:id" />
		</Router>
	</ApolloProvider>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
