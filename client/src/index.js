import React from 'react';
import ReactDom from 'react-dom';
import Main from './pages/Main';
import Post from './pages/Post';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'http://localhost:4000'
})


const App = () => (
	<ApolloProvider client={client}>
		<Main />
	</ApolloProvider>
);

ReactDom.render(<App />, document.getElementById('app'));

if (module.hot) {
	module.hot.accept();
}
