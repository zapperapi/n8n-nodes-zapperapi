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
		name: 'participants',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdateParticipants,
		},
		default: '',
		description: 'Lista de participantes que deseja alterar. Use formato JSON array, ex: ["5511912345678@s.whatsapp.net", "5511987654321@s.whatsapp.net"].',
		routing: {
			send: {
				type: 'body',
				property: 'participants',
			},
		},
	},
];
