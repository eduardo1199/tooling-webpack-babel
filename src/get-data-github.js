export async function getDataGitHub() {
  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
  
  const jsonResponse = await response.json();

  return jsonResponse
}


export class Image {
  constructor(url, src) {
    this.url = url;
    this.src = src;
  }

  getUrl() {
    return this.url
  }

  setUrl(name) {
    return this.url
  }

  getSrc() {
    return this.src
  }

  setSrc(name) {
    return this.url
  }
}
