let yaml = require('js-yaml');
let fs   = require('fs');

class ConfigLoader {
  static get configEnvPath() { return appPath('config/environment/') }

  static loadEnvironment(env) {
    console.log(`Loading Environment: ${env}`);
    let configYmlPath = `${ConfigLoader.configEnvPath}${env}.yml`;
    console.log(configYmlPath);
    let configJson    = ConfigLoader.loadYML(configYmlPath);
    console.log(configJson);
    ConfigLoader.loadBeanstalkFormat(configJson);
  }

  static loadBeanstalkFormat(_json) {
    console.log(_json);
    _json.option_settings.forEach(function(entry) {
      process.env[entry.option_name] = entry.value;
    });
  }

  static loadYML(path) {
    console.log(path);
    try {
      return yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    } catch (e) {
      console.error(`Error loading config YML: ${e}`);
    }
  }
}

module.exports = ConfigLoader;
