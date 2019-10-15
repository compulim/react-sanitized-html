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

  test('should render all tags with no attributes', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          allowedTags={false}
          allowedAttributes={{}}
          html={ '<a href="http://bing.com/"><strong>Bing</strong></a>' }
        />
      )
    ).toBe('<div><a><strong>Bing</strong></a></div>');
  });

  test('should render only allowed tags with all attributes', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          allowedTags={['strong']}
          allowedAttributes={false}
          html={ `<a href="http://bing.com/"><strong onclick="alert('Bing');">Bing</strong></a>` }
        />
      )
    ).toBe(`<div><strong onclick="alert('Bing');">Bing</strong></div>`);
  });

  test('should render only allowed tags with allowed attributes', () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <SanitizedHTML
          allowedTags={['strong']}
          allowedAttributes={{
            'strong': ['title']
          }}
          html={ `<a href="http://bing.com/"><strong title="Bang" onclick="alert('Bing');" >Bing</strong></a>` }
        />
      )
    ).toBe(`<div><strong title="Bang">Bing</strong></div>`);
  });
});
