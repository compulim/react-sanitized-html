# react-sanitized-html

[![npm version](https://badge.fury.io/js/react-sanitized-html.svg)](https://npmjs.com/package/react-sanitized-html) [![Node.js dependencies](https://david-dm.org/compulim/react-sanitized-html.svg)](https://david-dm.org/compulim/react-sanitized-html) [![npm downloads](https://img.shields.io/npm/dm/react-sanitized-html.svg)](https://npmjs.com/package/react-sanitized-html)

A React component that will sanitize user-inputted HTML code, using the popular [`sanitize-html`](https://npmjs.com/package/sanitize-html) package.

# Install

This React component requires both [`react`](https://npmjs.com/package/react) and [`sanitize-html`](https://npmjs.com/package/sanitize-html) to be installed to work. We marked both as peer dependency so you could use the version of React as it fit.

Run `npm install react-sanitized-html sanitize-html --save` to install this package.

> Because both [`htmlparser2`](https://npmjs.com/packages/htmlparser2) and [`domhandler`](https://npmjs.com/packages/domhandler) (dependencies of [`sanitize-html`](https://npmjs.com/packages/sanitize-html)) requires [ES2015 Property Accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) for shorthanded properties. Thus, this component cannot be used in IE8.

> In [`sanitize-html@1.14.1`](https://npmjs.com/packages/sanitize-html), shorthands are not used. Thus, it is possible to build a workaround for IE8 by customizing both [`htmlparser2`] and [`domhandler`] without shorthands.

# Example usage

```jsx
import SanitizedHTML from 'react-sanitized-html';

const HTML_FROM_USER = '<a href="http://bing.com/">Bing</a>';

ReactDOM.render(
  <SanitizedHTML html={ HTML_FROM_USER } />,
  document.getElementById('reactRoot')
);
```

It will output as:

```html
<div>
  <a href="http://bing.com/">Bing</a>
</div>
```

# Options

You can add [`sanitize-html`](https://npmjs.com/package/sanitize-html) options as props. For example,

```html
<SanitizedHTML
  allowedAttributes={{ 'a': ['href'] }}
  allowedTags={['a']}
  html={ `<a href="http://bing.com/">Bing</a>` }
/>
```

You can find more options [here](https://npmjs.com/package/sanitize-html).

# Development

To setup your development environment, after cloning the repository, run the following steps.

```
npm install react sanitize-html
npm install --only=development
```

Then run `npm test` to run all tests.

# Contribution

Like us? [Star](https://github.com/compulim/react-sanitized-html/stargazers) us.

Found an issue? [File](https://github.com/compulim/react-sanitized-html/issues) us an issue.
