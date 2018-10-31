> Demo of Wallaby/Babel failing to build `yield` keyword in async class method

For the following async class method (a [generator function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)):

    export class MyUtil {
      async * generate() {
        yield 1; // ERROR: yield is a reserved word in strict mode
      }
    }

...Wallaby/Babel emits a compile error (seen in VS Code's *Output* view) even though `yarn test:unit` runs without error:

    [Error] ​​Postprocessor run failure: Failed to run preprocessors on src/utils/MyUtil.js, SyntaxError: src/utils/MyUtil.js: yield is a reserved word in strict mode (5:21)​​
    [Error] ​​​​
    [Error] ​​  3 |     async generate() {​​
    [Error] ​​  4 |         $_$wf(12);​​
    [Error] ​​> 5 |         $_$w(12, 0), yield 1;​​
    [Error] ​​    |                      ^​​
    [Error] ​​  6 |     }​​
    [Error] ​​  7 | }​​
    [Error] ​​  8 | $_$wpe(12);​​
    [Error] ​​    at _class.raise (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:776:15)​​
    [Error] ​​    at _class.checkReservedWord (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3863:12)​​
    [Error] ​​    at _class.parseIdentifierName (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3840:12)​​
    [Error] ​​    at _class.parseIdentifier (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3832:21)​​
    [Error] ​​    at _class.parseExprAtom (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3038:25)​​
    [Error] ​​    at _class.parseExprAtom (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:8185:52)​​
    [Error] ​​    at _class.parseExprAtom (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:8185:52)​​
    [Error] ​​    at _class.parseExprSubscripts (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2757:21)​​
    [Error] ​​    at _class.parseMaybeUnary (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2736:21)​​
    [Error] ​​    at _class.parseExprOps (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2643:21)​​
    [Error] ​​    at _class.parseMaybeConditional (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2615:21)​​
    [Error] ​​    at _class.parseMaybeAssign (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2562:21)​​
    [Error] ​​    at _class.parseExpression (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:2523:37)​​
    [Error] ​​    at _class.parseStatementContent (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4076:21)​​
    [Error] ​​    at _class.parseStatement (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3962:17)​​
    [Error] ​​    at _class.parseBlockOrModuleBlockBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4513:23)​​
    [Error] ​​    at _class.parseBlockBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4500:10)​​
    [Error] ​​    at _class.parseBlock (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4489:10)​​
    [Error] ​​    at _class.parseFunctionBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3754:24)​​
    [Error] ​​    at _class.parseFunctionBodyAndFinish (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3734:10)​​
    [Error] ​​    at _class.parseMethod (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3686:10)​​
    [Error] ​​    at _class.pushClassMethod (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4893:30)​​
    [Error] ​​    at _class.parseClassMemberWithIsStatic (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4837:14)​​
    [Error] ​​    at _class.parseClassMember (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4754:10)​​
    [Error] ​​    at _class.parseClassBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4709:12)​​
    [Error] ​​    at _class.parseClass (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4659:10)​​
    [Error] ​​    at _class.parseStatementContent (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3990:21)​​
    [Error] ​​    at _class.parseStatement (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3962:17)​​
    [Error] ​​    at _class.parseExportDeclaration (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:5032:17)​​
    [Error] ​​    at _class.parseExport (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4997:31)​​
    [Error] ​​    at _class.parseStatementContent (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4049:27)​​
    [Error] ​​    at _class.parseStatement (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3962:17)​​
    [Error] ​​    at _class.parseBlockOrModuleBlockBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4513:23)​​
    [Error] ​​    at _class.parseBlockBody (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:4500:10)​​
    [Error] ​​    at _class.parseTopLevel (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:3938:10)​​
    [Error] ​​    at _class.parse (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:5304:17)​​
    [Error] ​​    at parse (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/babylon/lib/index.js:10095:38)​​
    [Error] ​​    at parser (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/@babel/core/lib/transformation/normalize-file.js:139:35)​​
    [Error] ​​    at normalizeFile (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/@babel/core/lib/transformation/normalize-file.js:87:11)​​
    [Error] ​​    at runSync (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/@babel/core/lib/transformation/index.js:44:43)​​
    [Error] ​​    at transformSync (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/@babel/core/lib/transform-sync.js:17:38)​​
    [Error] ​​    at Object.transform (/Users/tony/src/tmp/vue-ts-wallaby/node_modules/@babel/core/lib/transform.js:22:65)​​
    [Error] ​​    at **/*.js?(x) (/Users/tony/src/tmp/vue-ts-wallaby/wallaby.config.js:15:53)​​
    [Error] ​​    at process._tickCallback (internal/process/next_tick.js:61:11)​​

The workaround is to rewrite the class method as a property:

    export class MyUtil {
      generate = async function * () {
        yield 1; // no error
      }
    }

The interesting thing is Babel doesn't seem to have a problem with the async class method outside of the Vue CLI project ([demo](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=KYDwDg9gTgLgBAYwDYEMDOa4GE4G8BQcc6AngHYJwBUA5sGQBQCUehRcJAlsEgCZwBGANxsAvvlFA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Cstage-0&prettier=false&targets=&version=6.26.0&envVersion=)).

#### Environment

* Vue CLI project, generated from `vue create`, using the following options:

        Vue CLI v3.0.5
        ? Please pick a preset: Manually select features
        ? Check the features needed for your project: Babel, TS, Linter, Unit
        ? Use class-style component syntax? Yes
        ? Use Babel alongside TypeScript for auto-detected polyfills? Yes
        ? Pick a linter / formatter config: TSLint
        ? Pick additional lint features: Lint on save
        ? Pick a unit testing solution: Jest
        ? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files

* macOS Mojave 10.14
* Node 10.11.0
* VS Code 1.28.2
