# Fireball Festival marketing site

- gatsbyjs
- inspired by https://github.com/fabe/gatsby-universal

## Usage

- works with node v14

```bash
# To develop
yarn develop

# To build
yarn build

# To test SSR (for Lighthouse etc.)
yarn ssr

# To format JS (precommit)
yarn format

# To generate favicons (included in `build`)
yarn build:favicons
```

[![Edit on CodeSandbox](https://cdn.rawgit.com/fabe/1dd805eed0153b47aba2b50cea2469ec/raw/64b0ea90c2a425d3847da908053f5f337128259b/edit-on-codesandbox-32px.svg)](https://codesandbox.io/s/github/justinschuldt/fireball-festival)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/justinschuldt/fireball-festival)

## Folder structure
```bash
├── gatsby-browser.js # Specify how Gatsby renders pages in the browser
├── gatsby-config.js # Gatsby config, mostly taken from `site-config.js`
├── gatsby-node.js # Modify webpack config
├── gatsby-ssr.js # Specify how Gatsby builds pages
├── site-config.js # Global settings for the whole site, used by multiple scripts
├── content # Content & data, in both json and markdown
├── src
│   ├── components
│   │   ├── head # All meta tags etc.
│   │   ├── io # Intersection Observer component, uses render props
│   │   ├── layout # Layout component
│   │   │   ├── layout.css.js # .css.js for component's `styled-components`
│   │   │   └── layout.js
│   │   └── transition # Page Transition component, used by Gatsby APIs
│   ├── constants # Site-wide constants (breakpoints, colors, etc.)
│   ├── containers # Container components if store is needed
│   ├── helpers
│   │   ├── schemaGenerator.js # Generates JSON-LD schema.org snippets
│   │   └── mediaTemplates.js # Creates media queries for styled-components
│   ├── images # Images needed by the site/theme (not content)
│   ├── pages
│   ├── store # Store and provider of a React.createContext instance
│   └── global.css.js # Global CSS
└── scripts
    ├── lighthouse.test.js # Tests the site specified inside `site-config.js` with Google Lighthouse (WIP)
    └── favicons.js # Generates favicons and manifest using one png only.
```


### adding pages
add a javascript file to `/src/pages/`, then add a link to the nav in `/src/components/header/nav/nav.js`

### adding forms
add to `/static/forms/`

### updaing links
update the markdown file [./content/links/content.md](./content/links/content.md)

### add/update Schedule
add a link to the nav [./src/components/header/nav/nav.js](./src/components/header/nav/nav.js)


update the json [./content/schedule/schedule.json](./content/schedule/schedule.json)
