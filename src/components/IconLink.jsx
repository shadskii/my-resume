import React from 'react';

function IconLink(props) {
    return (
        <a href={props.link}>
            <i class={"fa " + props.icon + ' fa-5x'} aria-hidden="true"></i>
        </a>
    );
}

export default IconLink;    