import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendContact = {
	operation: ['sendContact'],
	resource: ['message'],
};

export const messageSendContactDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendContact,
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
		displayName: 'VCARD (JSON)',
		name: 'vcard',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendContact,
		},
		default: '{}',
		description:
			'Objeto vCard do contato. Use formato JSON. O campo "fn" (nome completo) é obrigatório.',
		routing: {
			send: {
				type: 'body',
				property: 'vcard',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendContact,
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
