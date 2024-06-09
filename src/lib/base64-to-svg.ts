import { imageToBase64 } from './image-to-base64'

const SVG_NS = 'http://www.w3.org/2000/svg'
const XLINK_NS = 'http://www.w3.org/1999/xlink'

export const base64ToSvg = (file: Blob, callback: (result: string) => void) => {
  imageToBase64(file, result => {
    const image = new Image()

    image.onload = () => {
      const svgElement = document.createElementNS(SVG_NS, 'svg')
      const imageElement = document.createElementNS(SVG_NS, 'image')

      imageElement.setAttributeNS(XLINK_NS, 'xlink:href', result)

      svgElement.setAttribute('width', image.width.toString())
      svgElement.setAttribute('height', image.height.toString())

      svgElement.appendChild(imageElement)

      const svgString = new XMLSerializer().serializeToString(svgElement)
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' })

      const objectURL = URL.createObjectURL(svgBlob)

      callback(objectURL)
    }

    image.src = result
  })
}
