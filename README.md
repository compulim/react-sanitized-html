# react-sanitized-html

A React component that will sanitize user-inputted HTML code, using the popular [`sanitize-html`](https://npmjs.com/package/sanitize-html) package.

# Install

This React component requires both [`react`](https://npmjs.com/package/react) and [`sanitize-html`](https://npmjs.com/package/sanitize-html) to be installed to work. We marked both as peer dependency so you could use the version of React as it fit.

To install this package, `npm install react-sanitized-html sanitize-html --save`

# Example usage

```jsx
import SanitizedHTML from 'react-sanitized-html';

const HTML_FROM_USER = '<a href="http://bing.com/">Bing</a>';

ReactDOM.render(
  <SanitizedHTML html={ HTML_FROM_USER } />,
  document.getElementById('reactRoot')
);
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

# Contribution

Like us? [Star](https://github.com/compulim/react-sanitized-html/stargazers) us.

Found an issue? [File](https://github.com/compulim/react-sanitized-html/issues) us an issue.
