console.log('loaded')

// two way data binding, components, and html templating. http://rivetsjs.com/docs/reference/
// scope and injection : http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html
// || or we could use dependency injection with requirejs
// routing : navigo.js - handles before, after events. https://github.com/krasimir/navigo
// lazy load controller : requirejs.  integrate with navigo https://www.joezimjs.com/javascript/lazy-loading-javascript-with-requirejs/

function init(){


// getElementById wrapper
function $id(id) {
    return document.getElementById(id);
  }
  
  // asyncrhonously fetch the html template partial from the file directory,
  // then set its contents to the html of the parent element
  function loadHTML(url, id) {
    req = new XMLHttpRequest();
    req.open('GET', url);
    req.send();
    req.onload = () => {
      $id(id).innerHTML = req.responseText;
    };
  }
  

  // use #! to hash
  router = new Navigo(null, true, '#!');
  router.on({
    // 'view' is the id of the div element inside which we render the HTML
    'todo': () => { loadHTML('./templates/todos.html', 'view'); }
  });
  
  // set the default route
  router.on(() => { $id('view').innerHTML = '<h2>Here by default</h2>'; });
  
  // set the 404 route
  router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });
  
  router.resolve();

  router.navigate('/todo');

    rivets.configure({prefix: 'rv', preloadData: true, rootInterface: '.', templateDelimiters: ['{', '}'],
        // // Augment the event handler of the on-* binder
        // handler: function(target, event, binding) {
        //   this.call(target, event, binding.view.models)
        // }
      
      });
      
      var user = {
        'name' : 'Sahil Gupta',
        'tag' : '<span>Here is the content for paragraph</span>',
        'available' : true,
        'sendData' : false,
        'vote' : true,
        'publish' : function(){
          user.vote = false;
          console.error(user.name);  
        }
      }
      var list = [
          {done:true, summary:"some summ"}
          , {done:false, summary:"some summ"}
        ]
      
      rivets.bind($('#tejabu'), {user: user}); // this is our model
      rivets.bind($('#todos'), {list: list}); // we could pass in a controller too, instead of assuming scope.
      
}
