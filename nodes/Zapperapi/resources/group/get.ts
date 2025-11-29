import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupGet = {
	operation: ['get'],
	resource: ['group'],
};

export const groupGetDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupGet,
		},
		default: '',
		description: 'ID do grupo, com ou sem o sufixo `@g.us`',
		routing: {
			request: {
				url: '=/groups/{{$value}}',
			},
		},
	},
];
