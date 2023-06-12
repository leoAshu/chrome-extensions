import type { Manifest } from 'webextension-polyfill'
import pkg from '../package.json'

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  icons: {
    '16': 'icon.png',
    '48': 'icon.png',
    '128': 'icon.png',
  },
  action: {
    default_icon: 'icon.png',
    default_title: pkg.name,
    default_popup: 'src/pages/popup/index.html',
  },
  options_ui: {
    page: 'src/pages/options/index.html',
  },
  background: {
    service_worker: 'src/pages/background/index.js',
    // type: 'module'
  },
  // content_scripts: [
  //   {
  //     matches: ['http://*/*', 'https://*/*', '<all_urls>'],
  //     js: [''],
  //     css: [''],
  //   },
  // ],
  permissions: [],
}

export default manifest
