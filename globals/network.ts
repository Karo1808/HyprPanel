export const WIFI_STATUS_MAP = {
    unknown: 'Status Unknown',
    unmanaged: 'Unmanaged',
    unavailable: 'Unavailable',
    disconnected: 'Disconnected',
    prepare: 'Preparing Connecting',
    config: 'Connecting',
    need_auth: 'Needs Authentication',
    ip_config: 'Requesting IP',
    ip_check: 'Checking Access',
    secondaries: 'Waiting on Secondaries',
    activated: 'Connected',
    deactivating: 'Disconnecting',
    failed: 'Connection Failed',
} as const;
