module.exports = {
  concurrency: 7,
  apiKey: 'nhEVaotaF5Vtfn111bj5100KGrMR9I48eHfTYuQh86IiXgM110',
  //
  browser: [
    { width: 1920, height: 1080, name: 'safari' },
    { width: 1366, height: 768, name: 'ie11' },
    { width: 1440, height: 900, name: 'chrome' },
    { width: 1536, height: 864, name: 'firefox' },
    // Add mobile emulation devices in Portrait mode
    { deviceName: 'iPhone X', screenOrientation: 'portrait' },
    { deviceName: 'Pixel 3', screenOrientation: 'portrait' },
    { deviceName: 'Nexus 6', screenOrientation: 'portrait' },
  ],
};
