import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageDelete = {
	operation: ['delete'],
	resource: ['message'],
};

export const messageDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Message Key (JSON)',
		name: 'key',
		type: 'json',
		required: true,
		displayOptions: {
			show: showOnlyForMessageDelete,
		},
		default: '{}',
		description: 'Chave da mensagem, deve ser exatamente como recebida pelo webhook. Use formato JSON com os campos: remoteJid, fromMe, ID, participant (opcional).',
		routing: {
			send: {
				type: 'body',
				property: 'key',
			},
		},
	},
];
