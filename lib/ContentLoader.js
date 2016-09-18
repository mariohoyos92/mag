let yaml = require('js-yaml');
let fs   = require('fs');

class ContentLoader {
  static get contentPath() { return appPath('content/') }
  
  static loadYML(name) {
    try {
      let path = ContentLoader.contentPath + `${name}.yml`;
      return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    } catch (e) {
      console.error(`Error loading content YML: ${e}`);
    }
  }
}

module.exports = ContentLoader;
