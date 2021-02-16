function factorial(n) {
  let result = 1;

  if (n < 0) {
    result = 'Факториал не может быть отрицательным';
  } else {
    for (i = 0; i < n; i++) {
      result = result * (n - i);
    }
  }

  return result;
}
