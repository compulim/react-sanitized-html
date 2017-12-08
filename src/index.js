'use strict';

import React from 'react';
import PropTypes from 'prop-types'
import sanitizeHTML from 'sanitize-html';

const SUPPORTED_SANITIZER_OPTIONS = [
  'allowProtocolRelative',
  'allowedAttributes',
  'allowedClasses',
  'allowedSchemes',
  'allowedSchemesByTag',
  'allowedTags',
  'exclusiveFilter',
  'nonTextTags',
  'parser',
  'selfClosing',
  'transformTags'
];

export default class SanitizedHTML extends React.Component {
  render() {
    const sanitizerOptions = SUPPORTED_SANITIZER_OPTIONS.reduce((options, name) => {
      const value = this.props[name];

      if (typeof value !== 'undefined') {
        options[name] = value;
      }

      return options;
    }, {});

    const sanitizedHTML = sanitizeHTML(
      this.props.html,
      sanitizerOptions
    );

    return (
      <div
        className={ this.props.className }
        dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        id={ this.props.id }
        style={ this.props.style }
      />
    );
  }
}

SanitizedHTML.defaultProps = {
  html: ''
};

SanitizedHTML.propTypes = {
  allowProtocolRelative: PropTypes.bool,
  allowedAttributes    : PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  allowedClasses       : PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  allowedSchemes       : PropTypes.arrayOf(PropTypes.string),
  allowedSchemesByTag  : PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  allowedTags          : PropTypes.arrayOf(PropTypes.string),
  exclusiveFilter      : PropTypes.func,
  html                 : PropTypes.string.isRequired,
  nonTextTags          : PropTypes.arrayOf(PropTypes.string),
  parser               : PropTypes.any,
  selfClosing          : PropTypes.arrayOf(PropTypes.string),
  transformTags        : PropTypes.objectOf(PropTypes.oneOf([PropTypes.func, PropTypes.string])),

  className: PropTypes.string,
  id       : PropTypes.string,
  style    : PropTypes.any
};
