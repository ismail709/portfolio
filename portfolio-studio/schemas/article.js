import { JustifyRender } from './justify-text';

export default {
	title: 'Article',
	name: 'article',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
		},
		{
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
			},
		},
		{
			title: 'Summary',
			name: 'summary',
			type: 'text',
		},
		{
			name: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'H1', value: 'h1' },
						{ title: 'H2', value: 'h2' },
						{ title: 'H3', value: 'h3' },
						{ title: 'Quote', value: 'blockquote' },
						{
							title: 'Justify',
							value: 'justified',
							blockEditor: {
								render: JustifyRender,
							},
						},
					],
				},
				{
					type: 'image',
					options: {
						hotspot: true,
					},
				},
			],
		},
	],
};
