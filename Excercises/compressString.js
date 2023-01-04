const compressString = (str) => {
    const a = [...str].reduce((acc, itm) => {
  
      if (itm === acc.lastCHar) {
        acc.lastCharCount++;
      }
      else {
        if (acc.lastCharCount <= 1) acc.lastCharCount = '';
        acc.value = `${acc.value}${acc.lastCHar}${acc.lastCharCount}`
        acc.lastCHar = itm;
        acc.lastCharCount = 1
      }
      return acc;
  
    }, { value: '', lastCHar: '', lastCharCount: 0 })
    return a.value
  }
  
  console.log(compressString('abaaaccdddd '))