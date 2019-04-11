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

  test('should unconditionally transform tags', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          transformTags={{i: 'em'}}
          html={ '<i>Important</i>' }
        />
      )
    ).toBe('<div><em>Important</em></div>');
  });

  test('should transform tags with custom filter', () => {
    const setHref = (tagName, attribs) => {
      attribs.href = 'http://example.com/';
      return {
        tagName: tagName,
        attribs: attribs
      };
    };
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          transformTags={{a: setHref}}
          html={ '<a href="http://bing.com/">Bing</a>' }
        />
      )
    ).toBe('<div><a href="http://example.com/">Bing</a></div>');
  });
});
