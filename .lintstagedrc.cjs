/**
 * @file Lint Staged Configuration
 * @see https://github.com/okonet/lint-staged
 */

/* eslint-disable import/no-unused-modules */
const runPrettier = 'prettier . --write --cache --cache-strategy metadata'
const runEslint = 'eslint --cache --fix --max-warnings=-1'

/** @type {import('lint-staged').Config} */
module.exports = {
	'*.{cjs,mjs,js,jsx,ts,tsx}': [runEslint, runPrettier],
	'*.{json,html,css,scss,yaml,yml,md}': [runPrettier],
}
