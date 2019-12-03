class Program {
  constructor(input) {
    this.input = input;
    this.currentLineIndex = 0;
  }

  run = () => {
    while (this.currentOpCode() != 99) {
      let value;
      const registerOneContents = this.atIndex(this.currentLine()[1]);
      const registerTwoContents = this.atIndex(this.currentLine()[2]);
      switch (this.currentOpCode()) {
          case 1:
            value = registerOneContents + registerTwoContents;
            break;
          case 2:
            value = registerOneContents * registerTwoContents;
            break;
          default:
            throw new Error('unknown opcode');
      }
      this.setAtIndex(this.currentLine()[3], value)
      this.currentLineIndex += 1;
    }
  };

  currentLine = () => this.input[this.currentLineIndex]
  currentOpCode = () => this.currentLine()[0]
  firstOpCode = () => this.input[0][0]
  atIndex = (i) => this.input[Math.floor(i / 4)][i % 4]
  setAtIndex = (i, value) => this.input[Math.floor(i / 4)][i % 4] = value
}

const numbers = $('pre').textContent.trim().split(',').map(n => parseInt(n));
const lodash = document.createElement('script')
lodash.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"
lodash.addEventListener('load', () => {
  for (var noun = 0; noun <= 99; noun++) {
    for (var verb = 0; verb <= 99; verb++) {
      const programInput = _.chunk(numbers, 4);
      programInput[0][1] = noun;
      programInput[0][2] = verb;
      const program = new Program(programInput);
      program.run();
      if (program.firstOpCode() == 19690720) {
        console.log(noun, verb);
        break;
      }
    }
  }

});
$('body').append(lodash)
