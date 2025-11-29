import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { connectionDescription } from './resources/connection';
import { messageDescription } from './resources/message';
import { profileDescription } from './resources/profile';
import { chatDescription } from './resources/chat';
import { contactDescription } from './resources/contact';
import { groupDescription } from './resources/group';

export class Zapperapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ZapperAPI',
		name: 'zapperapi',
		icon: 'file:zapperapi.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Node oficial da ZapperAPI',
		defaults: {
			name: 'ZapperAPI',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'zapperapiApi', required: true }],
		requestDefaults: {
			baseURL: '=https://api.zapperapi.com/{{$credentials.instanceId}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Chat',
						value: 'chat',
					},
					{
						name: 'Connection',
						value: 'connection',
					},
					{
						name: 'Contact',
						value: 'contact',
					},
					{
						name: 'Group',
						value: 'group',
					},
					{
						name: 'Message',
						value: 'message',
					},
					{
						name: 'Profile',
						value: 'profile',
					},
				],
				default: 'connection',
			},
			...connectionDescription,
			...messageDescription,
			...profileDescription,
			...chatDescription,
			...contactDescription,
			...groupDescription,
		],
	};
}
