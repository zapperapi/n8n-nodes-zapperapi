import type { INodeProperties } from 'n8n-workflow';

const showOnlyForConnectionGet = {
	operation: ['get'],
	resource: ['connection'],
};

export const connectionGetDescription: INodeProperties[] = [
	{
		displayName: 'Connection ID',
		name: 'connectionId',
		type: 'string',
		displayOptions: { show: showOnlyForConnectionGet },
		default: '',
		description: "The user's ID to retrieve",
	},
];
