import React, { Component } from 'react'
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'

// import EmptyLayout from '@layouts/empty-layout'
import MainLayout from '@layouts/main-layout'
import routes from './routes'
import AuthorizedRoute from '@/components/authWrapper/authorizedRoute'
import Login from '@/containers/login'
import SideMenu from '@/containers/sidemenu'
export default class RouteConfig extends Component<{}> {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sidemenu">
            <SideMenu />
          </Route>
          <MainLayout>
            <Redirect from="/" to="/activity-photo" exact />
            {routes.map((rc) => {
              const { path, component, auth = '', redirectPath = '/no-auth', ...rest } = rc
              return (
                <AuthorizedRoute
                  render={() => {
                    return <div>无渲染内容</div>
                  }}
                  key={path}
                  path={path}
                  component={component}
                  auth={auth}
                  redirectPath={redirectPath}
                  {...rest}
                />
              )
            })}
          </MainLayout>
        </Switch>
      </HashRouter>
    )
  }
}
