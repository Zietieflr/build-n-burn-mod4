export function boilerGET(url) {
  return fetch(url)
    .then(response => response.json())
}

export function boilerFetch(url, method, body) {
  console.log('boilerFetch', url)
  console.log('boilerFetch', method)
  console.log('boilerFetch', body)
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
}