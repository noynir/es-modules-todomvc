import View from './view.js'
import Controller from './controller.js'
import Model from './model.js'
import Store from './store.js'
import {remove} from './helpers.js'

export {updateTodo, getTodo, subscribe}

let todo;
const subscribers = [];
let Template;
/**
 * Sets up a brand new Todo list.
 *
 * @param {string} name The name of your new to do list.
 */
function Todo(name) {
  this.storage = new Store(name)
  this.model = new Model(this.storage)
  this.template = new Template()
  this.view = new View(this.template)
  this.controller = new Controller(this.model, this.view)
}

async function updateTodo() {

    console.time('lazy load module');
        const templateModule = await import('./template.js');
    console.timeEnd('lazy load module');
    Template = templateModule.default;
    todo = new Todo('todos-vanillajs')
    todo.controller.setView(document.location.hash)
    subscribers.forEach(s => s())
}

function getTodo() {
  return todo
}

function subscribe(cb) {
  subscribers.push(cb)
  return function unsubscribe() {
    remove(subscribers, cb)
  }
}
