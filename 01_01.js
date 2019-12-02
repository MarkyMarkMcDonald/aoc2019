$('pre').textContent.trim().split('\n').map(n => parseInt(n)).map(n => Math.floor(n / 3) - 2).reduce((memo, i) => {return memo + i}, 0);
