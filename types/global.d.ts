// Types for compiled templates
declare module 'embroider-svg-ts-bug/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
