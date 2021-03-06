import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ icon, link, css }) => (
    <a href={link}>
        <i class={"fa " + icon + ' fa-5x ' + css} aria-hidden="true"></i>
    </a>
);

IconLink.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    css: PropTypes.string
}
export default IconLink;    