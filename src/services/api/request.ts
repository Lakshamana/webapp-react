const axios = require('axios')

export const requestGraphql = async ({ query, variables, headers }: any) => {
  const { REACT_APP_API_ENDPOINT }  = process.env
  try {
    const response = await axios({
      method: 'POST',
      url: `https://${REACT_APP_API_ENDPOINT}/graphql`,
      headers: {
        'Content-Type': 'application/json',
        ...(headers || {}),
      },
      data: JSON.stringify({
        query: query.loc.source.body,
        variables,
      }),
    })
    return response
  } catch (error) {
    console.warn('Request graphql error', error)
  }
  return null
}