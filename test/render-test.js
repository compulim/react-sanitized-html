'use strict';

import assert from 'assert';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SanitizedHTML from '../';

describe('SanitizedHTML', () => {
  it('should render tag correctly', () => {
    assert.equal(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML html={ '<a href="http://bing.com/">Bing</a>' }/>
      ),
      '<div><a href="http://bing.com/">Bing</a></div>'
    );
  });

  it('should render only allowed tags', () => {
    assert.equal(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          allowedTags={['a']}
          html={ '<a href="http://bing.com/"><strong>Bing</strong></a>' }
        />
      ),
      '<div><a href="http://bing.com/">Bing</a></div>'
    );
  });
});
