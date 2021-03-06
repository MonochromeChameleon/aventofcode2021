import { QuestionBase, Parsers } from '../../utils/question-base.js';

export class Question extends QuestionBase {
  constructor() {
    super(2015, 1, 138, 1771);

    this.exampleInput({ input: '(())', part1: 0 });
    this.exampleInput({ input: '()()', part1: 0 });
    this.exampleInput({ input: '(((', part1: 3 });
    this.exampleInput({ input: '(()(()(', part1: 3 });
    this.exampleInput({ input: '))(((((', part1: 3 });
    this.exampleInput({ input: '())', part1: -1 });
    this.exampleInput({ input: '))(', part1: -1 });
    this.exampleInput({ input: ')))', part1: -3 });
    this.exampleInput({ input: ')())())', part1: -3 });

    this.exampleInput({ input: ')', part2: 1 });
    this.exampleInput({ input: '()())', part2: 5 });
  }

  get parser() {
    return Parsers.SINGLE_LINE_SPLIT;
  }

  part1(input) {
    return input.reduce((acc, it) => acc + (it === '(' ? 1 : -1), 0);
  }

  part2(input) {
    let floor = 0;
    const inputs = input.length;

    while (floor > -1) {
      floor += input.shift() === '(' ? 1 : -1;
    }
    return inputs - input.length;
  }
}
