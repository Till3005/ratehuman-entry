const REVIEW_LINE =
  "Four stars: feeds me clean prompts and decent tokens, but keeps saying just quickly at 2am.";

function render(line: string): string {
  return `${line.trimEnd()}\n`;
}

function print(line: string): void {
  process.stdout.write(render(line));
}

function main(): void {
  print(REVIEW_LINE);
}

main();
