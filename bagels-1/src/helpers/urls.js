export function url(directory) {
  const urls = {
    bagels: 'http://bagel-api-fis.herokuapp.com/bagels'
  }

  return urls[directory]
}