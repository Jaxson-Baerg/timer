const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const setTimer = () => {
  return new Promise((resolve, reject) => {
    rl.question("", (answer) => {
      resolve(answer);
    });
  });
};

process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    console.log("\rThanks for using me, ciao!");
    process.exit();
  }
  if (key.name === "b") {
    process.stdout.write("\x07");
    console.log("\rBeep!");
  }
});

const main = async () => {
  let num = (await setTimer()).replace(/b/g, "");
  if (num > 0 && Number(num)) {
    console.log(`\rSetting timer for ${num} seconds!....`);
    setTimeout(() => {
      let x = num;
      process.stdout.write("\x07");
      console.log(`\rAlarm of ${x} seconds is up! (Beep!)`);
    }, num * 1000);
    main();
  } else {
    console.log("\rTry just a number next time!");
    main();
  }
};

main();