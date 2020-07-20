import React from 'react';

interface UserControlsProps {
    onSignOut: () => void
}


const UserControls = (props:UserControlsProps) => {
    return (
        <div>
            Controls
            <div onClick={props.onSignOut}>Log Out</div>
        </div>
    );
};

export default UserControls;
