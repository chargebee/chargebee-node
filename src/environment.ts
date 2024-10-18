const DEFAULT_PROTOCOL: string = 'https';
const DEFAULT_TIME_OUT: number = 80000;
const DEFAULT_PORT: number = 443;
const DEFAULT_TIME_MACHINE_WAIT: number = 3000;
const DEFAULT_EXPORT_WAIT: number = 3000;

export const Environment = {
  protocol: DEFAULT_PROTOCOL,
  hostSuffix: '.chargebee.com',
  apiPath: '/api/v2',
  timeout: DEFAULT_TIME_OUT,
  clientVersion: 'v3.0.0-beta.4',
  port: DEFAULT_PORT,
  timemachineWaitInMillis: DEFAULT_TIME_MACHINE_WAIT,
  exportWaitInMillis: DEFAULT_EXPORT_WAIT,
};
