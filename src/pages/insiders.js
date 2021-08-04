// in src/insiders.js
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
import { readJsonConfigFile } from 'typescript';

let text = {
    value: 'Not executed'
}

function RunButton() {
    const [state, setState] = useState('idle');

    const onClickHandler = () => {
        setState('loading');
        text.value = 'Executing';
        const request = new Request('http://localhost:5001/insiders/run', {
            method: 'POST',
            body: JSON.stringify(({ task: 'exec2ute' })),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        setTimeout(() => {
            setState('success');
        }, 1000);
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => {
                // this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            })
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

const InsiderFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="insiders" alwaysOn />
        <ReferenceInput label="Insider" source="insidersId" reference="insiders" allowEmpty>
            <SelectInput optionText="ticker" />
        </ReferenceInput>
    </Filter>
);


export const InsiderPage = props => {

    const [state, setState] = useState("Not Executed");

    function handler() {
        this.setState({
            someVar: 'some value'
        })
    };

    return (

        <React.Fragment>
            <Box>
                <CardHeader title="Run the process: " />
                <span class="m-4">
                    <RunButton onClick="handler()" ></RunButton><span class="m-4">{state}</span>
                </span>
            </Box>
            <InsiderList {...props} />
        </React.Fragment>
    );
};

export const InsiderList = props => (
    <List filters={<InsiderFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="ticker" reference="companies">
                <TextField source="ticker" />
            </ReferenceField>
            <TextField source="transaction" />
            <EditButton />
        </Datagrid>
    </List>
);

// const InsiderTitle = ({ record }) => {
//         return <span> {record ? `"${record.owner}"` : ''}</span>;
//     };

// export const InsiderEdit = props => (
//     <Edit title={<InsiderTitle />} {...props}>
//         <SimpleForm>
//             <TextInput disabled source="id" />
//             <ReferenceInput source="insiderId" reference="insiders">
//                 <SelectInput optionText="name" />
//             </ReferenceInput>
//             <TextInput source="title" />
//             <TextInput multiline source="body" />
//         </SimpleForm>
//     </Edit>
// );

// export const InsiderCreate = props => (
//         <Create {...props}>
//             <SimpleForm>
//                 <ReferenceInput source="insiderId" reference="insiders">
//                     <SelectInput optionText="ticker" />
//                 </ReferenceInput>
//                 <TextInput source="title" />
//                 <TextInput multiline source="body" />
//             </SimpleForm>
//         </Create>
// );

