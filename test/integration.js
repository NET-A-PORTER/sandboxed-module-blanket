var assert = require('assert'),
  SandboxedModule = require('sandboxed-module'),
  SandboxedModuleBlanket = require('../'),
  moduleUnderTest = 'fixture',
  blanket = require('blanket')({
    pattern: moduleUnderTest
  });

var fixture = SandboxedModule.load('./' + moduleUnderTest, {
  sourceTransformers: SandboxedModuleBlanket
}).exports;

var instrumentedSource = fixture.answer.toString();

assert(instrumentedSource.indexOf(global._blanket.getCovVar()) !== -1);
assert(instrumentedSource.indexOf(moduleUnderTest) !== -1);

