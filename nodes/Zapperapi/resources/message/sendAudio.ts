import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendAudio = {
	operation: ['sendAudio'],
	resource: ['message'],
};

export const messageSendAudioDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendAudio,
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
		displayName: 'Audio',
		name: 'audio',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendAudio,
		},
		default: '',
		description:
			'Áudio a ser encaminhado. Pode ser nos formatos mp3, mp4, wav, ogg. Pode ser utilizado uma URL (http/https), arquivo no formato base64 ou uma URL base64.',
		routing: {
			send: {
				type: 'body',
				property: 'audio',
			},
		},
	},
	{
		displayName: 'Expiration',
		name: 'expiration',
		type: 'options',
		displayOptions: {
			show: showOnlyForMessageSendAudio,
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
