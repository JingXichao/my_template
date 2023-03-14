import { storage, localKey } from '@/config'

/**

 * @description 获取accessToken
 * @returns {string|ActiveX.IXMLDOMNode|Promise<any>|any|IDBRequest<any>|MediaKeyStatus|FormDataEntryValue|Function|Promise<Credential | null>}
 */
export function getAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.getItem(localKey.token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.getItem(localKey.token)
    } else {
      return localStorage.getItem(localKey.token)
    }
  } else {
    return localStorage.getItem(localKey.token)
  }
}

/**

 * @description 存储accessToken
 * @param accessToken
 * @returns {void|*}
 */
export function setAccessToken(accessToken) {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.setItem(localKey.token, accessToken)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.setItem(localKey.token, accessToken)
    } else {
      return localStorage.setItem(localKey.token, accessToken)
    }
  } else {
    return localStorage.setItem(localKey.token, accessToken)
  }
}

/**

 * @description 移除accessToken
 * @returns {void|Promise<void>}
 */
export function removeAccessToken() {
  if (storage) {
    if ('localStorage' === storage) {
      return localStorage.removeItem(localKey.token)
    } else if ('sessionStorage' === storage) {
      return sessionStorage.clear()
    } else {
      return localStorage.removeItem(localKey.token)
    }
  } else {
    return localStorage.removeItem(localKey.token)
  }
}
