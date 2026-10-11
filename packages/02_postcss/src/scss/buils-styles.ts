import path from "node:path";
import {fileURLToPath} from "node:url";
import * as sass from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import * as fs from "node:fs";

const srcDir = path.dirname(fileURLToPath(import.meta.url))
const scssPath = path.join(srcDir, 'index.scss')
const result = sass.compile(scssPath)

postcss([autoprefixer({overrideBrowserslist: 'last 10 versions'})])
  .process(result.css, {from: undefined})
  .then(res => {
    fs.writeFileSync(path.join(srcDir, 'index.css'), res.css)
  })
