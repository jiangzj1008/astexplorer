import defaultParserInterface from './utils/defaultHandlebarsParserInterface';
import pkg from 'lehbs-parser/package.json';

const ID = 'le-hbs';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage || '',

  loadParser(callback) {
    require(['lehbs-parser'], (parser) => callback(parser.preprocess));
  },

  opensByDefault(node, key) {
    return key === 'body';
  },
};
