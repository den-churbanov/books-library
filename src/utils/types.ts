interface BookData {
    id: string,
    name: string,
    author: string,
    image?: string,
    releaseYear?: number,
    numberOfPages?: number
}

export type {BookData}