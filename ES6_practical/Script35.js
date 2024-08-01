function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  return a + b > c && b + c > a && a + c > b;
}

// checking if the value given can is a isTriangle
