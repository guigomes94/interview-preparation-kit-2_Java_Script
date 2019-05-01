function catAndMouse(x, y, z) {
  let arr = ['Cat A', 'Cat B', 'Mouse C'];
  let distance_x_z = Math.abs(x - z);
  let distance_y_z = Math.abs(y - z);
    if (distance_x_z == distance_y_z) {
      return arr[2];
    }
    else if (distance_x_z > distance_y_z) {
      return arr[1];
    }
    else {
      return arr[0];
    }
}

export { catAndMouse };
