import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProfileUpdateStatus = {
	operation: ['updateStatus'],
	resource: ['profile'],
};

export const profileUpdateStatusDescription: INodeProperties[] = [
	{
		displayName: 'Status',
		name: 'status',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForProfileUpdateStatus,
		},
		default: '',
		description: 'Texto do status do perfil',
		routing: {
			send: {
				type: 'body',
				property: 'status',
			},
		},
	},
];
