const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const depTree = require('dependency-tree');
//console.log(JSON.parse(stats));
const { HTTP2_HEADER_PATH } = http2.constants;


// Create a plain-text HTTP/2 server
const server = http2.createSecureServer({
    cert: fs.readFileSync(path.join(__dirname, '/localhost.crt')),
    key: fs.readFileSync(path.join(__dirname, '/localhost.key'))

},onRequest);
const base = path.join(__dirname);
const root = base.split(path.sep).slice(-1)[0];
const homePath = '/index.html';

const deplist =depTree.toList({
    filename:path.join(base,'/bootstrap.js'),
    directory:path.join(base)
    // filter: fpath => fpath.indexOf('template.js232') === -1, // optional
});
const deplistLodash =depTree.toList({
    filename:path.join(base,'/template.js'),
    directory:path.join(base,),

});

function onRequest (req, res) {
    const reqPath = req.url ? (req.url === '/' ? homePath : req.url) : homePath ;
    console.log(`request: ${reqPath}`);
    const fpath = path.join(base,reqPath);
    // console.log(fpath);
    let  linkStrings;
    fs.open(fpath,'r',(err,file)=>{
        if (err) {
            res.statusCode = 404
            res.end();
            return
        }
        // if (reqPath === '/index.html') {
        //     push(res.stream, path.join(__dirname,'bootstrap.js'));
        //     // linkStrings = deplist.map(pushWithLinkHeaders);
        // }


            // Push with index.html
        if (reqPath === '/bootstrap.js') {
            deplist.forEach((item)=> push(res.stream, item));
            // linkStrings = deplist.map(pushWithLinkHeaders);
        }
        // if (reqPath === '/template.js') {
        //     deplistLodash.forEach((item)=> push(res.stream, item));
        //     // linkStrings = deplistLodash.map(pushWithLinkHeaders);
        // }

        // Serve file
        res.stream.respondWithFD(file, {
            'content-type': mime.getType(fpath),
            ':status': 200,
            'Link':linkStrings ? linkStrings.join(',') : '',
            'Cache-Control': `public, max-age=${48*60*60}`
        })
    });
    //
    // File not found


    // res.stream.respond({
    //     'content-type': 'text/html',
    //     ':status': 200
    // });
    // res.stream.end('<h1>Hello World</h1>');
}

function push (stream, _path) {

    const fileName = path.parse(_path).base;
    const relPath = `/${buildUrl(_path)}`;
    const mimeType = mime.getType(_path);
    // console.log(relPath);
    const file = fs.openSync(_path,'r');

    if (!file) {
        console.log(`nofile ${path}`);
        return;
    }

    stream.pushStream({ [HTTP2_HEADER_PATH]: relPath}, (err, pushStream) => {
        pushStream.respondWithFD(file,{
            'content-type': mimeType,
            ':status': 200,
            'Cache-Control': `public, max-age=${48*60*60}`
        })
    })
}

function pushWithLinkHeaders(_path){
    const fileName = path.parse(_path).base;
    const relPath = `/${buildUrl(_path)}`;
    const mimeType = mime.getType(_path);



    return `<${relPath}>; rel=modulepreload`;
}

function buildUrl(filePath){
    const pathSplit  = filePath.split(path.sep);
    const rootIndex = pathSplit.indexOf(root);

    const urlPath = pathSplit.slice(rootIndex+1);


    return `${urlPath.join('/')}`;
}

// server.on('stream', (stream, headers) => {
//     // stream is a Duplex
//     stream.respond({
//         'content-type': 'text/html',
//         ':status': 200
//     });
//     stream.end('<h1>Hello World</h1>');
// });

server.listen(8082);
