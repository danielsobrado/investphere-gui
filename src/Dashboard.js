// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import "@coreui/coreui/dist/css/coreui.css";

import { CButton, CAlert, CAlertLink } from '@coreui/react';

export default () => (
    <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent>Lorem ipsum sic dolor amet...</CardContent>
        <CAlert color="primary">
        A simple primary alert with{' '}
        <CAlertLink href="#">an example link</CAlertLink>. Give it a click if you
        like.
        </CAlert>
        <CButton color="dark" variant="outline">
        Dark
        </CButton>
    </Card>
);