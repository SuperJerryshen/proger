export const setItem = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val))
}

export const getItem = key => {
  if (Array.isArray(key)) {
    let values = []
    key.forEach(k => {
      values.push(JSON.parse(localStorage.getItem(k)))
    })
    return values
  } else {
    return JSON.parse(localStorage.getItem(key))
  }
}

export const rmItem = key => {
  if (Array.isArray(key)) {
    key.forEach(k => {
      localStorage.removeItem(k)
    })
  } else {
    localStorage.removeItem(key)
  }
}
