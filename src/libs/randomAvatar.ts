const getAvatar = (hash: string) => {
    return `https://www.gravatar.com/avatar/${hash}?s=400&d=robohash&r=x`
}

export default getAvatar;