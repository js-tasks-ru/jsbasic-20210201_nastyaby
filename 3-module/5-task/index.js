function getMinMax(str) {
  const arr = str.split(' ').join().split(',')

  const filterArr = arr.filter(item => item !== '').map(item => parseFloat(item)).filter(item => !!item);

  let obj = {};

  obj.min = Math.min(...filterArr);
  obj.max = Math.max(...filterArr);

  return obj;
}
