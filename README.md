# yarn add react-email-components-template

[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/example-rollup-react-component-npm-package.svg)](https://greenkeeper.io/)
![Example Rollup React Component NPM Package](https://github.com/jaebradley/example-rollup-react-component-npm-package/workflows/Example%20Rollup%20React%20Component%20NPM%20Package/badge.svg)
[![codecov](https://codecov.io/gh/jaebradley/example-rollup-react-component-npm-package/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/example-rollup-react-component-npm-package)
[![npm](https://img.shields.io/npm/dt/@jaebradley/example-rollup-react-component-npm-package.svg)](https://www.npmjs.com/package/@jaebradley/example-rollup-react-component-npm-package)
[![npm](https://img.shields.io/npm/v/@jaebradley/example-rollup-react-component-npm-package.svg)](https://www.npmjs.com/package/@jaebradley/example-rollup-react-component-npm-package)

Example `React` component "library" using [`rollup`](https://github.com/rollup/rollup) that is published to `npm`.

title (string, required) - Used by clients if email is opened in a web page.
previewText (string, required) - Short description that appears in email clients
headCSS (string, optional) - CSS that belongs in `<head>`. Note, email clients may strip this out.
bgColor (string, optional) - The background color for the email. '#FFFFFF' is the default
lang (string, optional) - ISO language code
dir (string, optional) - Either 'ltr' or 'rtl'. 'ltr' is the default
