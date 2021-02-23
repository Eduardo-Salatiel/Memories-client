
export default async function apiCall({
    url,
    method,
    body,
    params,
    headers
}){
    const resp = await fetch(url,{
        method,
        headers,
        body: JSON.stringify(body),
        params
    })
    return await resp.json()
}