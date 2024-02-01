import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const reversedText = chunk.toString().split('').reverse().join('') + '\n';
    this.push(reversedText);
    callback();
  }
});

const transform = async () => {
  process.stdin.pipe(reverseTransform).pipe(process.stdout);

  reverseTransform.on('finish', () => {
    console.log('Text transformation completed.');
  });

  reverseTransform.on('error', (err) => {
    console.error('Error during text transformation:', err);
  });
};

await transform();
