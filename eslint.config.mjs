/* eslint-disable no-redeclare */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	{
		ignores: [
			'.cache',
			'.git',
			'.husky',
			'.yarn',
			'*/dist',
			'**/node_modules/*',
			'**/dist',
			'**/dev-dist',
			'**/coverage',
			'**/.eslintcache',
			'**/public',
			'**/*.css',
			'**/package-lock.json',
			'**/pnpm-lock.yaml',
			'**/pnpm-workspace.yaml',
			'**/.DS_Store',
		],
	},
	...fixupConfigRules(
		compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:react/recommended',
			'plugin:react-hooks/recommended',
			'plugin:react/jsx-runtime',
			'plugin:prettier/recommended'
		)
	),
	{
		plugins: {
			react: fixupPluginRules(react),
			'react-hooks': fixupPluginRules(reactHooks),
			prettier: fixupPluginRules(prettier),
			'@typescript-eslint': fixupPluginRules(typescriptEslint),
		},

		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'commonjs',

			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				version: 'detect',
			},
		},

		rules: {},
	},
]
