import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

function App() {

	return (
		<div className="App">
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
				</Switch>
				</Suspense>
			</Router>
		</div>
	);
	
		
	
}
export default App;
