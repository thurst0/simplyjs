require(['jquery', 'navigo', 'rivets', 'sightglass', 'app/services', 'app/document', 'app/components'], function($, navigo, rivets, sightglass, services, d, components) {
    var app = this 
    var router = new navigo(null, true, '#!');

    app.loadHTML = function (url, id) {
        req = new XMLHttpRequest();
        req.open('GET', url);
        req.send();
        req.onload = () => {
            d.$id(id).innerHTML = req.responseText;
        }
    }  

    router.hooks({
        before: function(done, parms) { 
            if(!services.loggedIn){
                alert('you are not signed in')
                return
            }
            else done()
        }, after: function(parms) {  
           // after render
        }
        , leave: function (parms) {
            // triggered when leaving the route
        }
    })
    app.addRoute = function(path, template, controller){
        var ctrl
        path = '/' + path
        template = './templates/' + template
        template += '.html'
        controller = '/app/' + controller
        controller += '.js'
        router.on(
            path
            , function(parms, query){app.loadHTML(template, 'view')}
            , {
                before: function(done, parms) { 
                    if(require.defined(controller)){
                        //require.undef(controller)
                        ctrl = require.s.contexts._.defined[controller]
                        ctrl.init(parms)
                        done()
                    }else{
                        require([controller], function(ctrl){ 
                            done()
                            ctrl.init(parms)
                        })
                    }
                }
            }
          )
    }
    app.addRoute('todo', 'todos', 'ToDoController')
    app.addRoute('user/:name', 'user', 'UserController')
    app.addRoute('griddemo', 'griddemo', 'GridDemoController')

    // set the 404 route
    router.notFound((query) => { d.$id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });
    
    router.resolve();
    
    //router.navigate('/todo');

    rivets.configure({prefix: 'rv', preloadData: true, rootInterface: '.', templateDelimiters: ['{', '}']})
    components.init()

    //return {}
});