Role('JooseX.Namespace.Depended.Transport.XHRSync', {
    
    requires : [ 'handleLoad' ],
    
    override : {
        
        load: function (url, onsuccess, onerror) {
            var req = new JooseX.SimpleRequest()
            var text; 
            
            try {
                text = req.getText(url)
            } catch (e) {
                onerror(e)
                return
            }
            
            onsuccess(text, url)
        }
    }
})


/**

Name
====


JooseX.Namespace.Depended.Transport.XHRSync - transport, which use the synchronous XHR request for resource loading 


SYNOPSIS
========
        
        //generally for consuming only
        
        Class("JooseX.Namespace.Depended.Resource.Custom", {
        
            isa : JooseX.Namespace.Depended.Resource,
            
            does : [ JooseX.Namespace.Depended.Transport.XHRSync, ...]
            
            ...
        })


DESCRIPTION
===========

`JooseX.Namespace.Depended.Transport.XHRSync` is a transport role. It provide the implementation of `load` method, which use the 
synchronous XHR request for resource loading. 



SEE ALSO
========

Authoring [JooseX.Namespace.Depended](../Authoring.html)

Abstract base resource class: [JooseX.Namespace.Depended.Resource](../Resource.html)


General documentation for Joose: <http://openjsan.org/go/?l=Joose>


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