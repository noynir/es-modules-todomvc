const path = require('path');
const depTree = require('dependency-tree');




const deplistLodash =depTree.toList({
    filename:path.join(__dirname,'/native/withlodash/template.js'),
    directory:path.join(__dirname,'/native/withlodash'),
});

const base = path.join( __dirname,'/native/withlodash/');
const depsUrls = deplistLodash.map((item)=> `<link rel="modulepreload" href="${path.relative(base,item) }" >`);

console.log(depsUrls.join('\n'));