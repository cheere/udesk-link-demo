const { join } = require('path')
const { copySync, removeSync } = require('fs-extra')

const docsPath = join(__dirname, '../docs')
console.log('删除(rm)', docsPath)
removeSync(docsPath)

const distPath = join(__dirname, './dist')
console.log('拷贝(copy)', distPath, ' to=>', docsPath)
copySync(distPath, docsPath)