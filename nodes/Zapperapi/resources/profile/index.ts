import type { INodeProperties } from 'n8n-workflow';
import { profileUpdateNameDescription } from './updateName';
import { profileUpdateStatusDescription } from './updateStatus';
import { profileUpdatePictureDescription } from './updatePicture';

const showOnlyForProfile = {
	resource: ['profile'],
};

export const profileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForProfile,
		},
		options: [
			{
				name: 'Update Name',
				value: 'updateName',
				action: 'Update profile name',
				description: 'Change the profile name',
				routing: {
					request: {
						method: 'PATCH',
						url: '/profile/name',
					},
				},
			},
			{
				name: 'Update Status',
				value: 'updateStatus',
				action: 'Update profile status',
				description: 'Change the profile status',
				routing: {
					request: {
						method: 'PATCH',
						url: '/profile/status',
					},
				},
			},
			{
				name: 'Update Picture',
				value: 'updatePicture',
				action: 'Update profile picture',
				description: 'Change the profile picture',
				routing: {
					request: {
						method: 'PATCH',
						url: '/profile/picture',
					},
				},
			},
			{
				name: 'Delete Picture',
				value: 'deletePicture',
				action: 'Delete profile picture',
				description: 'Remove the profile picture',
				routing: {
					request: {
						method: 'DELETE',
						url: '/profile/picture',
					},
				},
			},
		],
		default: 'updateName',
	},
	...profileUpdateNameDescription,
	...profileUpdateStatusDescription,
	...profileUpdatePictureDescription,
];
