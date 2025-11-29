import type { INodeProperties } from 'n8n-workflow';

const showOnlyForGroupList = {
	operation: ['list'],
	resource: ['group'],
};

export const groupListDescription: INodeProperties[] = [
	{
		displayName: 'Show Participants',
		name: 'showParticipants',
		type: 'boolean',
		displayOptions: {
			show: showOnlyForGroupList,
		},
		default: false,
		description: 'Whether to show the participants of the groups',
		routing: {
			send: {
				type: 'query',
				property: 'showParticipants',
				value: '={{$value}}',
			},
		},
	},
];
