// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  oauth: {
    'oauth_url': '192.168.43.149:8087',
    'client_id': 'prime-front-end-key',
    'scope': null,
    'redirect_uri': `http://127.0.0.1:4200/dashboard`,
    'response_type': 'code',
    'grant_type': 'authorization_code',
    'client_secret': '49b67f2c-c662-11e7-a3b6-0242ac120003'
  }
};
