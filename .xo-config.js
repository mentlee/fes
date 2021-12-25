module.exports = {
	space: 2,
	prettier: true,
	rules: {
		/**
		 * No need to use extensions in import
		 */
		'import/extensions': 'off',
		/**
		 * Allow only camelCase and pascalCase filenames
		 */
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		/**
		 * Disable conversion commonJS to ESM
		 */
		'unicorn/prefer-module': 'off',
		/**
		 * Disable variables name check
		 */
		'@typescript-eslint/naming-convention': 'off',
		/**
		 * Enforce import order
		 */
		'import/order': [
			'error',
			{
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
					}
				],
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
				],
			},
		],
	}
};