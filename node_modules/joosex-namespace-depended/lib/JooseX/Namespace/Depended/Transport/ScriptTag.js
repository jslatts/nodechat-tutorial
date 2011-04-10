Role('JooseX.Namespace.Depended.Transport.ScriptTag', {
    
    requires : [ 'handleLoad' ],
    
    
    methods : {
        
        getScriptTag : function () {
            
        }
    },
    
    
    override : {
        
        load: function (url, onsuccess, onerror) {

            var scriptNode       = document.createElement('script')

            scriptNode.type      = 'text/javascript'
            scriptNode.src       = url
            scriptNode.async     = true
            
            
            if (Joose.is_IE) {
                
                var timeout    = setTimeout(function () {
                    
                    onerror(url + " load failed.")
                    
                }, 10000)
                
                scriptNode.onreadystatechange = function() {
                    
                    var readyState = scriptNode.readyState
                    
                    if (readyState == 'complete' || readyState == 'loaded') {
                        
                        clearTimeout(timeout)
                            
                        onsuccess(null, url)
                    }
                }
                
                
            } else {
                
                scriptNode.onload = function() {
                    onsuccess(scriptNode.text, url)
                }
            
                scriptNode.onerror = function () {
                    onerror(url + " load failed.")
                }
            }
                
            var head            = document.getElementsByTagName('head')[0] || document.body
            
            head.appendChild(scriptNode)
        },
        
        
        materialize : function (blob, url) {
        }
    }
})



/**

Name
====


JooseX.Namespace.Depended.Transport.ScriptTag - transport, which use the &lt;script&gt; tag for resource loading 


SYNOPSIS
========
        
        //generally for consuming only
        
        Class("JooseX.Namespace.Depended.Resource.Custom", {
        
            isa : JooseX.Namespace.Depended.Resource,
            
            does : [ JooseX.Namespace.Depended.Transport.ScriptTag, ...]
            
            ...
        })


DESCRIPTION
===========

`JooseX.Namespace.Depended.Transport.ScriptTag` is a transport role. It provide the implementation of `load` method, which use the 
&lt;script&gt; tag for resource loading. It also overrides the `materialize` method as &lt;script&gt; tag execute the code along with loading. 



SEE ALSO
========

Authoring [JooseX.Namespace.Depended](../Authoring.html)

Abstract base resource class: [JooseX.Namespace.Depended.Resource](../Resource.html)


General documentation for Joose: <http://joose.github.com/Joose/>


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