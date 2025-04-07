/*
https://launchschool.com/lessons/6165017e/assignments/6833923d
*/

function maxTreasure(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const cache = new Map();

  function collectTreasure(i, j) {
    if (i === 0 && j === 0) {
      return grid[i][j];
    }
    if (i < 0 || j < 0) {
      return 0;
    }

    const key = `${i},${j}`;
    if (cache.has(key)) {
      return cache.get(key);
    }

    const fromTop = collectTreasure(i - 1, j);
    const fromLeft = collectTreasure(i, j - 1);
    const maxTreasure = grid[i][j] + Math.max(fromTop, fromLeft);

    cache.set(key, maxTreasure);
    return maxTreasure;
  }

  return collectTreasure(m - 1, n - 1);
}