#!/usr/bin/env node

const VERSION = "0.1.3";

function main(): void {
  const firstArg = process.argv.at(2);
  if (firstArg && (firstArg === "--help" || firstArg === "-h")) {
    console.log(
      "The no utility outputs expletive, or, by default, “n”, forever.\n\nArguments:\n  LETTER: the letter to print ('n' by default)\n\nOptions:\n  --version/-v: Print the version of the command\n  --help/-h: Print the help message.",
    );
    return;
  } else if (firstArg && (firstArg === "--version" || firstArg == "-v")) {
    console.log(`no - v${VERSION}`);
    return;
  }
  while (true) {
    console.log(firstArg ?? "n");
  }
}

main();
