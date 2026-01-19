import type { INodeProperties } from 'n8n-workflow';

const showOnlyForMessageSendTemplate = {
	operation: ['sendTemplate'],
	resource: ['message'],
};

export const messageSendTemplateDescription: INodeProperties[] = [
	{
		displayName: 'JID',
		name: 'jid',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendTemplate,
		},
		default: '',
		description: 'Número do telefone, com ou sem o sufixo @s.whatsapp.net. Não é permitido o uso de @lid na Cloud API.',
		routing: {
			send: {
				type: 'body',
				property: 'jid',
			},
		},
	},
	{
		displayName: 'Template Name',
		name: 'templateName',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendTemplate,
		},
		default: '',
		description: 'Nome do template',
		routing: {
			send: {
				type: 'body',
				property: 'templateName',
			},
		},
	},
	{
		displayName: 'Language',
		name: 'language',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendTemplate,
		},
		default: 'pt_BR',
		description: 'Código do idioma do template',
		routing: {
			send: {
				type: 'body',
				property: 'language',
			},
		},
	},
	{
		displayName: 'Components',
		name: 'componentsUi',
		placeholder: 'Add Component',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: showOnlyForMessageSendTemplate,
		},
		default: {},
		description: 'Componentes do template',
		options: [
			{
				name: 'componentValues',
				displayName: 'Component',
				values: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						options: [
							{ name: 'Header', value: 'header' },
							{ name: 'Body', value: 'body' },
							{ name: 'Footer', value: 'footer' },
							{ name: 'Button', value: 'button' },
						],
						required: true,
						default: 'body',
						description: 'Tipo do componente onde o parâmetro será inserido',
					},
					{
						displayName: 'Parameters',
						name: 'parametersUi',
						placeholder: 'Add Parameter',
						type: 'fixedCollection',
						typeOptions: {
							multipleValues: true,
						},
						default: {},
						description: 'Parâmetros do componente',
						options: [
							{
								name: 'parameterValues',
								displayName: 'Parameter',
								values: [
									{
										displayName: 'Type',
										name: 'type',
										type: 'string',
										required: true,
										default: 'text',
										description: 'Tipo do parâmetro',
									},
									{
										displayName: 'Parameter Name',
										name: 'parameter_name',
										type: 'string',
										default: '',
										description: 'Nome do parâmetro (em caso de parâmetro nomeado). Para parâmetros posicionais, não é necessário informar.',
									},
									{
										displayName: 'Text',
										name: 'text',
										type: 'string',
										required: true,
										default: '',
										description: 'Texto do parâmetro',
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
				property: 'components',
				value: '={{$value.componentValues ? $value.componentValues.map(comp => ({ type: comp.type, parameters: comp.parametersUi?.parameterValues ? comp.parametersUi.parameterValues.map(param => ({ type: param.type, parameter_name: param.parameter_name || undefined, text: param.text })) : [] })) : []}}',
			},
		},
	},
];
