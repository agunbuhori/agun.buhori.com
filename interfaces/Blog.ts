export interface BlogResult {
    kind: string
    items: Item[]
    etag: string
}

export interface Item {
    kind: string
    id: string
    blog: Blog
    published: string
    updated: string
    url: string
    selfLink: string
    title: string
    content: string
    author: Author
    replies: Replies
    etag: string
}

export interface Replies {
    totalItems: string
    selfLink: string
}

export interface Author {
    id: string
    displayName: string
    url: string
    image: Image
}

export interface Image {
    url: string
}

export interface Blog {
    id: string
}