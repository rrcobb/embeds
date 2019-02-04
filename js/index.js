const ffi = require("ffi");

let lib = ffi.Library("target/debug/libembed.dylib", {
  process: ["void", []]
});

let result = lib.process();
console.log(result);
