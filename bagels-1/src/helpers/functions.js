export function boilerGET(url) {
  return fetch(url)
    .then(response => response.json())
}