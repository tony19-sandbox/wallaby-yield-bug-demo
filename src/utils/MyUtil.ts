export class MyUtil {
  /**
   * Why does this async class method (a generator function) cause a Babel compile error in Wallaby?
   * 
   *   "[Error] ​​Postprocessor run failure: Failed to run preprocessors on src/utils/MyUtil.js, SyntaxError: src/utils/MyUtil.js: yield is a reserved word in strict mode (5:21)​​"
   * 
   * The workaround is rewrite this method as:
   * 
   *   generate = async function * () {
   *      yield 1;
   *   }
   */
  async * generate() {
    yield 1;
  }
}
