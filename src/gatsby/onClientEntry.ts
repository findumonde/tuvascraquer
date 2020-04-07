const onClientEntry = () => {
  const polyfills: Promise<any>[] = []

  if (typeof fetch === "undefined") {
    polyfills.push(import("whatwg-fetch"))
  }

  return Promise.all(polyfills)
}

export default onClientEntry
