import type { INodeProperties } from 'n8n-workflow';
import { messageSendTextDescription } from './sendText';
import { messageSendAudioDescription } from './sendAudio';
import { messageSendMediaDescription } from './sendMedia';
import { messageSendStickerDescription } from './sendSticker';
import { messageSendLocationDescription } from './sendLocation';
import { messageSendContactDescription } from './sendContact';
import { messageReactDescription } from './react';
import { messageDeleteDescription } from './delete';
import { messageSendButtonsDescription } from './sendButtons';
import { messageSendListDescription } from './sendList';
import { messageSendCarouselDescription } from './sendCarousel';
import { messageSendTemplateDescription } from './sendTemplate';

const showOnlyForMessages = {
	resource: ['message'],
};

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForMessages,
		},
		options: [
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a message',
				description: 'Delete a sent message',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/delete',
					},
				},
			},
			{
				name: 'React',
				value: 'react',
				action: 'React to a message',
				description: 'React to a message with an emoji',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/react',
					},
				},
			},
			{
				name: 'Send Audio',
				value: 'sendAudio',
				action: 'Send an audio message',
				description: 'Send an audio message to a phone number or group',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/audio',
					},
				},
			},
			{
				name: 'Send Buttons',
				value: 'sendButtons',
				action: 'Send a message with buttons',
				description: 'Send a message with interactive buttons',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/buttons',
					},
				},
			},
			{
				name: 'Send Carousel',
				value: 'sendCarousel',
				action: 'Send a carousel message',
				description: 'Send a message with a carousel of cards',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/carousel',
					},
				},
			},
			{
				name: 'Send Contact',
				value: 'sendContact',
				action: 'Send a contact',
				description: 'Send a contact card (vCard)',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/contact',
					},
				},
			},
			{
				name: 'Send List',
				value: 'sendList',
				action: 'Send a list message',
				description: 'Send a message with a list of options',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/list',
					},
				},
			},
			{
				name: 'Send Location',
				value: 'sendLocation',
				action: 'Send a location',
				description: 'Send a location message',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/location',
					},
				},
			},
			{
				name: 'Send Media',
				value: 'sendMedia',
				action: 'Send a media message',
				description: 'Send an image, video, audio or document message',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/media',
					},
				},
			},
			{
				name: 'Send Sticker',
				value: 'sendSticker',
				action: 'Send a sticker',
				description: 'Send a sticker message',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/sticker',
					},
				},
			},
			{
				name: 'Send Template',
				value: 'sendTemplate',
				action: 'Enviar mensagem de template',
				description: 'Envia uma mensagem de template para um número de telefone',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/template',
					},
				},
			},
			{
				name: 'Send Text',
				value: 'sendText',
				action: 'Send a text message',
				description: 'Send a text message to a phone number',
				routing: {
					request: {
						method: 'POST',
						url: '/messages/text',
					},
				},
			},
		],
		default: 'sendText',
	},
	...messageSendTextDescription,
	...messageSendAudioDescription,
	...messageSendMediaDescription,
	...messageSendStickerDescription,
	...messageSendLocationDescription,
	...messageSendContactDescription,
	...messageReactDescription,
	...messageDeleteDescription,
	...messageSendButtonsDescription,
	...messageSendListDescription,
	...messageSendCarouselDescription,
	...messageSendTemplateDescription,
];
