import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupCreate = {
	operation: ['create'],
	resource: ['group'],
};

export const groupCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupCreate,
		},
		default: '',
		description: 'Nome do grupo',
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
			show: showOnlyForGroupCreate,
		},
		default: '',
		description: 'Descrição do grupo',
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
			show: showOnlyForGroupCreate,
		},
		default: '',
		description: 'Imagem de perfil do grupo, podendo ser uma URL, o arquivo no formato base64 ou uma Data URI no formato base64',
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
			show: showOnlyForGroupCreate,
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
			show: showOnlyForGroupCreate,
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
	{
		displayName: 'Participants',
		name: 'participants',
		type: 'string',
		displayOptions: {
			show: showOnlyForGroupCreate,
		},
		default: '',
		description: 'Lista inicial de participantes do grupo. Use formato JSON array, ex: ["5511912345678@s.whatsapp.net", "5511987654321@s.whatsapp.net"].',
		routing: {
			send: {
				type: 'body',
				property: 'participants',
			},
		},
	},
];
