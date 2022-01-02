import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import 'animate.css';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);