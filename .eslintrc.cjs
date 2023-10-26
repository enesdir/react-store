/** @type {import('eslint').Linter.Config} */
module.exports = {
	env: {
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
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
	ignorePatterns: ['/.cache', '/.git', '/.husky', '/.yarn', '/*/dist'],
	rules: {
		'react-refresh/only-export-components': 'off',
	},
}
