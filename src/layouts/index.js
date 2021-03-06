import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';
import 'semantic-ui-css/semantic.min.css';


const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet title="Maxim Podolski" />
      <Navbar />
      <div>{children()}</div>
    </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
