Class('JooseX.Namespace.Depended.Resource', {
    
    has : {
        
        attachedTo          : null,
        
        type                : null,
        token               : null,
        
        id                  : null,
        
        loading             : false,
        loaded              : false,
        ready               : false,
        
        presence            : null,
        readyness           : null,
        
        loadedFromURL       : null,
        
        readyListeners      : Joose.I.Array,
        
        dependencies        : Joose.I.Object,
        
        onBeforeReady       : { is : 'rw', init : null },
        readyDelegated      : false,
        
        version             : { is : 'rw', init : null },
        requiredVersion     : { is : 'rw', init : null },
        
        hasReadyCheckScheduled  : false
    },
    
    
    after: {
        
        initialize: function () {
            if (!this.id) this.id = this.type + '://' + this.token
        }
        
    },

    
    
    methods: {
        
        setOnBeforeReady : function (func) {
            if (this.onBeforeReady) throw "Can't redefine 'onBeforeReady' for " + this
            
            this.onBeforeReady = func
        },
        
        
        setVersion : function (version) {
            if (!version) return
            
            if (this.version && this.version != version) throw new Error("Cant redefine version of " + this)
            
            var requiredVersion = this.requiredVersion
            
            if (requiredVersion && version < requiredVersion) throw new Error("Versions conflict on " + this + " required [" + requiredVersion + "], got [" + version + "]")
                
            this.version = version
        },
        
        
        setRequiredVersion : function (version) {
            if (!version) return
            
            var requiredVersion = this.requiredVersion
            
            if (!requiredVersion || version > requiredVersion) 
                if (this.isLoaded() || this.loading)
                    throw "Cant increase required version - " + this + " is already loaded"
                else
                    this.requiredVersion = version
        },
        
        
        toString : function () {
            return "Resource: id=[" + this.id + "], type=[" + this.meta.name + "]"
        },
        
        
        addDescriptor : function (descriptor) {
            var resource = JooseX.Namespace.Depended.Manager.my.getResource(descriptor)
            
            var dependencies    = this.dependencies
            var resourceID      = resource.id
            
            //if there is already such dependency or the resource is ready
            if (dependencies[ resourceID ] || resource.isReady()) return
            
            var me = this
            //pushing listener to the end(!) of the list
            resource.readyListeners.push(function () {
                
                delete dependencies[ resourceID ]
                me.checkReady()
            })
            
            //adding dependency
            dependencies[ resourceID ] = resource
            
            //we are not ready, since there are depedencies to load                
            this.ready = false
        },
        
        
        handleDependencies : function () {
            // || {} required for classes on which this Role was applied after they were created - they have this.dependencies not initialized
            Joose.O.eachOwn(this.dependencies || {}, function (resource) {
                resource.handleLoad()
            })
            
            this.checkReady()
        },
        
        
        checkReady : function () {
            if (!Joose.O.isEmpty(this.dependencies) || this.hasReadyCheckScheduled) return
            
            if (this.onBeforeReady) {
                
                if (!this.readyDelegated) {
                    this.readyDelegated = true
                    
                    var me = this
                    
                    this.onBeforeReady(function(){
                        me.fireReady()
                    }, me)
                }
            } else 
                this.fireReady()
        },
        
        
        fireReady: function () {
            this.ready = true
            
            var listeners = this.readyListeners
            
            this.readyListeners = []
            
            Joose.A.each(listeners, function (listener) {
                listener()
            })
        },
        
        
        isReady : function () {
            if (!this.isLoaded()) return false
            
            var isReady = false
            
            try {
                isReady = this.readyness()
            } catch (e) {
            }
            
            return isReady || this.ready
        },
        
        
        isLoaded : function () {
            var isPresent = false
            
            try {
                isPresent = this.presence()
            } catch (e) {
            }
            
            return isPresent || this.loaded
        },
        
        
        handleLoad: function() {
            
            if (this.isLoaded()) {
                this.checkReady()
                return
            }
            
            if (this.loading) return
            this.loading = true
            
            var urls = Joose.O.wantArray(this.getUrls())
            
            var me = this

            // this delays the 'checkReady' until the resourse will be *fully* materialized
            // *fully* means that even the main class of the resource is already "ready"
            // the possible other classes in the same file could be not
            // see 110_several_classes_in_file.t.js, 120_script_tag_transport.t.js for example
            me.hasReadyCheckScheduled = true
            
            var onsuccess = function (resourceBlob, url) {
                me.loaded = true
                me.loading = false
                
                me.loadedFromURL = url
                
                me.materialize(resourceBlob, url)
                
                me.hasReadyCheckScheduled = false
                
                
                me.checkReady()
            }
            
            var onerror = function (e) {
                //if no more urls
                if (!urls.length) throw new Error(me + " not found") 
                
                me.load(urls.shift(), onsuccess, onerror)
            }
            
            this.load(urls.shift(), onsuccess, onerror)
        },
        

        getUrls: function () {
            throw "Abstract resource method 'getUrls' was called"
        },
        
        
        load : function (url, onsuccess, onerror) {
            throw "Abstract resource method 'load' was called"
        },
        
        
        materialize : function (resourceBlob) {
            throw "Abstract resource method 'materialize' was called"
        }
        
    }
})


