type OS = 'undetermined' | 'macos' | 'ios' | 'windows' | 'android' | 'linux'

const getOS = (): OS => {
  const { userAgent } = window.navigator
  const macosPlatforms = /(macintosh)|(macintel)|(macppc)|(mac68k)/i
  const windowsPlatforms = /(win32)|(win64)|(windows)|(wince)/i
  const iosPlatforms = /(iphone)|(ipad)|(ipod)/i
  const androidPlatforms = /(android)/i
  const linuxPlatforms = /(linux)/i

  if (macosPlatforms.test(userAgent)) {
    return 'macos'
  }
  if (iosPlatforms.test(userAgent)) {
    return 'ios'
  }
  if (windowsPlatforms.test(userAgent)) {
    return 'windows'
  }
  if (androidPlatforms.test(userAgent)) {
    return 'android'
  }
  if (linuxPlatforms.test(userAgent)) {
    return 'linux'
  }

  return 'undetermined'
}

export const useOs = (): OS => {
  if (typeof window !== 'undefined') {
    return getOS()
  }

  return 'undetermined'
}
