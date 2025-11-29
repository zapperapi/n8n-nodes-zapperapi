import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageReact = {
	operation: ['react'],
	resource: ['message'],
};

export const messageReactDescription: INodeProperties[] = [
	{
		displayName: 'Remote JID',
		name: 'remoteJid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageReact,
		},
		default: '',
		description: 'ID da conversa onde ocorreu a mensagem. Pode ser um número de WhatsApp ou um grupo.',
		routing: {
			send: {
				type: 'body',
				property: 'remoteJid',
			},
		},
	},
	{
		displayName: 'Message ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageReact,
		},
		default: '',
		description: 'ID da mensagem que deseja reagir',
		routing: {
			send: {
				type: 'body',
				property: 'id',
			},
		},
	},
	{
		displayName: 'Emoji',
		name: 'text',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageReact,
		},
		default: '',
		description: 'Emoji da reação. Qualquer outro tipo de caracter que não seja um emoji não irá funcionar.',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Participant',
		name: 'participant',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageReact,
		},
		default: '',
		description: 'ID do participante que enviou a mensagem. Necessário somente para grupos.',
		routing: {
			send: {
				type: 'body',
				property: 'participant',
			},
		},
	},
];
