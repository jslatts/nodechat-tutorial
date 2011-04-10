Class('JooseX.Namespace.Depended.Manager', {
    
    my : {
    
        have : {
            
            INC                             : Joose.is_NodeJS ? require.paths : [ 'lib', '/jsan' ],
            
            disableCaching                  : true,
            
            resources                       : {},
            
            resourceTypes                   : {},
            
            ANONYMOUS_RESOURCE_COUNTER      : 0
        },
    
        
        
        methods : {
            
            //get own resource of some thing (resource will be also attached to that abstract thing)
            //if the something is requesting own resource its considered loaded
            getMyResource : function (type, token, me) {
                var resource = this.getResource({
                    type : type,
                    token : token
                })
                
                if (resource.attachedTo && resource.attachedTo != me) throw resource + " is already attached to [" + resource.attachedTo + "]"
                
                resource.attachedTo     = me
                resource.loaded         = true
                resource.loading        = false
                
                return resource
            },
            
            
            getResource : function (descriptor) {
                
                if (typeof descriptor == 'object') {
                    var type                = descriptor.type = descriptor.type || 'javascript'
                    var token               = descriptor.token
                    var requiredVersion     = descriptor.version
                    
                    delete descriptor.version
                    
                } else 
                    if (typeof descriptor == 'string') {
                    
                        var match = /^(\w+):\/\/(.+)/.exec(descriptor)
                        
                        if (match) {
                            // type & token are explicitly specified
                            type    = match[1]
                            token   = match[2]
                            
                            if (type == 'http' || type == 'https') {
                                token   = type + '://' + token
                                type    = 'javascript'
                            }
                        } else {
                            // no type specified
                            token = descriptor
                            
                            type = /\//.test(token) || /\.js$/.test(token) ? 'javascript' : 'joose'
                        }
                    }
                    
                if (!token) {
                    token       = '__ANONYMOUS_RESOURCE__' + this.ANONYMOUS_RESOURCE_COUNTER++
                    descriptor  = undefined
                }
                
                var id = type + '://' + token
                
                var resource = this.resources[id]
                
                if (!resource) {
                    var resourceClass = this.resourceTypes[type]
                    if (!resourceClass) throw new Error("Unknown resource type: [" + type + "]")
                    
                    resource = this.resources[id] = new resourceClass(typeof descriptor == 'object' ? descriptor : { 
                        token : token,
                        
                        type : type
                    })
                }
                
                resource.setRequiredVersion(requiredVersion)
                
                return resource
            },
            
            
            registerResourceClass : function (typeName, resourceClass) {
                this.resourceTypes[typeName] = resourceClass
            },
            
            
            use : function (dependenciesInfo, callback, scope) {
                var nsManager   = Joose.Namespace.Manager.my
                var global      = nsManager.global
                
                Class({
                    use    : dependenciesInfo,
                    
                    body   : function () {
                        if (callback) nsManager.executeIn(global, function (ns) {
                            callback.call(scope || this, ns)
                        })
                    }
                })
            },
            
            
            getINC : function () {
                var INC         = this.INC
                var original    = use.__ORIGINAL__
                var paths       = use.paths
                
                // user have modified the `use.path` with direct assignment - return `use.paths`
                if (INC == original && paths != original) return paths
                
                // user have modified the `JooseX.Namespace.Depended.Manager.my.INC` with direct assignment - return it
                if (INC != original && paths == original) return INC
                
                if (INC != original && paths != original) throw "Both INC sources has been modified"
                
                // user was only using the in-place array mutations - return any
                return INC
            }
        }
    }
})

use = function (dependenciesInfo, callback, scope) {
    JooseX.Namespace.Depended.Manager.my.use(dependenciesInfo, callback, scope) 
}

use.paths = use.__ORIGINAL__ = JooseX.Namespace.Depended.Manager.my.INC


Joose.I.FutureClass = function (className) { 
    return function () { 
        return eval(className) 
    } 
}


/**

Name
====


JooseX.Namespace.Depended.Manager - A global collection of all resources


SYNOPSIS
========

        JooseX.Namespace.Depended.Manager.my.registerResourceClass('custom-type', JooseX.Namespace.Depended.Resource.Custom)
        

DESCRIPTION
===========

`JooseX.Namespace.Depended.Manager` is a global collection of all resources. 

**Note:** Its a pure [static](http://joose.github.com/Joose/doc/html/Joose/Manual/Static.html) class - all its methods and properties are static.


METHODS
=======

### registerResourceClass

> `void registerResourceClass(String type, Class constructor)`

> After you've created your custom resource class, you need to register it with call to this method.

> Then you can refer to new resources with the following descriptors: 

                {
                    type    : 'custom-type',
                    token   : 'some-token'
                }



GETTING HELP
============

This extension is supported via github issues tracker: <http://github.com/SamuraiJack/JooseX-Namespace-Depended-Manager/issues>

For general Joose questions you can also visit [#joose](http://webchat.freenode.net/?randomnick=1&channels=joose&prompt=1) on freenode or the mailing list at <http://groups.google.com/group/joose-js>
 


SEE ALSO
========

Authoring [JooseX.Namespace.Depended](Authoring.html)

Abstract base resource class: [JooseX.Namespace.Depended.Resource](Resource.html)

General documentation for Joose: <http://joose.github.com/Joose/>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at [http://github.com/SamuraiJack/JooseX-Namespace-Depended-Manager/issues](http://github.com/SamuraiJack/JooseX-Namespace-Depended-Manager/issues)



AUTHORS
=======

Nickolay Platonov [nplatonov@cpan.org](mailto:nplatonov@cpan.org)



COPYRIGHT AND LICENSE
=====================

Copyright (c) 2009, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Nickolay Platonov nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


*/
