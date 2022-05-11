export default {
	title: 'Project',
	name: 'project',
	type: 'document',
	fields: [
		{
			title: 'Title',
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
			title: 'Screenshots',
			name: 'screenshots',
			type: 'array',
			of: [
				{
					type: 'image',
				},
			],
		},
		{
			title: 'Demo',
			name: 'demo',
			type: 'url',
		},
		{
			name: 'showInHomePage',
			title: 'Show in homepage',
			type: 'boolean',
			initialValue: false,
		},
	],
};
