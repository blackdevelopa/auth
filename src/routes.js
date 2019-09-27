import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Dashboard from './component/dashboard'
import Login from './component/login'
import NotFound from './component/notFound'

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route path='/dashboard' component={Dashboard} exact/>
			<Route component={NotFound} />
		</Switch>
	)
}

export default Routes