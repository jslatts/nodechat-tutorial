Name
====

JooseX.Namespace.Depended - a cross-platform (browser/NodeJS), asynchronous, 100% compatible with &lt;script&gt; tags dependencies handling, integrated with Joose3

SYNOPSIS
========

Setup for browsers (see [Joose installation notes](http://joose.github.com/Joose/doc/html/Joose/Manual/Installation.html)):

            <!-- Joose ->
            <script type="text/javascript" src="/jsan/Task/Joose/Core.js"></script>    
            
                <!-- JooseX.Namespace.Depended - web-specific files only ->
                <script type="text/javascript" src="/jsan/Task/JooseX/Namespace/Depended/Web.js"></script>
    
                <!-- or ->
                
                <!-- JooseX.Namespace.Depended - cross-platform bundle ->
                <script type="text/javascript" src="/jsan/Task/JooseX/Namespace/Depended/Auto.js"></script>

            
            <script type="text/javascript">
                use.paths = [ 'lib', '/jsan' ] // this is default and can be omitted
            </script>

Setup for NodeJS:

            // this extension is bundled into the following package
            require('task-joose-nodejs')


Declare dependencies in various class builders:

            Class('Some.Class', {
                VERSION : 0.02,
            
                meta    : 'My.Meta',
                
                isa     : 'Super.Class',
                
                does    : {
                    'Some.Role'         : 0.01,
                    'Some.Other.Role'   : 0.02
                },
                
                trait   : 'Some.Trait',
                
                has     : {
                    
                    attr : {
                        meta    : 'Attribute.Meta',
                        trait   : 'Attribute.Trait',
                        
                        is      : 'rw'
                    }
                },
                
                use     : [ 'Cant.Get.Enough' ],
                
                
            body : function (module) {
            
                // All dependencies will be loaded here
                
            }})
            
            // 'Some.Class' is still fetching dependencies here, too early to instantiate it
            
        
Or load them on-demand from code:

        use({ 'Some.Class' : 0.01 }, function () {
            
            // Some.Class and all its dependencies are ready
            
            var obj = new Some.Class()
        })


INSTALLATION
============

From `npm`:

    > [sudo] npm install joosex-namespace-depended

Tarballs are available for downloading at: <http://search.npmjs.org/#/joosex-namespace-depended>

        

DESCRIPTION
===========

`JooseX.Namespace.Depended` is a cross-platform (browsers/NodeJS) dependencies handling framework, tightly integrated with Joose3.

It allows you to refer to other (not yet loaded) classes/roles in your class declaration. Those classes will be loaded prior your class declaration.
All edge cases like referring to already loaded class, double loading, etc are handled correctly. 

If you are reading this file as README from github, you may want to open [this link](http://samuraijack.github.com/JooseX-Namespace-Depended/) instead. 


USAGE
=====

Dependency descriptor
---------------------

All dependencies should be specified with the *dependency descriptors*. In the simplest case, the descriptor is just a plain string 
with the name of class:

        'MyApp.Widget.Header'
    
In more complex case, the descriptor is an object, which keys are classes names and values - their's versions:

        {
            'MyApp.Widget.Header'   : 0.03,
            'MyApp.Util.Helper'     : 0.01
        }
        
Such descriptors can contain several dependencies, though they are limited to Joose classes only.

In general case, the dependency descriptor is an object with the following structure:
        
        {
            type    : 'joose',
            token   : 'MyApp.Widget.Header',
            version : 0.03
        }
        
Such descriptor can contain exactly one dependency, with the resource of any type.

See also [delayed dependencies].


The rule
--------

General rule is - whereever in your class declaration you can refer to other class (for example in the `does` builder) - you can specify the
dependency descriptor instead. 

This means, that you can specify the dependencies in:

    - `meta` builder (!)
    - `isa` builder
    - `trait` builder
    - `does` builder
    
    - `meta/trait` parameters of attributes
    
For example this declaration is perfectly valid:    
    
            Class('Some.Class', {
                meta : 'My.Meta',
                
                isa : 'Super.Class',
                
                does : {
                    'Some.Role'         : 0.01,
                    'Some.Other.Role'   : 0.02
                },
                
                trait : 'Some.Trait',
                
                has : {
                    
                    attr : {
                        meta    : 'Attribute.Meta',
                        trait   : 'Attribute.Trait',
                        
                        is      : 'rw'
                    }
                }
                
                ...
            })
    
Also in any other custom builder (some [authoring][] required) 

The framework will scan class declaration for dependencies, pre-load them, then substitute descriptors with actual classes and continue the declaration process.


`use` builder
-------------

Additionaly, you can provide an array of dependencies (or a single dependency) in the `use` builder:
            
            Class('Some.Class', {
                
                use : [ 'Some.Other.Class', 'Some.Other.Role' ],
                
                ...
            })



ASYNCHRONOUS WARNING
====================

This framework behaves totally asynchronously, so pay attention to the following notes. 

The dependencies of the class won't be available immediately after class declaration:  

            Class('Some.Class', {
               
                isa : 'Super.Class',
                
                does : {
                    'Some.Role'         : 0.01
                }
            })
            
            // kaboom! - 'Super.Class' and 'Some.Role' are not yet loaded at this point
            var a = new Some.Class 

Dependencies will be available in the `body` builder of the class:

            Class('Some.Class', {
               
                isa : 'Super.Class',
                
                does : {
                    'Some.Role'         : 0.01
                },
                
            body : function () {
            
                // ok
                var a = new Some.Class()
            }})

In general, for example if you've included some class with &lt;script&gt; tag, and that class has declared but not yet loaded dependencies,
wrap the usage of the class with `use` from code (see below).


`use` from code
---------------

You can also load the dependencies from code:

            use([ 'Some.Class1', 'Some.Class2' ], function () {
                
                var a = new Some.Class1()
                var b = new Some.Class2()
            })


Class name -> file name conversion
----------------------------------

The class name you are refering to, will be converted to file name using this simple scheme:

        class name: MyClass
        file  name: MyClass.js
        
        class name: Some.Class
        file  name: Some/Class.js
        
        class name: Some.Other.Class
        file  name: Some/Other/Class.js
    
Generally each dot is replaced with directory separator, and the 'js' extension is appended to result
    

The libraries
-------------

The framework will look up the classes in several *libraries*, which are just the directories, containing the source files.

The current list of libraries is stored as an array in: `use.paths` (on NodeJS platform its just an alias of `require.paths`). Default value is:

        use.paths = [ 'lib', '/jsan' ]

You can freely modify this value, however it will be a good idea to use only methods of array, which mutates it in-place.
 
For example, if you are running a test harness, as `t/index.html`, and would like to refer
to your files, which are in `lib/`, you'll need to add the `../lib` entry with:

        use.paths.unshift('../lib')

Framework will scan through the libraries list sequentially and attempt to load the class from every entry.
Class will be loaded from the first library, which contains the corresponded file. If there are no such file,
loading will continue to another entry.

For example, if we are loading class `Some.Class`, and we have the default setting for libraries, then first it will be tried to load with the following URL:
    
        lib/Some/Class.js
    
If there are no such file, the 2nd entry will be tried:
        
        /jsan/Some/Class.js

If there are no such file again, the exception will be thrown.



ATTRIBUTE HELPER
================

This package adds a new [attribute initializer](http://joose.github.com/Joose/doc/html/Joose/Manual/Attributes.html): `Joose.I.FutureClass`

It can be used, when the default value of the attribute should be set to the constructor of some class, 
which may be not yet loaded on the declaration stage:


        Class('MyApp.Widget.Template', {
            
            use : 'MyApp.Util.Helper',
            
            has : {
                helperClass : Joose.I.FutureClass('MyApp.Util.Helper')
            }
        
        })


DELAYED DEPENDENCIES
====================

You can also specify a "delayed" dependency descriptors, using the attribute helper:

        Class('Some.Class', {
            
            use     : 'Task.Some.Bundle', 
            
            does    : Joose.I.FutureClass('Some.Role.From.Bundle')
        })
        
or just an arbitrary function (function shouldn't has a `meta` property):

        Class('Some.Class', {
            
            use     : 'Task.Some.Bundle', 
            
            does    : function () { return Some.Role.From.Bundle }
        })
        
        
The framework won't attempt to load such descriptors. Instead, the provided function will called
before class construction (when other "real dependencies" were already loaded). Function is supposed 
to return a class (or role) which will be used as part of the class declaration.

This feature is useful for example, when you'd like to depend from a file, containing definitions of several roles,
and you'd like to use those roles in your class.  


LOADING NON-JOOSE CODE
======================

To load non-joose code, specify the descriptor with the 'javascript' type and with url to the source in token, as follows:
        
        {
            type        : 'javascript',
            
            token       : 'MyApp/Widget/Header.js',
            
            presence    : function () {
                return MyApp.Widget.Header
            }
        }

Note the `presence` field. `presence` is function which should return `true` value, if the
resource is already presented in the scope (for example has been loaded with the &lt;script&gt; tag). In such case, 
the loading of resource will be skipped. `presence` can be specified as string, which will be `eval`ed (exceptions are caught).

`type : 'javascript'` is optional if token contains "/" or ends with ".js". So, the descriptor above 
could be also written as:
 
        {
            token       : 'MyApp/Widget/Header.js',
            
            presence    : 'MyApp.Widget.Header'
        }
        
If the url in `token` is relative, then the it will prepended with paths from `use.paths` (each path will be checked, sequentially).
If the url is absolute (starts with "/" or "http://") or starts with "=" then it will be used directly and `use.paths` will be ignored: 

        {
            token       : '=MyApp/Widget/Header.js', // ignore `use.path` settings
            
            presence    : 'MyApp.Widget.Header'
        }
        
Also, when specifying the descriptor as string, the type of the descriptor will be switched to 'javascript' if it contains the "/" or
ends with ".js":


        use('http://ajax.googleapis.com/ajax/libs/ext-core/3.1.0/ext-core.js', function () {
            ...
        })

The code above will load "ext-core" library. However, currently there is no way to specify the `presence` attribute in such descriptor
and no checks will be performed prior loading (potentially allowing repeated loading). This may change in future versions.


ADDITIONAL INFORMATION
======================

Using this library in browsers
------------------------------

JooseX.Namespace.Depended is 100% compatible with &lt;script&gt; tag loading and files concatenation. Some notes:

- Make sure you always use `presence` when loading non-joose code to avoid double-loading.
- Remember the asynchronous behavior.

Additionally, if you will concatenate your JS files in the single file *in the correct order* (which is not required(!))
you'll receive a synchronous execution of the whole file (no `setTimeout` delays).


Debugging in firebug
--------------------

When debugging the code, loaded with JooseX.Namespace.Depended in FireBug, switch to the "Show Static and eval Scripts" option
on the Scripts panel (2nd button from on the toolbar, probably "static"). Also make sure, the "Decompile for eval() sources" option is *unchecked*
otherwise Firebug will re-format your sources.


Changing the default transport/materialization (advanced)
---------------------------------------------------------

By default, JooseX.Namespace.Depended will fetch the source files with asynchronous XHR request and execute it with "eval". 

You may want to change this behavior, for example switch to using &lt;script&gt; tags for loading & execution (unreliable in IE):

            <script type="text/javascript" src="/jsan/Task/JooseX/Namespace/Depended/Web.js"></script>
            <script type="text/javascript">
                
                JooseX.Namespace.Depended.Resource.JavaScript.meta.extend({
                    
                    doesnt  : [ JooseX.Namespace.Depended.Transport.XHRAsync, JooseX.Namespace.Depended.Materialize.Eval ],
                    
                    does    : JooseX.Namespace.Depended.Transport.ScriptTag
                })
                
                use.paths = [ 'lib', '/jsan' ]
            </script>


Using this library in NodeJS
------------------------------

When using this framework on NodeJS platform, the `use.paths` will be an alias of `require.paths`.  

For additional information, please refer to the documentation of the [Task.Joose.NodeJS](http://samuraijack.github.com/Task-Joose-NodeJS)


Authoring
---------

Framework is highly customizable, additional resources/transport/materialization modes can be easily added.
Please refer to [JooseX.Namespace.Depended.Authoring][authoring] for more information. 



Grouped loading mode
--------------------

This framework can operate in special mode, in which it can load *any* class, with *any number* of dependencies (in-depth),
with **2** http requests.

For more information about this mode please refer to <http://www.extjs.com/forum/showthread.php?t=69161> 

This item is currently in TODO list.  



GETTING HELP
============

This extension is supported via github issues tracker: <http://github.com/SamuraiJack/JooseX-Namespace-Depended/issues>

For general Joose questions you can also visit [#joose](http://webchat.freenode.net/?randomnick=1&channels=joose&prompt=1) on freenode or the mailing list at <http://groups.google.com/group/joose-js>


SEE ALSO
========

[Authoring this framework][authoring]

Base resource class: [JooseX.Namespace.Depended.Resource](Depended/Resource.html)

Web page of this module: <http://github.com/SamuraiJack/JooseX-Namespace-Depended/>

General documentation for Joose: <http://joose.github.com/Joose/>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at <http://github.com/SamuraiJack/JooseX-Namespace-Depended/issues>



AUTHORS
=======

Nickolay Platonov <nplatonov@cpan.org>



COPYRIGHT AND LICENSE
=====================

Copyright (c) 2010, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Nickolay Platonov nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


[authoring]: Depended/Authoring.html
