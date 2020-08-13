import React, {Fragment} from 'react';
import {AppBar, Container, Toolbar, Typography} from '@material-ui/core'
import Repositories from "./main/repositories/Repositories";

function App() {
	return (
		<Fragment>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit"> React Repositories </Typography>
				</Toolbar>
			</AppBar>
			<Container>
				<Repositories />
			</Container>
		</Fragment>
	);
}

export default App;
