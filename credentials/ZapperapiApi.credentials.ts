import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class ZapperapiApi implements ICredentialType {
	name = 'zapperapiApi';

	displayName = 'ZapperAPI API';

	icon: Icon = 'file:zapperapi.svg';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-zapperapi?tab=readme-ov-file#credentials';

	properties: INodeProperties[] = [
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			required: true,
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '=https://api.zapperapi.com/{{$credentials.instanceId}}',
			url: '/connection',
		},
	};
}
