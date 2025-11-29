import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactCheckNumbers = {
	operation: ['checkNumbers'],
	resource: ['contact'],
};

export const contactCheckNumbersDescription: INodeProperties[] = [
	{
		displayName: 'Numbers',
		name: 'numbers',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForContactCheckNumbers,
		},
		default: '',
		description: 'Lista de números a ser checada. Use formato JSON array, ex: ["5511912345678", "5511987654321"].',
		routing: {
			send: {
				type: 'body',
				property: 'numbers',
			},
		},
	},
];
