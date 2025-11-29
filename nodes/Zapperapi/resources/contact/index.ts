import type { INodeProperties } from 'n8n-workflow';
import { contactCheckNumbersDescription } from './checkNumbers';

const showOnlyForContact = {
	resource: ['contact'],
};

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForContact,
		},
		options: [
			{
				name: 'Check Numbers',
				value: 'checkNumbers',
				action: 'Check whats app numbers',
				description: 'Verify if phone numbers are registered on WhatsApp',
				routing: {
					request: {
						method: 'POST',
						url: '/contacts/check-numbers',
					},
				},
			},
		],
		default: 'checkNumbers',
	},
	...contactCheckNumbersDescription,
];
