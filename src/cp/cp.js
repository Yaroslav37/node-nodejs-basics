import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', ['.\\files\\script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

  process.stdin.pipe(childProcess.stdin);

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });

  childProcess.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(['arg1', 'arg2', 'arg3']);
