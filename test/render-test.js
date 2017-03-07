'use strict';

import assert from 'assert';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SanitizedHTML from '../';

describe('SanitizedHTML', () => {
  it('should render tag correctly', () => {
    assert.equal(
      '<div><a href="http://bing.com/">Bing</a></div>',
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML html={ '<a href="http://bing.com/">Bing</a>' }/>
      )
    );
  });
});
