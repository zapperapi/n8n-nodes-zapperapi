import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChatMute = {
	operation: ['mute'],
	resource: ['chat'],
};

export const chatMuteDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForChatMute,
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
		displayName: 'Time',
		name: 'time',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForChatMute,
		},
		options: [
			{ name: '8 Hours', value: '8h' },
			{ name: '7 Days', value: '7d' },
			{ name: 'Remove (Unmute)', value: 'remove' },
		],
		default: '8h',
		description:
			'Silencia uma conversa por 8 horas (`8h`) ou 7 dias (`7d`). Se o campo for "remove", a conversa será desilenciada.',
		routing: {
			send: {
				type: 'body',
				property: 'time',
			},
		},
	},
];
