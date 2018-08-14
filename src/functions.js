import React from 'react'

export const formatPrice = price => price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

export const staticUrl = fn => {
  return process.env.NODE_ENV === 'production'
    ? `https://firebasestorage.googleapis.com/v0/b/shyrwines.appspot.com/o/${encodeURIComponent(fn)}?alt=media`
    : '/' + fn
}

export const highlightMatch = (value, lowerCaseQuery) => {
  const i = value.toLowerCase().indexOf(lowerCaseQuery)
  const j = i + lowerCaseQuery.length
  return [
    value.slice(0, i),
    <span key={value} className='font-weight-normal'>{value.slice(i, j)}</span>,
    value.slice(j)
  ]
}

export const removeUndefined = array => {
  const i = array.indexOf(undefined)
  if (i !== -1) {
    array.splice(i, 1)
  }
  return array
}
