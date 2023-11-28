/** @type {import('eslint').Linter.Config} */
module.exports = {
	root: true,
	env: {
		node: true,
		browser: true, // This is the application's env (not ESList's env)
		es2020: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/jsx-runtime',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
	ignorePatterns: ['/.cache', '/.git', '/.husky', '/.yarn', '/*/dist'],
	rules: {},
}
