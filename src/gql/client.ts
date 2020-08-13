import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const client = new ApolloClient({
	link: createHttpLink({
		uri: 'https://api.github.com/graphql'
	}),
	cache: new InMemoryCache(),
});
