## Use ZOD for runtime checks in one project, share ZOD types with another projects

Do `npm install`, run `npm run build`

Examine `build-a` and `build-b` output folders

TS project A is configured to emit declaration files only. ZOD dependency reference can be found there  

TS project B compiles to JS and imports types from project B. Although project A output files do reference ZOD, .d.ts files can only contain types and there is 0 chance any runtime code would leak from B to A, effectively erasing all ZOD references in resulting JS bundle of project-b

One can manually export types without configuring TS project to build types only by manually creating .d.ts file - see project-a-export.d.ts  

Anywho, type inference in project B still requires ZOD to be installed as dependency since User type is inferred from ZOD types


> Rule of thumb - unless you import runtime code from other libs, TS will not reference those libs in resulting bundle thanks to type erasure.
> To prevent accidental leaking any runtime code with your lib exports, supply .d.ts files only
