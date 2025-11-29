import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendLocation = {
	operation: ['sendLocation'],
	resource: ['message'],
};

export const messageSendLocationDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendLocation,
		},
		default: '',
		description: 'Número de telefone, LID ou ID do grupo. Em caso de número de telefone, o mesmo deve ser enviado no formato completo, com código do país.',
		routing: {
			send: {
				type: 'body',
				property: 'jid',
			},
		},
	},
	{
		displayName: 'Location (JSON)',
		name: 'location',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendLocation,
		},
		default: '{"lat": 0, "lon": 0}',
		description: 'Objeto com latitude (lat) e longitude (lon) da localização',
		routing: {
			send: {
				type: 'body',
				property: 'location',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendLocation,
		},
		options: [
			{ name: 'None', value: 'none' },
			{ name: '24 Hours', value: '24h' },
			{ name: '7 Days', value: '7d' },
			{ name: '90 Days', value: '90d' },
		],
		default: 'none',
		description: 'Tempo de desaparecimento da mensagem, podendo ser desligado (padrão), 24 horas, 7 dias ou 90 dias',
		routing: {
			send: {
				type: 'body',
				property: 'expiration',
			},
		},
	},
];
