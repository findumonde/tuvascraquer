import HttpError from "standard-http-error"

import api, { Payload } from "src/helpers/api"
import bugsnagClient from "src/helpers/bugsnag"

const request = async <T>(method: string, name: string, params?: Payload): Promise<T> => {
  return api.request<T>(method, `/.netlify/functions/${name}`, params)
}

export default {
  get: <T = object>(name: string) => request<T>("GET", name),
  post: <T = object>(name: string, params: Payload) => request<T>("POST", name, params),
  put: <T = object>(name: string, params: Payload) => request<T>("PUT", name, params),
  delete: <T = object>(name: string, params: Payload) => request<T>("DELETE", name, params),
}

export const handleError = (error: Error) => {
  if (!(error instanceof HttpError)) {
    bugsnagClient.notify(error)
  }
  alert("Erreur : " + error.message)
}
