import { getDataGitHub, Image } from './get-data-github'

let cats;

(async () => {
  const data = await getDataGitHub()

  console.log(data)

  const image = new Image(data[0].url, data[0].id)

  console.log(image.url)
})()

