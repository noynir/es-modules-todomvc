
// Register the ServiceWorker limiting its action to those URL starting
// by `controlled`. The scope is not a path but a prefix. First, it is
// converted into an absolute URL, then used to determine if a page is
// controlled by testing it is a prefix of the request URL.
navigator.serviceWorker.register('./todo-sw.js');

console.time('App Loading')
// Load controlled and uncontrolled pages once the worker is active.
navigator.serviceWorker.ready
    .then(bootstrap)
    .then((app)=> {
        console.timeEnd('App Loading')
        app.init()
    })
    .then(hideLoading);

const lodaingContainer = document.getElementById('loader');
const todosContainer = document.getElementById('todos');
const todosInput= document.querySelector('.new-todo');

function bootstrap(){
    return import('./app.js');
}

function hideLoading(){
    lodaingContainer.style['display'] = 'none';
    todosContainer.style['display']='';
    todosContainer.removeAttribute('disabled');
}

