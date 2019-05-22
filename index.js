/**
 * readRequestBody reads in the incoming request body
 * Use await readRequestBody(..) in an async function to get the string
 * @param {Request} request the incoming request to read from
 */
async function readRequestBody(request) {
  const { headers } = request
  const contentType = headers.get('content-type')

  if (contentType.includes('application/json')) {
    const body = await request.json()
    return JSON.stringify(body)
  } else if (contentType.includes('application/text')) {
    const body = await request.text()
    return body
  } else if (contentType.includes('text/html')) {
    const body = await request.text()
    return body
  } else if (contentType.includes('form')) {
    //TODO need help testing this
    const body = await request.formData()
    return JSON.stringify(body)
  } else {
    let myBlob = await request.blob()
    var objectURL = URL.createObjectURL(myBlob)
    return objectURL
  }
}
async function formatResponseOnPost(request) {
  let reqBody = await readRequestBody(request)
  let retBody = `The request body sent in was ${reqBody}`
  return new Response(retBody)
}
async function formatResponseOnGet(request) {
  let retBody = `The request was a GET`
  return new Response(retBody)
}

addEventListener('fetch', event => {
  const { request } = event
  const { url } = request

  if (request.method === 'POST') {
    return event.respondWith(formatResponseOnPost(request))
  } else if (request.method === 'GET') {
    return event.respondWith(formatResponseOnGet(request))
  }
})
