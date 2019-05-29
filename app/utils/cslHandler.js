
export const CSL_ERROR_TYPE = 'CSL Error'

export const throwCsl = (response, url, status = 503) => {
  // should not be in here if there is no error
  if (!response || !response.CslErrorResponse || (status >= 0 && status < 300)) {
    return
  }
  // This is the object that catch of the calling saga will receive
  // This is what any calls using "handleApiErrors" will receive
  const error = new Error(CSL_ERROR_TYPE)
  error.reportingType = CSL_ERROR_TYPE
  error.response = {
    status, cslResponse: response 
  }

  throw error
}

export const processCslErrors = (response, url) => {
  const { CslErrorResponse } = response
  if (CslErrorResponse) {
    const status = 503
    throwCsl(response, url, status)
  }
  return response
}
