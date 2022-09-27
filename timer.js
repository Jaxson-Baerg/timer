const args = process.argv.slice(2);

const timer = (args) => {
  for (let num of args) {
    if (num < 0 || !Number(num)) { continue; }
    setTimeout(() => {
      let x = num;
      process.stdout.write("\x07");
      console.log(`Alarm of ${x} seconds is up!`);
    }, num * 1000);
  }
};

timer(args);