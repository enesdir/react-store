# React-Store

<p align="center">
  <a href="https://github.com/enesdir/react-store">
    <img alt="App Image" src="https://i.ibb.co/bLzrhYP/react-store.webp" />
  </a>
</p>

This is a project bootstrapped with [`@vitejs/app`](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) (`react-ts`), added with [Material UI][MUI-url] and [TypeScript][TS-url] setup. You can see: [Live Demo][Live-url]

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
  - [Features](#features)
  - [RoadMap](#roadmap)
  - [Built With](#built-with)
    - [Dependencies](#dependencies)
    - [Dev Dependencies](#dev-dependencies)
  - [Installation \& Usage](#installation--usage)
    - [Prerequisites](#prerequisites)
    - [Install](#install)
    - [Commands](#commands)
  - [Project Folder Structure](#project-folder-structure)
  - [License](#license)

</details>

## Features

This template setup will include following features.

- 🔥 Landing layout
- 🌇 Carousel Image Slider
- ⭐️ Reponsive Design
- 🪳Mocks Pagination
- ⚡ Blazing fast dev server and build
- 🔗 Route management added (`react-router-dom` configured)
- 🧙‍♂️ Developer experience improved with ESLint, Prettier and Husky
- 📈 Absolute Import and Path Alias — Import components using `@/` and `~/` prefix
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ▲ Netlify and Vercel deployment configurations

## RoadMap

- [ ] Product Detail Page
- [ ] Add to Cart

## Built With

[![Vite][Vite]][Vite-url] [![React][React.js]][React-url] [![Redux Toolkit][RTK]][Rtk-url] [![MUI][MUI]][MUI-url]

### Dependencies

| Package                                      | Description                                                                                      |
| -------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| [React][React-url]                           | A platform and framework for building single-page client applications using HTML and TypeScript. |
| [Redux Toolkit][Rtk-url]                     | Provides a means to inline SVG files to allow for them to be easily styled by CSS and code.      |
| [Material UI][MUI-url]                       | Modern & Interactive Open-source Charts                                                          |
| [Redux][Redux-url]                           | Angular wrapper for ApexCharts to build interactive visualizations in Angular.                   |
| [react-router][react-router-url]             | Declarative routing for React                                                                    |
| [react-helmet-async][react-helmet-async-url] | Thread-safe Helmet for React 16+ and friends                                                     |

### Dev Dependencies

| Package                                        | Description                                                                                                                 |
| ---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [Vite][Vite-url]                               | Next generation frontend tooling. It's fast!                                                                                |
| [Typescript][TS-url]                           | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.                                             |
| [Husky][Husky-url]                             | Git hook management                                                                                                         |
| [Conventional Commit][Conventional-Commit-url] | A specification for adding human and machine readable meaning to commit messages.                                           |
| [Commitlint][Commitlint-url]                   | Lint commit messages                                                                                                        |
| [Commitizen][Commitizen-url]                   | Using a standardized set of rules to write commits, makes commits easier to read, and enforces writing descriptive commits. |
| [Lint Staged][Lint-Staged-url]                 | Run linters against staged git files and don't let 💩 slip into your code base!                                             |
| [ESLint][ESLint-url]                           | A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.                                       |
| [Prettier][Prettier-url]                       | An opinionated code formatter                                                                                               |
| [million][million-url]                         | The Virtual DOM Replacement for React. Gain big performance wins for UI and data heavy React apps.                          |
| [vite-plugin-pwa][vite-pwa-url]                | Zero-config PWA Framework-agnostic Plugin for Vite                                                                          |

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

Serve with hot reload at <http://localhost:3000>.

```bash
npm run dev # start development server
```

### Commands

| Command                   | Description                                     |
| ------------------------- | :---------------------------------------------- |
| `npm run dev`             | Starts the server in dev mode                   |
| `npm run lint`            | Runs ESLint on the project                      |
| `npm run lint:fix`        | Runs Prettier on entire src folder              |
| `npm run prettier:verify` | Runs Prettier-check and throws error if fails   |
| `npm run lint-staged`     | Runs Prettier on only staged (changed) files    |
| `npm run type-check`      | Runs TSC                                        |
| `npm run build`           | Runs build production bundle to 'dist' directly |
| `npm run preview`         | Runs start production server                    |

## Project Folder Structure

The following is the structured layout of the project directory, providing an overview of the organization of files and folders.

```plaintext
- root
  - public/                     # Contains static assets and files served to the client
    - assets/                   # Holds publicly accessible assets such as images, fonts, etc.
  - src/                        # Contains the source code for the application
    - app/                      # Global application files including constants, CSS, and configurations
      - config/                 # Houses configuration files and settings for the application
    - components/               # Reusable UI components used across the application
      - {ComponentName}/        # Houses reusable React components shared between features
    - features/                 # Contains functional modules or sections of the application
      - {featureName}/          # Houses a specific feature module with its components, actions, and views
        - types/                # Houses TypeScript type definitions and interfaces specific to this feature
    - hooks/                    # Custom React hooks used across the application
    - pages/                    # Contains the application pages
    - router/                   # Houses the application's router configuration
    - themes/                   # Contains MUI design system files
    - utils/                    # Utility functions and helper modules
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
[TS-url]: https://www.typescriptlang.org/
[Live-url]: https://react-store.enesesen.com/
[Husky-url]: https://typicode.github.io/husky/
[Conventional-Commit-url]: https://www.conventionalcommits.org/
[Commitlint-url]: https://commitlint.js.org/#/
[ESLint-url]: https://eslint.org/
[Prettier-url]: https://prettier.io/
[Redux-url]: https://redux.js.org/
[Commitizen-url]: https://commitizen-tools.github.io/commitizen/
[Lint-Staged-url]: https://github.com/okonet/lint-staged#readme
[million-url]: https://github.com/aidenybai/million
[vite-pwa-url]: https://github.com/vite-pwa/vite-plugin-pwa
[react-router-url]: https://github.com/remix-run/react-router
[react-helmet-async-url]: https://github.com/staylor/react-helmet-async
