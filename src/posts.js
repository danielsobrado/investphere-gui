// in src/posts.js
import React, { useState } from 'react';
import {
    Filter,
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

import { Box, CardHeader } from '@material-ui/core';
import "@coreui/coreui/dist/css/coreui.css";

import ReactiveButton from 'reactive-button';

let text = {
    value: 'Not executed'
}

function RunButton() {
    const [state, setState] = useState('idle');
    
    const onClickHandler = () => {
        setState('loading');
        text.value = 'Executing';
        setTimeout(() => {
            setState('success');
        }, 2000);
    }

    return (
        <ReactiveButton
            buttonState={state}
            loadingText={'Running'}
            onClick={onClickHandler}
            outline={true}
            rounded={true}
            color='dark'
            idleText='Run'
            style={{ paddingLeft: 3, paddingRight: 3 }}
        />
    );
}

export default RunButton;

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => (
    <div>
    <Box>
        <CardHeader title="Run the process: " />
        <span class="m-4">
            <RunButton></RunButton><span class="m-4">{text.value}</span>
        </span>
    </Box>
    <List filters={<PostFilter />} {...props}>
       <Datagrid>
           <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
           <EditButton />
        </Datagrid>
    </List>
    </div>
);

const PostTitle = ({ record }) => {
        return <span>Post {record ? `"${record.title}"` : ''}</span>;
    };

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
);