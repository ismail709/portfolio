export default {
	title: 'Lab',
	name: 'lab',
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
			title: 'Icon',
			name: 'icon',
			type: 'reference',
			to: [
				{
					type: 'icon',
				},
			],
		},
		{
			name: 'body',
			type: 'array',
			of: [
				{
					type: 'block',
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
