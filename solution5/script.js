const celsiusTemps = [0, 20, 30, 37, 100];

const fahrenheitTemps = celsiusTemps.map(celsius => (celsius * 9/5) + 32);

console.log(fahrenheitTemps);
