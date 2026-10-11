import {Declaration} from "postcss";

const plugin = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-plugin-swap-red',
    Declaration(decl: Declaration) {
      if (decl.value.includes('red')) {
        decl.value = decl.value.replace(/red/g, 'blue')
      }
    }
  }
}

plugin.postcss = true

export default plugin
