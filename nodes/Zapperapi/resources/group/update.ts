import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupUpdate = {
	operation: ['update'],
	resource: ['group'],
};

export const groupUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: '',
		description: 'ID do grupo, com ou sem o sufixo `@g.us`',
		routing: {
			request: {
				url: '=/groups/{{$value}}',
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: '',
		description: 'Novo nome do grupo',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: '',
		description: 'Nova descrição do grupo',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
	{
		displayName: 'Display Picture',
		name: 'displayPicture',
		type: 'string',
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: '',
		description:
			'Nova imagem de perfil do grupo. URL, base64 ou Data URI. Use JSON null para remover a imagem atual.',
		routing: {
			send: {
				type: 'body',
				property: 'displayPicture',
			},
		},
	},
	{
		displayName: 'Announcement',
		name: 'announcement',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: false,
		description: 'Whether the group only allows posts from admins',
		routing: {
			send: {
				type: 'body',
				property: 'announcement',
			},
		},
	},
	{
		displayName: 'Locked',
		name: 'locked',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForGroupUpdate,
		},
		default: false,
		description: 'Whether the group is locked for editing and can only be edited by admins',
		routing: {
			send: {
				type: 'body',
				property: 'locked',
			},
		},
	},
];
