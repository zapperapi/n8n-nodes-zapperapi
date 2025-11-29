import type { INodeProperties } from 'n8n-workflow';

const showOnlyForChatPin = {
	operation: ['pin'],
	resource: ['chat'],
};

export const chatPinDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForChatPin,
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
		displayName: 'Pin',
		name: 'pin',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: showOnlyForChatPin,
		},
		default: true,
		description: 'Whether to pin or unpin the chat. If true, pins the chat. If false, unpins the chat.',
		routing: {
			send: {
				type: 'body',
				property: 'pin',
			},
		},
	},
];
