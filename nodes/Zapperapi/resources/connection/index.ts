import type { INodeProperties } from 'n8n-workflow';
import { connectionGetDescription } from './get';

const showOnlyForConnections = {
	resource: ['connection'],
};

export const connectionDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForConnections,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get connection status',
				description: 'Get the connection status of an instance',
				routing: {
					request: {
						method: 'GET',
						url: '=/connection',
					},
				},
			},
		],
		default: 'get',
	},
	...connectionGetDescription,
];
