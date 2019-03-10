require(['jquery', 'navigo', 'rivets', 'jspdf'], function($, navigo, rivets, jspdf) {
    var app = this 

    var router = new navigo(null, true, '#!');

    router.hooks({
        before: function(done, parms) { 
            // validate signed in then render
          done()
        }, after: function(parms) {  
           // after render
        }
        , leave: function (parms) {
            // triggered when leaving the route
        }
    })

    router.on(
      '/todo', function(parms, query){loadHTML('./templates/todos.html', 'view')}
      , {
        before: function(done, parms) { 
            console.log(require.defined('/app/ToDoController.js'))
            if(require.defined('/app/ToDoController.js')){
                // clear
                moduleName = '/app/ToDoController.js'
                require.undef(moduleName)
            }
            require(['/app/ToDoController.js'], function(controller){ // load controller and pass in parms
                //controller.parms = parms 
                done()
            })
          },
        after: function(parms) {  
          
        }  
      }
    );
    router.on(
        '/user/:name', function(){loadHTML('./templates/user.html', 'view')}
        , {
        before: function(done, parms) { 
            if(require.defined('/app/UserController.js')){
                // clear
                moduleName = '/app/UserController.js'
                require.undef(moduleName)
            }
            require(['/app/UserController.js'], function(controller){
                //controller.parms = parms 
                done()
            })
        }
    })

    // set the 404 route
    router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });
    
    router.resolve();
    
    //router.navigate('/todo');

    rivets.configure({prefix: 'rv', preloadData: true, rootInterface: '.', templateDelimiters: ['{', '}'],
            
    });

    function $id(id) {
        return document.getElementById(id);
    }

    loadHTML = function (url, id) {
        req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();
        req.onload = () => {
            $id(id).innerHTML = req.responseText;
        }
    }  

    return {}
});