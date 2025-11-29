import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupUpdateParticipants = {
	operation: ['updateParticipants'],
	resource: ['group'],
};

export const groupUpdateParticipantsDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdateParticipants,
		},
		default: '',
		description: 'ID do grupo, com ou sem o sufixo `@g.us`',
		routing: {
			request: {
				url: '=/groups/{{$value}}/participants',
			},
		},
	},
	{
		displayName: 'Action',
		name: 'action',
		type: 'options',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdateParticipants,
		},
		options: [
			{ name: 'Add', value: 'add' },
			{ name: 'Remove', value: 'remove' },
			{ name: 'Promote to Admin', value: 'promote' },
			{ name: 'Demote From Admin', value: 'demote' },
		],
		default: 'add',
		description:
			'Ação que deseja realizar nos participantes (add: adicionar - remove: remover - promote: promover a admin - demote: revogar admin)',
		routing: {
			send: {
				type: 'body',
				property: 'action',
			},
		},
	},
	{
		displayName: 'Participants',
		name: 'participantsUi',
		placeholder: 'Add Participant',
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdateParticipants,
		},
		default: {},
		description: 'Lista de participantes que deseja alterar',
		options: [
			{
				name: 'participantValues',
				displayName: 'Participant',
				values: [
					{
						displayName: 'JID',
						name: 'jid',
						type: 'string',
						required: true,
						default: '',
						description: 'JID do participante (ex: 5511912345678@s.whatsapp.net)',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'participants',
				value: '={{$value.participantValues ? $value.participantValues.map(item => item.jid).filter(jid => jid) : []}}',
			},
		},
	},
];
