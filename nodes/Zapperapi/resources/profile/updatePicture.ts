import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProfileUpdatePicture = {
	operation: ['updatePicture'],
	resource: ['profile'],
};

export const profileUpdatePictureDescription: INodeProperties[] = [
	{
		displayName: 'Picture',
		name: 'picture',
		type: 'string',
		required: true,
		displayOptions: {
			show: showOnlyForProfileUpdatePicture,
		},
		default: '',
		description: 'URL ou Base64 da imagem a ser enviada',
		routing: {
			send: {
				type: 'body',
				property: 'picture',
			},
		},
	},
];
