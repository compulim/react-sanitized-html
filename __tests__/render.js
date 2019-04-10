import React from "react";
import ReactDOMServer from "react-dom/server";
import Sanitized from "../src";

describe("Sanitized", () => {
  test("should render tag correctly", () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <Sanitized
          html={
            '<a href="http://github.com" onClick="alert(\'test\')">Github</a>'
          }
        />
      )
    ).toBe('<span><a href="http://github.com">Github</a></span>');
  });

  test("should render only allowed tags", () => {
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <Sanitized
          options={{ allowedTags: ["a"] }}
          html={'<a href="http://github.com"><strong>Github</strong></a>'}
        />
      )
    ).toBe('<span><a href="http://github.com">Github</a></span>');
  });

  test("should render the provided wrapper tag", () => {
    const providedTag = "label";
    const html = '<a href="http://github.com"><strong>Github</strong></a>';
    expect(
      ReactDOMServer.renderToStaticMarkup(
        <Sanitized html={html} wrapperTag="label" />
      )
    ).toBe(`<${providedTag}>${html}</${providedTag}>`);
  });
});
