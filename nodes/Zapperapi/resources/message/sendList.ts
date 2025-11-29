import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendList = {
	operation: ['sendList'],
	resource: ['message'],
};

export const messageSendListDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '',
		description: 'ID do contato (número ou lid). Para números de telefone, pode ser enviado com ou sem o sufixo `@s.whatsapp.net`. Para lids, sempre use o sufixo `@lid`',
		routing: {
			send: {
				type: 'body',
				property: 'jid',
			},
		},
	},
	{
		displayName: 'Button Text',
		name: 'buttonText',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '',
		description: 'Texto do botão de acesso a lista',
		routing: {
			send: {
				type: 'body',
				property: 'buttonText',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '',
		description: 'Descrição da mensagem',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Sections (JSON)',
		name: 'sections',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '[]',
		description:
			'Array de seções. Cada seção tem: title (opcional), rows (obrigatório). Cada row tem: title, description (opcional), rowId.',
		routing: {
			send: {
				type: 'body',
				property: 'sections',
				value: '={{!$value || (typeof $value === "string" && !$value.trim()) ? [] : (typeof $value === "string" ? JSON.parse($value) : (Array.isArray($value) ? $value : []))}}',
			},
		},
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '',
		description: 'Título da mensagem',
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendList,
		},
		default: '',
		description: 'Rodapé da mensagem',
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendList,
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
