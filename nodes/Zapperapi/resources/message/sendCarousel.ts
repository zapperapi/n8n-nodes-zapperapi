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
		displayName: 'Carousel',
		name: 'carouselUi',
		placeholder: 'Add Card',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendCarousel,
		},
		default: {},
		description: 'Array de cartões do carousel',
		options: [
			{
				name: 'cardValues',
				displayName: 'Card',
				values: [
					{
						displayName: 'Text',
						name: 'text',
						type: 'string',
						required: true,
						default: '',
						description: 'Texto do cartão',
					},
					{
						displayName: 'Image',
						name: 'image',
						type: 'string',
						required: true,
						default: '',
						description: 'URL da imagem do cartão',
					},
					{
						displayName: 'Buttons',
						name: 'buttonsUi',
						placeholder: 'Add Button',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Botões do cartão',
						options: [
							{
								name: 'buttonValues',
								displayName: 'Button',
								values: [
							{
								displayName: 'Copy Code',
								name: 'copyCode',
								type: 'string',
								default: '',
								description: 'Valor a ser copiado ao clicar no botão (tipo copy)',
							},
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
								description: 'Identificador	único do botão',
							},
							{
								displayName: 'Phone Number',
								name: 'phoneNumber',
								type: 'string',
								default: '',
								description: 'Número de telefone a ser chamado ao clicar no botão (tipo call)',
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
								displayName: 'URL',
								name: 'url',
								type: 'string',
								default: '',
								description: 'URL a ser acessada ao clicar no botão (tipo URL)',
							},
					],
							},
						],
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'carousel',
				value: '={{$value.cardValues ? $value.cardValues.map(card => ({ text: card.text, image: card.image, buttons: card.buttonsUi?.buttonValues ? card.buttonsUi.buttonValues.map(btn => ({ type: btn.type, displayText: btn.displayText, id: btn.id, url: btn.url || undefined, copyCode: btn.copyCode || undefined, phoneNumber: btn.phoneNumber || undefined })) : [] })) : []}}',
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
