import React from 'react';
import Paper from 'material-ui/Paper';
import jake from '../jake.jpg';
const style = {
    height: 250,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden'
};
function ProfilePicture() {
    return (
        <Paper style={style} zDepth={4} circle={true} >
            <img style={{ width: '100%', height: 'auto' }} src={jake} />
        </Paper>
    )
};

export default ProfilePicture;