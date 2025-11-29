import type { INodeProperties } from 'n8n-workflow';
import { groupCreateDescription } from './create';
import { groupListDescription } from './list';
import { groupGetDescription } from './get';
import { groupUpdateDescription } from './update';
import { groupUpdateParticipantsDescription } from './updateParticipants';
import { groupGetInviteCodeDescription } from './getInviteCode';

const showOnlyForGroup = {
	resource: ['group'],
};

export const groupDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForGroup,
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a group',
				description: 'Create a WhatsApp group',
				routing: {
					request: {
						method: 'POST',
						url: '/groups',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a group',
				description: 'Get group information',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}',
					},
				},
			},
			{
				name: 'Get Invite Code',
				value: 'getInviteCode',
				action: 'Get group invite code',
				description: 'Get the invite code for a group',
				routing: {
					request: {
						method: 'GET',
						url: '=/groups/{{$parameter["groupId"]}}/invite-code',
					},
				},
			},
			{
				name: 'List',
				value: 'list',
				action: 'List groups',
				description: 'List all groups',
				routing: {
					request: {
						method: 'GET',
						url: '/groups',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a group',
				description: 'Update group information',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/groups/{{$parameter["groupId"]}}',
					},
				},
			},
			{
				name: 'Update Participants',
				value: 'updateParticipants',
				action: 'Update group participants',
				description: 'Add, remove, promote or demote group participants',
				routing: {
					request: {
						method: 'PATCH',
						url: '=/groups/{{$parameter["groupId"]}}/participants',
					},
				},
			},
		],
		default: 'list',
	},
	...groupCreateDescription,
	...groupListDescription,
	...groupGetDescription,
	...groupUpdateDescription,
	...groupUpdateParticipantsDescription,
	...groupGetInviteCodeDescription,
];
