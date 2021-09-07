import * as React from 'react'
import {OptionData, SelectedOption} from '../components/Select'
import {BookData} from './types'


export const computeBooksCountPerShelf = (content: React.RefObject<HTMLDivElement>) => {
    //from styles
    const bookWidth = 40
    const maxBookWidth = 150
    const itemMargin = 10
    const shelfPadding = 20
    if (!content.current) return 5
    return Math.floor((content.current.clientWidth - maxBookWidth - 2 * itemMargin - 2 * shelfPadding) / (bookWidth + itemMargin))
}

export const options: Array<OptionData> = [
    {
        title: 'По автору',
        value: 'author',
        disabled: false
    }, {
        title: 'По названию',
        value: 'name',
        disabled: false
    }
]


export const getSortedBooks = (sortActive:boolean,
                               sortInput: React.RefObject<HTMLInputElement>,
                               books: Array<BookData>,
                               selectedOption: SelectedOption,
                               booksCountPerShelf: number,
                               setBooksCount: React.Dispatch<React.SetStateAction<number>>)=>{
    let sorted
    if (sortActive && sortInput.current) {
        const searchValue = sortInput.current.value.trim().toLowerCase()
        sorted = books.filter(book => {
            if (selectedOption.value === 'author')
                return book.author.toLowerCase().includes(searchValue)
            if (selectedOption.value === 'name') return book.name.toLowerCase().includes(searchValue)
        })
    }
    const items = sorted ? sorted : books
    const tuple = []
    let group: Array<BookData> = []
    if (items.length % booksCountPerShelf === 1) {
        setBooksCount(prevState => prevState - Math.floor(prevState / 3))
    }
    for (let i = 0; i < items.length; i++) {
        if (i % booksCountPerShelf === 0) {
            if (group.length) tuple.push(group)
            group = []
        }
        group.push(items[i])
    }
    if (group.length) tuple.push(group)
    return tuple
}