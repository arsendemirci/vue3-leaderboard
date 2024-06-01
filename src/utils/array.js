//check type of the parameter if its an object or not
export const isObject = (value) => {
  return !!(value && typeof value === 'object' && !Array.isArray(value))
}

//compare function to sort the dates array according to events count
export const compare = (a, b) => {
  if (a.c > b.c) {
    return -1
  } else if (a.c === b.c) {
    return a.dur > b.dur ? -1 : 1
  } else {
    return 1
  }
}

// processes the object data and returns dates array
export const getDatesArr = (obj) => {
  let datesArr = []

  // loop the 1st level for year data
  Object.entries(obj).forEach(([key1, value1]) => {
    const year = key1
    let month, date
    // loop the 2nd level for month data
    Object.entries(value1).forEach(([key2, value2]) => {
      month = key2
      //loop the 3rd level for dates data
      Object.entries(value2).forEach(([key3, value3]) => {
        date = key3
        if (!['c', 'dur', 's'].includes(key3)) {
          let dateStr = new Date(year, month - 1, date).toLocaleDateString('tr-TR')
          let c = value3['c']
          let dur = value3['dur']
          let s = value3['s']
          datesArr.push({ date: dateStr, c, dur, s })
        }
      })
    })
  })
  return datesArr
}

//dynamic recursive function that returns dates array
export const getDatesArrRecursive = (obj, key, dates = [], level = 0, datesArr = []) => {
  if (level == 0 && !dates.length && !key && isObject(obj))
    Object.entries(obj).forEach(([k, v]) => getDatesArrRecursive(v, k, dates, level, datesArr))

  if (!key && !level) {
    return datesArr
  }

  if (isObject(obj) && level < 2 && key) {
    level++
    dates.push(key)
    Object.entries(obj).forEach(([k, v]) => {
      return getDatesArrRecursive(v, k, dates, level, datesArr)
    })
  } else {
    if (key == 'c' || key == 'dur') {
      return
    }
    if (key == 's') {
      level--
      if (level == 1) dates = dates.splice(1, 2)
      if (level == 0) dates = []
      return
    }
    if (dates.length == 2) dates.push(key)
    if (dates.length == 3) dates[2] = key

    if (dates.length === 3) {
      datesArr.push({
        date: new Date(dates[0], dates[1] - 1, dates[2]).toLocaleString(),
        c: obj.c,
        dur: obj.dur,
        s: obj.s
      })
    }
  }
}
