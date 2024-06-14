import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Core {
  constructor() {
    this.services = {};
  }

  async loadServices() {
    const servicesDir = path.join(__dirname, '../services');
    const files = fs.readdirSync(servicesDir);

    for (const file of files) {
      if (file.endsWith('_Service.js')) {
        const serviceName = file.split('.')[0];
        const servicePath = pathToFileURL(path.join(servicesDir, file)).href;
        const service = await import(servicePath);
        this.services[serviceName] = service.default;
        console.log(`${serviceName} loaded successfully`);
      }
  }
  }
  getService(serviceName) {
    return this.services[serviceName];
  }
}

export default new Core();
