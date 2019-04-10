# react-sanitized

A React component that will sanitize user HTML code, using the popular [`sanitize-html`](https://npmjs.com/package/sanitize-html) package.

# Install

This React component requires [`react`](https://npmjs.com/package/react) as a peer dependency.

npm:
`npm install react-sanitized --save`

yarn:
`yarn add react-sanitized`

# Example usage

```jsx
import Sanitized from "react-sanitized";

const unsafeHtml =
  "<a href=\"http://github.com\" onClick=\"'>alert('test')>Github</a>";

ReactDOM.render(
  <Sanitized html={unsafeHtml} wrapperTag="label" />,
  document.getElementById("reactRoot")
);
```

It will output as:

```html
<label>
  <a href="http://github.com">Github</a>
</label>
```

# Options

You can add [`sanitize-html`](https://npmjs.com/package/sanitize-html) options as props. For example,

```jsx
<SanitizedHTML
  options={{
    allowedTags: ["a"]
  }}
  html={'<a href="http://github.com">Github</a>'}
/>
```

# Contribution

Like us? [Star](https://github.com/marius-ionescu/react-sanitized) us.

Found an issue? [File](https://github.com/marius-ionescu/react-sanitized/issues) us an issue.
