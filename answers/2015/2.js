import { QuestionBase, Parsers } from '../../utils/question-base.js';

export class Question extends QuestionBase {
  constructor() {
    super(2015, 2, 1586300, 3737498);

    this.exampleInput({ input: '2x3x4', part1: 58, part2: 34 });
    this.exampleInput({ input: '1x1x10', part1: 43, part2: 14 });
  }

  get parser() {
    return Parsers.MULTI_LINE_DELIMITED_NUMBERS;
  }

  get split() {
    return 'x';
  }

  part1(input) {
    return input.reduce((sum, [l, w, h]) => {
      const sides = [l * w, w * h, h * l];
      const min = Math.min(...sides);
      const surfaceArea = sides.reduce((tot, side) => tot + 2 * side, 0);
      return sum + surfaceArea + min;
    }, 0);
  }

  part2(input) {
    return input.reduce((sum, [l, w, h]) => {
      const max = Math.max(...[l, w, h]);
      const perimiter = 2 * (l + w + h - max);
      const volume = l * w * h;
      return sum + perimiter + volume;
    }, 0);
  }
}
