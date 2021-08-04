import * as React from "react";
import { MenuItemLink, usePermissions } from 'react-admin';

const Menu = ({ onMenuClick, logout }) => {
    const { permissions } = usePermissions();
    return (
        <div>
            <MenuItemLink to="/posts" primaryText="Posts" onClick={onMenuClick} />
            <MenuItemLink to="/comments" primaryText="Comments" onClick={onMenuClick} />
            {permissions === 'admin' &&
                <MenuItemLink to="/custom-route" primaryText="Miscellaneous" onClick={onMenuClick} />
            }
            {logout}
        </div>
    );
}