const DEFAULT_PROTOCOL = 'https';
const DEFAULT_TIME_OUT = 80000;
const DEFAULT_PORT = 443;
const DEFAULT_TIME_MACHINE_WAIT = 3000;
const DEFAULT_EXPORT_WAIT = 3000;
export const Environment = {
    protocol: DEFAULT_PROTOCOL,
    hostSuffix: '.chargebee.com',
    apiPath: '/api/v2',
    timeout: DEFAULT_TIME_OUT,
    clientVersion: 'v3.11.0',
    port: DEFAULT_PORT,
    timemachineWaitInMillis: DEFAULT_TIME_MACHINE_WAIT,
    exportWaitInMillis: DEFAULT_EXPORT_WAIT,
};
