const sentence = "hello there from lighthouse labs";

// Animated Sentence - Typewriter effect function

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i*50);
}

// Fixing the NewLine At The End - use only one from below

setTimeout(() => {
  console.log();
}, sentence.length*50);

setTimeout(() => {
  process.stdout.write('\n');
}, sentence.length*50);