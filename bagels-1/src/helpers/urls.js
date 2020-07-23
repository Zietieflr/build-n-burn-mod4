export function url(directory) {
  const urls = {
    bagels: 'https://bagel-api-fis.herokuapp.com/bagels'
  }

  return urls[directory]
}