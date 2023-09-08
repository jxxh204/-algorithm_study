function solution(wallpaper) {
  if (wallpaper.length < 1) return null;
  if (wallpaper[0].length < 1) return null;

  const hight = wallpaper.length;
  const width = wallpaper[0].length;

  let [lx, rx, ty, by] = [null, null, null, null];

  for (let i = 0; i < hight; i++) {
    for (let j = 0; j < width; j++) {
      if (wallpaper[i][j] === "#") {
        if (lx === null || rx === null || ty === null || by === null) {
          lx = j;
          rx = j;
          ty = i;
          by = i;
        }
        //  i = y j = x
        lx = Math.min(lx, j);
        rx = Math.max(rx, j);

        ty = Math.min(ty, i);
        by = Math.max(by, i);
      }
    }
  }

  return [ty, lx, by + 1, rx + 1];
}
