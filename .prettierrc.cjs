/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */

/**
 * @file Prettier Configuration
 * @see https://prettier.io/docs/en/configuration.html
 * @see https://prettier.io/docs/en/options.html
 * @see https://github.com/rx-ts/prettier/tree/master/packages/sh
 */

/** @type {PrettierConfig | SortImportsConfig | TailwindConfig} */
module.exports = {
	printWidth: 120,
	tabWidth: 2,
	useTabs: true,
	semi: false,
	singleQuote: true,
	quoteProps: 'as-needed',
	jsxSingleQuote: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	endOfLine: 'lf',
	plugins: [
		// for sorting imports
		'@ianvs/prettier-plugin-sort-imports',
		// for sort fields in package.json
		'prettier-plugin-pkg',
		// for prettifying shellscript, Dockerfile, properties, gitignore, dotenv
		'prettier-plugin-sh',
		'prettier-plugin-jsdoc',
	],
	importOrder: [
		'<TYPES>',
		'<TYPES>^[.]',
		'^@/types/(.*)$',
		'^@/features/(.*)/types/(.*)$',
		'',
		// React and Next
		'^(react/(.*)$)|^(react$)',
		'^(next/(.*)$)|^(next$)',
		// Anything not matched in other groups.
		'<THIRD_PARTY_MODULES>',
		'',
		// Things that start with `@` or digit or underscore.
		'^(@/|\\d|~/)',
		// Anything that starts with a dot, or multiple dots, and doesn't have the "other files" extensions.
		'^(?=\\.+)(.(?!\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)))+$',
		// Other files with extensions.
		'^.+\\.(graphql|css|png|svg|jpe?g|webp|avif|wasm|mp4|webm)$',
	],
	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],

	overrides: [
		{
			files: '*.json',
			options: {
				singleQuote: false,
			},
		},
		{
			files: '*.{ts,tsx}',
			options: {
				tsdoc: true,
			},
		},
		{
			files: '*.{yml,yaml}',
			options: {
				useTabs: false,
			},
		},
	],
}
