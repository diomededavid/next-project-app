// @ts-ignore
export const fetcher = async ({url, method, body, json = true}) => {
    // @ts-ignore
    const res = await fetcher(url, {
        method,
        ...(body && {body}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        throw new Error('API error')
    }

    if (json) {
        const data = await res.json()
        return data.data
    }
}

// @ts-ignore
export const register = async (user) => {
    return fetcher({
        url: "/api/register",
        method: "POST",
        body: user,
        json: false,
    });
}


// @ts-ignore
export const signin = async (user) => {
    return fetcher({
        url: "/api/signin",
        method: "POST",
        body: user,
        json: false,
    });
}
