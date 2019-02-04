# Foreign Function Interface Experiments

Small experiments with dynamic library loading across different languages.

Compiles a rust project for loading into ruby, python, and javascript.

## Setup

Build the rust project
```
$ cargo build --release
```

Run the python program:
```
$ python embed.py
```

Run the ruby program
```
$ ruby embed.rb
```

Run the js program
```
node js/index.js
```

## Notes and Comparison

*Rust* and it's toolchain are a joy. Add a `crate-type=["dylib"]` to the config, and you can use the normal cargo toolchain without any other modifications.

*Ruby* is always magic. Using the 'ffi' gem, you can attach functions from a dynamic library to a module. Pretty simple, didn't have much trouble getting it going.

*Python* is well known for its compatibility with C and C++ libraries, and it lived up to this reputation. `ctypes` from the standard library made loading the libraryand calling a function pretty painless.

*Node* was a pain relative to the others. node-gyp, while a cool tool, spits out a ton of warnings on install. The code that I had also broke when I upgraded node versions, due to some package being compiled for a different version of node. This may just be me being grumpy, but it was annoying that I had to have a package.json, node_modules folder, and package-lock.json in addition to a js file in order to do a fancy console log.

--

All told, loading and running code across a language boundary was actually surprisingly easy. I got all three high-level languages running my dumb rust code relatively quickly and painlessly. It makes me think that if I had something that _really_ needed optimizing, I shouldn't be scared to reach for a lower level language and break out the ffi, so long as I am working on a project where I can own the build process like that.

I hope that this will encourage me to do more FFI stuff in the future. There are times when I want to explore some interesting problem in Rust, but also want the ease of solving parts of it with a high-level language. Maybe FFI can be a bridge, so that I can solve each part with a tool at the appropriate level.
