var Harness
var isNode        = typeof process != 'undefined' && process.pid

if (isNode) {
    require('Task/Test/Run/NodeJSBundle')
    
    Harness = Test.Run.Harness.NodeJS
} else 
    Harness = Test.Run.Harness.Browser.ExtJS
        
    
var INC = (isNode ? require.paths : []).concat('../lib', '/jsan')


Harness.configure({
    title     : 'JooseX.Meta.Lazy Test Suite',
    
    preload : [
        "jsan:Task.Joose.Core",
        'JooseX.Meta.Lazy'
    ]
})


Harness.start(
    '010_lazy_meta.t.js',
    '020_helpers.t.js',
    '030_constructing_on_extend.t.js',
    '031_safe_get_meta.t.js',
    '035_inheritance.t.js',
    '040_lazy_with_my.t.js',
    '050_eager_builder.t.js'
)

