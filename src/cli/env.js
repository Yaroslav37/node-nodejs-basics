const parseEnv = () => {
  const output = Object.keys(process.env)
    .filter((key) => key.startsWith("RSS_"))
    .map((key) => `${key}=${process.env[key]}`)
    .join("; ");

  console.log(output);
};

parseEnv();
