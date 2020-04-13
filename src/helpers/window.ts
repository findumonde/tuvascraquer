export const isBrowser = () => typeof window !== "undefined"

const getSize = (avail: number, min: number, max: number) => Math.max(Math.min(min, avail), Math.min(max, avail / 2))

const getPosition = (avail: number, size: number) => Math.round(avail / 2 - size / 2)

export const openPopup = (name: string, url: string, bestHeight?: number) => {
  const { availWidth, availHeight } = screen
  const width = getSize(availWidth, 600, 1200)
  const height = getSize(availHeight, bestHeight || 400, bestHeight || 800)
  const left = getPosition(availWidth, width)
  const top = getPosition(availHeight, height)
  window.open(url, name, `width=${width},height=${height},left=${left},top=${top}`)
}

if (isBrowser() && !window.ga) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  window.ga = (...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.log("[GA]", args.join(" / "))
    }
  }
}

export const getUrlParam = (key: string) => {
  if (isBrowser() && location.search) {
    const pairs = location.search.substr(1).split("&")
    for (const pair of pairs) {
      const [name, value] = pair.split("=")
      if (name === key) {
        return decodeURIComponent(value)
      }
    }
  }
  return null
}
