import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendMedia = {
	operation: ['sendMedia'],
	resource: ['message'],
};

export const messageSendMediaDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendMedia,
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
		displayName: 'Media Type',
		name: 'mediaType',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendMedia,
		},
		options: [
			{ name: 'Image', value: 'image' },
			{ name: 'Video', value: 'video' },
			{ name: 'Audio', value: 'audio' },
			{ name: 'Document', value: 'document' },
		],
		default: 'image',
		description: 'Tipo de mídia a ser enviada',
		routing: {
			send: {
				type: 'body',
				property: 'mediaType',
			},
		},
	},
	{
		displayName: 'Media',
		name: 'media',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendMedia,
		},
		default: '',
		description:
			'Mídia a ser encaminhada. Pode ser utilizado uma URL (http/https), arquivo no formato base64 ou uma URL base64.',
		routing: {
			send: {
				type: 'body',
				property: 'media',
			},
		},
	},
	{
		displayName: 'Caption',
		name: 'caption',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendMedia,
		},
		default: '',
		description: 'Legenda da mídia. Não se aplica ao tipo de mídia `audio` e ao tipo de mídia `video` quando `videoNote` está ativo.',
		routing: {
			send: {
				type: 'body',
				property: 'caption',
			},
		},
	},
	{
		displayName: 'Mimetype',
		name: 'mimetype',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForMessageSendMedia,
				mediaType: ['document'],
			},
		},
		default: '',
		description: 'Mimetype do arquivo enviado (ex: image/png). Aplicável somente para o tipo de mídia `document`.',
		routing: {
			send: {
				type: 'body',
				property: 'mimetype',
			},
		},
	},
	{
		displayName: 'Filename',
		name: 'filename',
		type: 'string',
		displayOptions: {
			show: {
				...showOnlyForMessageSendMedia,
				mediaType: ['document'],
			},
		},
		default: '',
		description: 'Nome do arquivo. Aplicável somente para mídias do tipo `document`.',
		routing: {
			send: {
				type: 'body',
				property: 'filename',
			},
		},
	},
	{
		displayName: 'Video Note',
		name: 'videoNote',
		type: 'boolean',
		displayOptions: {
			show: {
				...showOnlyForMessageSendMedia,
				mediaType: ['video'],
			},
		},
		default: false,
		description: 'Whether to send the video as a note (in a circle)',
		routing: {
			send: {
				type: 'body',
				property: 'videoNote',
			},
		},
	},
	{
		displayName: 'Mentions',
		name: 'mentionsUi',
		placeholder: 'Add Mention',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: showOnlyForMessageSendMedia,
		},
		default: {},
		description:
			'Lista de números que deseja mencionar na mensagem. Campo opcional e só tem efeito em envio de mensagens para grupos.',
		options: [
			{
				name: 'mentionValues',
				displayName: 'Mention',
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
				property: 'mentions',
				value: '={{$value.mentionValues ? $value.mentionValues.map(item => item.number).filter(num => num) : []}}',
			},
		},
	},
	{
		displayName: 'Mention Everyone',
		name: 'mentionsEveryone',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForMessageSendMedia,
		},
		default: false,
		description:
			'Whether to mention all participants in the group. Use with caution. If this option is active, the `mentions` parameter will be ignored.',
		routing: {
			send: {
				type: 'body',
				property: 'mentionsEveryone',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendMedia,
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
