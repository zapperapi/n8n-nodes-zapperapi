import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupGetInviteCode = {
	operation: ['getInviteCode'],
	resource: ['group'],
};

export const groupGetInviteCodeDescription: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForGroupGetInviteCode,
		},
		default: '',
		description: 'ID do grupo, com ou sem o sufixo `@g.us`',
		routing: {
			request: {
				url: '=/groups/{{$value}}/invite-code',
			},
		},
	},
];
