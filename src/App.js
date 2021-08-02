import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { fetchUtils } from 'ra-core';

import { CompaniesList } from './pages/companies';
import { NewsProvidersList } from './pages/newsProviders';
// import { InsiderList, InsiderEdit, InsiderCreate } from './insiders';
import { InsiderList } from './pages/insiders';
import jsonServerProvider from 'ra-data-json-server';
import InsiderIcon from '@material-ui/icons/Book';
import CompanyIcon from '@material-ui/icons/Business';
import NewsProvidersIcon from '@material-ui/icons/Announcement';
import Dashboard from './pages/dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('http://localhost:5001/');

const App = () => (
    <Admin title="Investphere" dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
        {/* <Resource name="insiders" list={InsiderList} edit={InsiderEdit} create={InsiderCreate} icon={InsiderIcon} /> */}
        <Resource name="insiders" list={InsiderList} icon={InsiderIcon} />
        <Resource name="companies" list={CompaniesList} icon={CompanyIcon} />
        <Resource name="news" list={NewsProvidersList} icon={NewsProvidersIcon} />
    </Admin>
);

export default App;

