import StringReplacePlugin from 'string-replace-webpack-plugin';
module.exports = (styles) => StringReplacePlugin.replace({
  replacements: [
    {
      pattern: /\{\{(.*?)\}\}/g,
      replacement: (match: Object, content: string) => customEval(content, styles),
    },
    {
      pattern: /%%([\w\.]+)%%/g,
      replacement(match: Object, path: string): any {
        const value = _.get(styles, path, undefined);

        if (value === undefined) {
          const msg = `Cannot find variant replacement for %%${path}%% in ${this.resourcePath}. Styles: ${JSON.stringify(styles, null, 2)}`;
          console.error(msg);
          throw new Error(msg);
        }

        return value;
      },
    },
    {
      pattern: /__LESS_COLORS__/g,
      replacement(): string {
        const _config = (key: string, defaultValue: mixed) => _.get(styles, key.replace(/^styles\./, ''), defaultValue);
        return Colors.map((colorName: string): string => {
          const color = getColor(colorName, {config: _config});
          return `@${colorName}: ${color || ''};`;
        }).join('\n');
      },
    },
  ],
});
