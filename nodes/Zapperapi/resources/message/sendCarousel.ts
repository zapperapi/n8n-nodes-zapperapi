import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendCarousel = {
	operation: ['sendCarousel'],
	resource: ['message'],
};

export const messageSendCarouselDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendCarousel,
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
		displayName: 'Message',
		name: 'message',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendCarousel,
		},
		default: '',
		description: 'Mensagem do carousel',
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Carousel (JSON)',
		name: 'carousel',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendCarousel,
		},
		default: '[]',
		description: 'Array de cartões do carousel. Cada cartão deve ter: text, image, buttons. Cada botão deve ter: ID, displayText, type (URL/copy/call/reply) e campos adicionais conforme o tipo.',
		routing: {
			send: {
				type: 'body',
				property: 'carousel',
				value: '={{!$value || (typeof $value === "string" && !$value.trim()) ? [] : (typeof $value === "string" ? JSON.parse($value) : (Array.isArray($value) ? $value : []))}}',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendCarousel,
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
