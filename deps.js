const path = require('path');
const depTree = require('dependency-tree');




// const deplistLodash =depTree.toList({
//     filename:path.join(__dirname,'/native/withlodash/template.js'),
//     directory:path.join(__dirname,'/native/withlodash'),
// });
const deplistLodash =depTree.toList({
    filename:path.join(__dirname,'docs/native/sw/bootstrap.js'),
    directory:path.join(__dirname,'docs/native/sw'),
});

const base = path.join( __dirname,'docs/native/sw');
const depsUrls = deplistLodash.map(toPath);

function toPath(item) {
    return `'./${path.relative(base,item)}'`;
}

function toLink(item){
    `<link rel="modulepreload" href="${path.relative(base,item) }" >`
}
console.log(depsUrls.join(',\n'));