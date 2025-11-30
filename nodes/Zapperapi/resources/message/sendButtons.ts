import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendButtons = {
	operation: ['sendButtons'],
	resource: ['message'],
};

export const messageSendButtonsDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendButtons,
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
		displayName: 'Title',
		name: 'title',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
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
		displayName: 'Body',
		name: 'body',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
		},
		default: '',
		description: 'Texto do corpo da mensagem',
		routing: {
			send: {
				type: 'body',
				property: 'body',
			},
		},
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
		},
		default: '',
		description: 'Texto do rodapé da mensagem',
		routing: {
			send: {
				type: 'body',
				property: 'footer',
			},
		},
	},
	{
		displayName: 'Buttons',
		name: 'buttonsUi',
		placeholder: 'Add Button',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendButtons,
		},
		default: {},
		description: 'Array de botões. Cada botão deve ter: type (URL/copy/call/reply), displayText, ID, e campos adicionais conforme o tipo.',
		options: [
			{
				name: 'buttonValues',
				displayName: 'Button',
				// eslint-disable-next-line n8n-nodes-base/node-param-fixed-collection-type-unsorted-items
				values: [
					{
						displayName: 'Display Text',
						name: 'displayText',
						type: 'string',
							required:	true,
						default: '',
						description: 'Texto de exibição do botão',
					},
					{
						displayName: 'ID',
						name: 'id',
						type: 'string',
							required:	true,
						default: '',
						description: 'Identificador\túnico do botão',
					},
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
							required:	true,
						options: [
							{
								name: 'URL',
								value: 'url',
							},
							{
								name: 'Copy',
								value: 'copy',
							},
							{
								name: 'Call',
								value: 'call',
							},
							{
								name: 'Reply',
								value: 'reply',
							},
						],
						default: 'reply',
						description: 'Tipo do botão',
					},
					{
						displayName: 'Copy Code',
						name: 'copyCode',
						type: 'string',
						displayOptions: {
							show: {
								type: ['copy'],
							},
						},
						default: '',
						description: 'Valor a ser copiado ao clicar no botão (tipo copy)',
					},
					{
						displayName: 'Phone Number',
						name: 'phoneNumber',
						type: 'string',
						displayOptions: {
							show: {
								type: ['call'],
							},
						},
						default: '',
						description: 'Número de telefone a ser chamado ao clicar no botão (tipo call)',
					},
					{
						displayName: 'URL',
						name: 'url',
						type: 'string',
						displayOptions: {
							show: {
								type: ['url'],
							},
						},
						default: '',
						description: 'URL a ser acessada ao clicar no botão (tipo URL)',
					},
			],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'buttons',
				value: '={{$value.buttonValues || []}}',
			},
		},
	},
	{
		displayName: 'Media',
		name: 'media',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
		},
		default: '',
		description: 'URL da mídia a ser encaminhada junto com a mensagem (tipo URL, copy, call)',
		routing: {
			send: {
				type: 'body',
				property: 'media',
			},
		},
	},
	{
		displayName: 'Media Type',
		name: 'mediaType',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
		},
		options: [
			{ name: 'Image', value: 'image' },
			{ name: 'Video', value: 'video' },
		],
		default: 'image',
		description: 'Tipo de mídia a ser encaminhada junto com a mensagem (`image` ou `video`)',
		routing: {
			send: {
				type: 'body',
				property: 'mediaType',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendButtons,
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
