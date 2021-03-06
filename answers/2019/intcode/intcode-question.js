import { QuestionBase, Parsers } from '../../../utils/question-base.js';
import { Intcode } from './intcode.js';

export class IntcodeQuestion extends QuestionBase {
  get parser() {
    return Parsers.SINGLE_LINE_DELIMITED_NUMBERS;
  }

  get split() {
    return ',';
  }

  newIntcode() {
    return new Intcode(this._program);
  }

  reset(input) {
    input.reset();
  }

  calculate(param) {
    this._input.reset().run(param);
    return this._input.output;
  }

  postParse(lines) {
    this._program = lines;
    return this.newIntcode();
  }
}