/**

Name
====


JooseX.Namespace.Depended.Resource - Abstract resource class 


SYNOPSIS
========
        
        //mostly for subclassing only
        Class("JooseX.Namespace.Depended.Resource.JavaScript", {
        
            isa : JooseX.Namespace.Depended.Resource,
            
            ...
        })


DESCRIPTION
===========

`JooseX.Namespace.Depended.Resource` is an abstract resource class. Its not supposed to be used directly, instead you should use
one of its subclasses.


ATTRIBUTES
==========

### attachedTo

> `Object attachedTo`

> An arbitrary object to which this resource is attached (its a corresponding class in JooseX.Namespace.Depended)


### type

> `String type`

> A type of resource  - plain string. `JooseX.Namespace.Depended.Manager` maintain a collection of resource types, accessible 


### token

> `String token`

> A token of resource  - plain string with arbitrary semantic. Each subclass should provide this semantic along with `token -> url` conertion method (locator)  


### id

> `String id`

> An id of resource - is computed as `type + '://' + token'


### loading

> `Boolean loading`

> A sign whether this resource is currently loading

  
### loaded

> `Boolean loaded`

> A sign whether this resource is already loaded


### ready

> `Boolean ready`

> A sign whether this resource is considered ready. Resource is ready, when its loaded, and all its dependencies are ready.


### loadedFromURL

> `String loadedFromURL`

> An url, from which the resource was loaded.


### readyListeners

> `Array[Function] readyListeners`

> An array of functions, which will be called after this resource becomes ready. Functions will be called sequentially. 


### dependencies

> `Object dependencies`

> An object containing the dependencies of this resource. Keys are the `id`s of resources and the values - the resource instances itself.

 
### onBeforeReady

> `Function onBeforeReady`

> A function, which will be called, right after the all dependencies of the resource became ready, but before its own `readyListeners` will be called.
It supposed to perform any needed additional actions to post-process the loaded resource.

> Function will receive two arguments - the 1st is the callback, which should be called when `onBeforeReady` will finish its work. 2nd is the resource instance.

  
### version

> `r/w Number version`

> A version of this resource. Currently is handled as Number, this may change in future releases.

  
### requiredVersion

> `r/w Number requiredVersion`

> A *requiredVersion* version of this resource. Required here means the maximum version from all references to this resource. 



METHODS
=======

### addDescriptor

> `void addDescriptor(Object|String descriptor)`

> Add the resource, described with passed descriptor as the dependency for this resource.


### getUrls

> `String|Array[String] getUrls()`

> Abstract method, will throw an exception if not overriden. It should return the array of urls (or a single url) from which this resource can be potentially loaded. 
This method should take into account the `use.paths` setting


### load

> `void load(String url, Function onsuccess, Function onerror)`

> Abstract method, will throw an exception if not overriden. It should load the content of the resource from the passed `url`. If there was an error during loading
(for example file not found) should not throw the exception. Instead, should call the `onerror` continuation with it (exception instance).

> After successfull loading, should call the `onsuccess` continuation with the resource content as 1st argument, and `url` as 2nd: `onsuccess(text, url)`


### materialize

> `void materialize(String resourceBlob, String url)`

> Abstract method, will throw an exception if not overriden. It should "materialize" the resource. The concrete semantic of this action is determined by resource nature.
For example this method can create some tag in the DOM tree, or execute the code or something else.

> Currently this method is supposed to operate synchronously, this may change in future releases. 
 

SEE ALSO
========

Web page of this package: <http://github.com/SamuraiJack/JooseX-Namespace-Depended-Resource/>

General documentation for Joose: <http://joose.github.com/Joose/>


BUGS
====

All complex software has bugs lurking in it, and this module is no exception.

Please report any bugs through the web interface at <http://github.com/SamuraiJack/JooseX-Namespace-Depended-Resource/issues>



AUTHORS
=======

Nickolay Platonov <nplatonov@cpan.org>



COPYRIGHT AND LICENSE
=====================

Copyright (c) 2009-2010, Nickolay Platonov

All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of Nickolay Platonov nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. 

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 


*/
