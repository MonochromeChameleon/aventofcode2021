import { Parser } from './parser.js';

export class SingleLineSplitMapParser extends Parser {
  parseInput(lines) {
    return lines[0].split(this.split).map(this.map);
  }
}
