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
