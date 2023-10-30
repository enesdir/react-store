# React-Store

This is a project bootstrapped with [`@vitejs/app`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`react-ts`), added with [Material UI][MUI-url] and [TypeScript][TS-url] setup. You can see: [Live Demo][Live-url]

- ⚡ blazing fast dev server and build
- 🔗 route management added (`react-router-dom` configured)

<p align="center">
  <a href="https://vercel.com/import/git?s=https://github.com/enesdir/react-store">
    <img alt="Deploy with Vercel" src="https://vercel.com/button" />
  </a>
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/enesdir/react-store">
  <img alt="Deploy to Netlify" src="https://www.netlify.com/img/deploy/button.svg"/></a>
  <a href="https://stackblitz.com/github/enesdir/react-store">
    <img alt="Open in StackBlitz" src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/enesdir/react-store/blob/master/LICENSE.md">
    <img alt="licence-badge" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue" />
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/enesdir/react-store"/>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/enesdir/react-store"/>
  <a href="https://github.com/enesdir/react-store/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/enesdir/react-store?color=blue"/>
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://reactjs.org/">
    <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
  </a>
  <a target="_blank" href="https://vitejs.dev/">
    <img alt="Vite" src="https://img.shields.io/static/v1?color=blue&label=Vite&message=JS&?style=plastic&logo=Vite">
  </a>
  <a target="_blank" href="https://prettier.io/">
    <img alt="prettier-badge" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" />
  </a>
    <a target="_blank" href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly-badge" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square" />
  </a>
</p>

<details>
<summary>Table of Contents</summary>

- [React-Store](#react-store)
  - [Built With](#built-with)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Lint scripts](#lint-scripts)
    - [Typecheck](#typecheck)
    - [Build](#build)
  - [License](#license)

</details>

## Built With

This template setup will include following features.

[![Vite][Vite]][Vite-url] [![React][React.js]][React-url] [![Redux Toolkit][RTK]][Rtk-url] [![MUI][MUI]][MUI-url]

| ✅  | Feature                                                                                                                                                                           |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅  | [Generate Vite][Vite-url] + [React][React-url] + [Typescript][TS-url]                                                                                                             |
| ✅  | [Husky](https://typicode.github.io/husky/)                                                                                                                                        |
| ✅  | [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) + [Commitlint](https://commitlint.js.org/#/) + [Commitizen](https://commitizen-tools.github.io/commitizen/) |
| ✅  | [ESLint](https://eslint.org/)                                                                                                                                                     |
| ✅  | [Prettier format](https://prettier.io/)                                                                                                                                           |
| ✅  | [Lint Staged](https://github.com/okonet/lint-staged#readme)                                                                                                                       |
| ✅  | [Material UI](https://mui.com/)                                                                                                                                                   |
| ✅  | [Redux](https://redux.js.org/) + [Redux Toolkit][Rtk-url]                                                                                                                         |

## Installation & Usage

### Prerequisites

- node >=18.4.0

### Install

Create the project.

```bash
git clone https://github.com/enesdir/react-store.git
```

Access the project directory.

```bash
cd react-store
```

Install dependencies.

```bash
npm install
```

Serve with hot reload at <http://localhost:5173>.

```bash
npm run dev # start development server
```

### Lint scripts

```bash
npm run lint        # check code
npm run lint:fix    # fix code & formatting
npm run lint-staged # does npm run lint only for staged files
```

### Typecheck

```bash
npm run type-check
```

### Build

```bash
npm run build   # build production bundle to 'dist' directly
npm run preview # start production server
```

## License

This project uses MIT license: [License](https://github.com/enesdir/react-store/blob/master/LICENSE.md)

<!-- MARKDOWN LINKS & IMAGES -->

[Vite]: https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[Vite-url]: https://vitejs.dev/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[RTK]: https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[RTK-url]: https://redux-toolkit.js.org/
[MUI]: https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/
[TS-url]: (https://www.typescriptlang.org/)
[Live-url]: (https://react-store.enesesen.com)
