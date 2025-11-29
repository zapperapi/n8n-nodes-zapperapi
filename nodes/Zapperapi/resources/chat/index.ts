import type { INodeProperties } from 'n8n-workflow';
import { chatArchiveDescription } from './archive';
import { chatUnarchiveDescription } from './unarchive';
import { chatMuteDescription } from './mute';
import { chatPinDescription } from './pin';
import { chatDeleteDescription } from './delete';

const showOnlyForChat = {
	resource: ['chat'],
};

export const chatDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForChat,
		},
		options: [
			{
				name: 'Archive',
				value: 'archive',
				action: 'Archive a chat',
				description: 'Archive a conversation',
				routing: {
					request: {
						method: 'PATCH',
						url: '/chats/archive',
					},
				},
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a chat',
				description: 'Remove a conversation',
				routing: {
					request: {
						method: 'POST',
						url: '/chats/delete',
					},
				},
			},
			{
				name: 'Mute',
				value: 'mute',
				action: 'Mute or unmute a chat',
				description: 'Mute or unmute a conversation',
				routing: {
					request: {
						method: 'PATCH',
						url: '/chats/mute',
					},
				},
			},
			{
				name: 'Pin',
				value: 'pin',
				action: 'Pin or unpin a chat',
				description: 'Pin or unpin a conversation',
				routing: {
					request: {
						method: 'PATCH',
						url: '/chats/pin',
					},
				},
			},
			{
				name: 'Unarchive',
				value: 'unarchive',
				action: 'Unarchive a chat',
				description: 'Unarchive a conversation',
				routing: {
					request: {
						method: 'PATCH',
						url: '/chats/unarchive',
					},
				},
			},
		],
		default: 'archive',
	},
	...chatArchiveDescription,
	...chatUnarchiveDescription,
	...chatMuteDescription,
	...chatPinDescription,
	...chatDeleteDescription,
];
