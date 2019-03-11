// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    // "shim" : {
    //     "sightglass" : {
    //         "exports" : "sightglass"
    //     },
    //     "rivets" : {
    //         "deps" : ["sightglass"],
    //         "exports" : "rivets"
    //     },
    // },
    "paths" : {
            "rivets": "rivets",
            "sightglass" : "sightglass",
            "app": '../app',
            // "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
            "jspdf" : "../lib/jspdf",
            "aggrid" : "//unpkg.com/ag-grid-community/dist/ag-grid-community.min.noStyle",
            "bootstrap" : "//stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min"
    }
    , baseUrl: 'lib'
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);