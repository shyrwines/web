export const add = (id, quantity) => ({
  type: 'ADD',
  id,
  quantity
})

export const change = (id, quantity) => ({
  type: 'CHANGE',
  id,
  quantity
})

export const clear = () => ({
  type: 'CLEAR'
})

export const remove = (id) => ({
  type: 'REMOVE',
  id
})
