export const imageToBase64 = (
  file: Blob,
  callback: (result: string) => void
) => {
  const reader = new FileReader()
  reader.onload = () => {
    callback(reader.result as string)
  }
  reader.readAsDataURL(file)
}
