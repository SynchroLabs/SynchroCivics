// App-wide Style Hook
//
var styleHelper = require("synchro-api/style-helper");

// The mappings below define the default style to add to each control of the key type in the view.
//
var appStyleMappings = 
{
    "button": "btnStyle",
    "text": "txtStyle"
}

// The "app" styles below will be merged in to any styles provided in the viewModel.  Only app styles that are actually 
// referenced from the view will be merged.  Also, the app styles are merged in such that any style values provided in the
// viewModel will override the cooresponding app style.
//
var appStyles = 
{
    btnStyle:
    {
        /*
        os_merge: 
        {
            iOS: 
            {
                foreground: "White",
                background: "#007AFF"
            }
        }
        */
    },
    txtStyle:
    {
        fontsize: 12
    }
}

exports.AfterInitializeView = function(route, routeModule, context, session, viewModel, view, metrics, isViewMetricsUpdate)
{
    console.log("Processing styles");
    styleHelper.processViewAndViewModelStyles(viewModel, view, metrics, appStyleMappings, appStyles);
}