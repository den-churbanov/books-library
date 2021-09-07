import React, {useCallback, useEffect, useMemo, useState} from 'react'
import './styles/App.css'
import {BookData} from './utils/types'
import {getData} from './utils/data'
import {Library} from './components/Library'
import {Aside} from './components/Aside'

export const App = () => {

    const [books, setBooks] = useState<Array<BookData>>([])
    const [loading, setLoading] = useState(false)
    const [selectedBook, setSelectedBook] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        setBooks(getData)
        setTimeout(() => setLoading(false), 2000)
    }, [])

    const targetBook = useMemo(() => {
        return books.filter(book => book.id === selectedBook)[0]
    }, [selectedBook, books])

    const deleteBook = useCallback((idx: string) => {
        setBooks(books.filter(book => book.id !== idx))
        setSelectedBook(null)
    }, [setBooks, books])

    const changeBook = useCallback((newBook: BookData) => {
        setBooks(prevState => prevState.map(book => {
            if (book.id === newBook.id) return {...newBook}
            return book
        }))
        setSelectedBook(null)
    }, [setBooks])

    const addBook = useCallback((book: BookData) => {
        setBooks(prevState => ([book, ...prevState]))
    }, [setBooks])

    return (
        <React.Fragment>
            <Library books={books}
                     loading={loading}
                     selectedBook={selectedBook}
                     setSelectedBook={setSelectedBook}/>
            <Aside book={targetBook}
                   addBook={addBook}
                   changeBook={changeBook}
                   deleteBook={deleteBook}/>
        </React.Fragment>
    )
}

