'use strict';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import SanitizedHTML from '../';

describe('SanitizedHTML', () => {
  test('should render tag correctly', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML html={ '<a href="http://bing.com/">Bing</a>' }/>
      )
    ).toBe('<div><a href="http://bing.com/">Bing</a></div>');
  });

  test('should render only allowed tags', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          allowedTags={['a']}
          html={ '<a href="http://bing.com/"><strong>Bing</strong></a>' }
        />
      )
    ).toBe('<div><a href="http://bing.com/">Bing</a></div>');
  });
});
