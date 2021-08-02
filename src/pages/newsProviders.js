// in src/newsProviders.js
import * as React from "react";
import { List, Datagrid, TextField } from 'react-admin';
import MyUrlField from '../components/MyUrlField';

export const NewsProvidersList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <MyUrlField source="website" />
        </Datagrid>
    </List>
);
