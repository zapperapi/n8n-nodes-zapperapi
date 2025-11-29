import type { INodeProperties } from 'n8n-workflow';

const showOnlyForContactCheckNumbers = {
	operation: ['checkNumbers'],
	resource: ['contact'],
};

export const contactCheckNumbersDescription: INodeProperties[] = [
	{
		displayName: 'Numbers',
		name: 'numbersUi',
		placeholder: 'Add Number',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: showOnlyForContactCheckNumbers,
		},
		default: {},
		description: 'Lista de números a ser checada',
		options: [
			{
				name: 'numberValues',
				displayName: 'Number',
				values: [
					{
						displayName: 'Phone Number',
						name: 'number',
						type: 'string',
						required: true,
						default: '',
						description: 'Número de telefone no formato completo, com código do país (ex: 5511912345678)',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'numbers',
				value: '={{$value.numberValues ? $value.numberValues.map(item => item.number).filter(num => num) : []}}',
			},
		},
	},
];
