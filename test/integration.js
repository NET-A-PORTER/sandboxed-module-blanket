var assert = require('assert'),
  SandboxedModule = require('sandboxed-module'),
  SandboxedModuleBlanket = require('../'),
  moduleUnderTest = 'fixture',
  blanket = require('blanket')({
    pattern: moduleUnderTest
  });

// Verify sandboxed-module does not provide blanket code coverage instrumentation on its own
var fixtureWithoutBlanket = SandboxedModule.load('./' + moduleUnderTest).exports;
var instrumentedSourceWithoutBlanket = fixtureWithoutBlanket.answer.toString();

assert(instrumentedSourceWithoutBlanket.indexOf(global._blanket.getCovVar()) === -1);
assert(instrumentedSourceWithoutBlanket.indexOf(moduleUnderTest) === -1);

// Verify sandboxed-module + sandboxed-module-blanket provides blanket code coverage instrumentation
var fixtureWithBlanket = SandboxedModule.load('./' + moduleUnderTest, {
  sourceTransformers: SandboxedModuleBlanket
}).exports;
var instrumentedSourceWithBlanket = fixtureWithBlanket.answer.toString();

assert(instrumentedSourceWithBlanket.indexOf(global._blanket.getCovVar()) !== -1);
assert(instrumentedSourceWithBlanket.indexOf(moduleUnderTest) !== -1);

