import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendText = {
	operation: ['sendText'],
	resource: ['message'],
};

export const messageSendTextDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendText,
		},
		default: '',
		description: 'Phone number, LID, group ID or newsletter/channel ID. If a phone number is provided, it must be sent in full format, with country code, and the `+` prefix is not required.',
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
			show: showOnlyForMessageSendText,
		},
		default: '',
		description: 'Texto da mensagem a ser enviada',
		routing: {
			send: {
				type: 'body',
				property: 'message',
			},
		},
	},
	{
		displayName: 'Mentions',
		name: 'mentions',
		type: 'string',
		displayOptions: {
			show: showOnlyForMessageSendText,
		},
		default: '[]',
		description:
			'Lista de números que deseja mencionar na mensagem. Campo opcional e só tem efeito em envio de mensagens para grupos. Use formato JSON array, ex: ["5511912345678", "5511987654321"]',
		routing: {
			send: {
				type: 'body',
				property: 'mentions',
				value: '={{!$value || (typeof $value === "string" && !$value.trim()) ? [] : (typeof $value === "string" ? JSON.parse($value) : (Array.isArray($value) ? $value : []))}}',
			},
		},
	},
	{
		displayName: 'Mention Everyone',
		name: 'mentionsEveryone',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForMessageSendText,
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
		displayName: 'Split Message',
		name: 'splitMessage',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForMessageSendText,
		},
		default: false,
		description:
			'Whether to split the message into smaller messages. The division is based on the line breaks of the original message.',
		routing: {
			send: {
				type: 'body',
				property: 'splitMessage',
			},
		},
	},
	{
		displayName: 'Process Image Link',
		name: 'processImageLink',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForMessageSendText,
		},
		default: false,
		description:
			'Whether to process the image links in the message as images. If the message contains an image link, the content of the link will be sent as an image immediately after the text message.',
		routing: {
			send: {
				type: 'body',
				property: 'processImageLink',
			},
		},
	},
	{
		displayName: 'Auto Caption',
		name: 'autoCaption',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForMessageSendText,
		},
		default: false,
		description: 'Whether to use the text of the message as a caption for the image if processImageLink is active',
		routing: {
			send: {
				type: 'body',
				property: 'autoCaption',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendText,
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
