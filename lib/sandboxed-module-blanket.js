var blanket = require('blanket'),
    deferred = require('deferred');

exports.blanket = function(source) {
  // Check for the magic variable added to the global scope by blanket.js when running
  if ('_blanket' in global) {
    try {
      var deferredInstrument = deferred();
      // blanket.js provides async source code instrumentation
      global._blanket.instrument({
        inputFile: source,
        inputFileName: this.filename
      }, function(instrumentedSource) {
        deferredInstrument.resolve(instrumentedSource);
      });
      // Return a promise to satisfy sandboxed-module's sync behaviour
      source = deferredInstrument.promise;
    } catch(e) {}
  }
  return source;
};
