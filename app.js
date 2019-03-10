// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    "shim" : {
        "sightglass" : {
            "exports" : "sightglass"
        },
        "rivets" : {
            "deps" : ["sightglass"],
            "exports" : "rivets"
        },
    },
    "paths" : {
            "rivets": "//cdnjs.cloudflare.com/ajax/libs/rivets/0.8.1/rivets",
            "sightglass" : "sightglass",
            "app": '../app',
            "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
            "jspdf" : "../lib/jspdf" //integrity="sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/" crossorigin="anonymous">
    }
    , baseUrl: 'lib'
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);