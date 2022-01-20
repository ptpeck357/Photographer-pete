import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './App.css';
import './index.css';
import './lib/animate.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

ReactDOM.render(
	<React.StrictMode>
	<Router>
		<App />
	</Router>
	</React.StrictMode>,
	document.getElementById('root')
);