const fuelRequirement = (n) => { if (n <= 0) { return 0; } else { const thisCost = Math.floor(n / 3) - 2; if (thisCost <= 0) { return 0 } else { return thisCost + fuelRequirement(thisCost) } }  };
$('pre').textContent.trim().split('\n').map(n => parseInt(n)).map(fuelRequirement).reduce((memo, i) => {return memo + i}, 0);
