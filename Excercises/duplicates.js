const duplicatedElemtns = (ar) => {
    return ar.reduce((acc, item, index, original) => {
      if (original.indexOf(item, index + 1) !== -1 && !acc.includes(item)) acc = [...acc, item];
  return acc
    }, [])
  }

  console.log(duplicatedElemtns([1,1,1,3,1,4,5,6,7,8,4,78,4]))