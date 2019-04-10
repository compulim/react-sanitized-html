import PropTypes from "prop-types";
import React from "react";
import sanitizeHTML from "sanitize-html";

const Sanitized = ({
  html,
  className,
  id,
  style,
  wrapperTag,
  options,
  ...other
}) => {
  const sanitizedHTML = sanitizeHTML(html, options);

  return React.createElement(wrapperTag, {
    className,
    dangerouslySetInnerHTML: { __html: sanitizedHTML },
    id,
    style,
    ...other
  });
};

Sanitized.defaultProps = {
  className: null,
  id: null,
  style: null,
  options: null,
  wrapperTag: "span"
};

Sanitized.propTypes = {
  wrapperTag: PropTypes.string,
  html: PropTypes.string.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  options: PropTypes.objectOf(PropTypes.any)
};

export default React.memo(Sanitized);
