import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

export const client = new ApolloClient({
	link: createHttpLink({
		uri: 'https://api.github.com/graphql',
		headers: {
			// Just a token for github api access only
			Authorization: "Token b2784a81c470e07f11b1b97f0e58f98f6f69e403"
		}
	}),
	cache: new InMemoryCache(),
});
