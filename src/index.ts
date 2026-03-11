#!/usr/bin/env node

const VERSION = "0.1.1";

function main(): void {
  const firstArg = process.argv.at(2);
  if (firstArg && (firstArg === "--help" || firstArg === "-h")) {
    console.log(
      "Prints 'n' to the console an infinite amount of time (equivalent to the 'yes' command).\nOptions:\n--version: Print the version of the command\n--help: Print the help message.",
    );
    return;
  } else if (firstArg && (firstArg === "--version" || firstArg == "-v")) {
    console.log(`no - v${VERSION}`);
    return;
  }
  while (true) {
    console.log("n");
  }
}

main();
