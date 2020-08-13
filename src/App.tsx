import React from 'react';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core'
import {ApolloProvider} from '@apollo/client';
import {client} from "./gql/client";
import Repositories from "./main/repositories/Repositories";

function App() {
	return (
		<ApolloProvider client={client}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit"> React Repositories </Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Repositories />
			</Container>
		</ApolloProvider>
	);
}

export default App;
