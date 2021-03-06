import React, { Component } from 'react';
import EventDashboard from '../../features/events/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import {Container} from 'semantic-ui-react';
import {Route, Switch} from 'react-router-dom';
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/events/EventForm/EventForm';
import HomePage from '../../features/home/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path = '/'
            component = {HomePage}
            exact
          />
        </Switch>
        <Route 
          path="/(.+)" //co it nhat 1 ky tu
          render = {() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route
                    path = '/events'
                    component = {EventDashboard}
                    
                  />
                  <Route
                    path = '/events/:id'
                    component = {EventDetailedPage}
                    
                  />
                  <Route
                    path = '/people'
                    component = {PeopleDashboard}
                    
                  />
                  <Route
                    path = '/profile/:id'
                    component = {UserDetailedPage}
                    
                  />
                  <Route
                    path = '/settings'
                    component = {SettingsDashboard}
                    
                  />
                  <Route
                    path = '/createEvent'
                    component = {EventForm}
                    
                  />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>

    );
  }
}

export default App;
