import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import EmailIcon from '@material-ui/icons/Email';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import { messageList, createMessage, showMessage } from './contact/Contact';
import { wineList, createWine, showWine, wineEdit } from './Wine/Wine';

const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
  >
    <Resource
      options={{ label: 'Messages' }}
      name="contact"
      list={messageList}
      create={createMessage}
      show={showMessage}
      icon={EmailIcon}
    />
    <Resource
      options={{ label: 'Wines' }}
      name="products"
      list={wineList}
      create={createWine}
      show={showWine}
      edit={wineEdit}
      icon={LocalBarIcon}
    />
  </Admin>
);

export default App;
