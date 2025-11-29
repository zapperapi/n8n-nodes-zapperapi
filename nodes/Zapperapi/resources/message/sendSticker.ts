import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendSticker = {
	operation: ['sendSticker'],
	resource: ['message'],
};

export const messageSendStickerDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendSticker,
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
		displayName: 'Sticker',
		name: 'sticker',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendSticker,
		},
		default: '',
		description:
			'Sticker a ser encaminhado. Pode ser utilizado uma URL (http/https) ou arquivo no formato base64.',
		routing: {
			send: {
				type: 'body',
				property: 'sticker',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendSticker,
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
