= sandboxed-module-blanket

Provides a [sandboxed-module](https://github.com/felixge/node-sandboxed-module) compatible source transformer to add [blanket.js](https://github.com/alex-seville/blanket) code coverage instrumentation.

The typical use case is to provide code coverage metrics when unit testing a module you are mocking/stubbing the dependencies of.

Although sandboxed-module is the mocking library of choice, the _promise_ glue provided by sandboxed-module-blanket could be used with any library that requires synchronous source code modification.

== Install

	npm install sandboxed-module-blanket

== Usage

```javascript
require('blanket')({
  pattern: 'module-under-test'
});
var SandboxedModule = require('sandboxed-module');
var SandboxedModuleBlanket = require('sandboxed-module-blanket');

var moduleUnderTest = SandboxedModule.require('module-under-test', {
  sourceTransformers: SandboxedModuleBlanket,
  requires: {
    'dependency-of-module-under-test': { /* stub */ }
  }
});
```

== Testing

	npm test

== Licence

Copyright (c) 2014 Net-A-Porter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

