import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProfileUpdateName = {
	operation: ['updateName'],
	resource: ['profile'],
};

export const profileUpdateNameDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForProfileUpdateName,
		},
		default: '',
		description: 'Novo nome do perfil',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];
