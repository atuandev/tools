export const getExtension = (filename: string) => {
  return filename?.split('.')?.pop() || filename
}
