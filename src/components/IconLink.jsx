import React from 'react';
import PropTypes from 'prop-types';

const IconLink = ({ icon, link }) => (
    <a href={link}>
        <i class={"fa " + icon + ' fa-5x' + ' col-lg-3'} aria-hidden="true"></i>
    </a>
);

IconLink.propTypes = {
    icon: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}
export default IconLink;    