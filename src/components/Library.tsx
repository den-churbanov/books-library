import React, {useEffect, useMemo, useRef, useState} from 'react'
import '../utils/types'
import {BookData} from '../utils/types'
import {Loader} from './Loader'
import {Select, SelectedOption} from './Select'
import {Book} from "./Book";
import {computeBooksCountPerShelf, getSortedBooks, options} from '../utils/utils'

interface ILibraryProps {
    books: Array<BookData>,
    loading: boolean,
    selectedBook: string | null,
    setSelectedBook: React.Dispatch<React.SetStateAction<string | null>>
}

export const Library: React.FC<ILibraryProps> = ({
                                                     books,
                                                     loading,
                                                     selectedBook,
                                                     setSelectedBook
                                                 }) => {

    const [booksCountPerShelf, setBooksCount] = useState(5)
    const [selectedOption, setSelectedOption] = useState<SelectedOption>({
        title: 'По автору',
        value: 'author'
    })
    const [sortActive, setSortActive] = useState(false)

    const content = useRef<HTMLDivElement>(null)
    const sortInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        document.body.onresize = onResizeHandler
        return () => {
            document.body.onresize = null
        }
    }, [])

    useEffect(() => {
        setBooksCount(computeBooksCountPerShelf(content))
    }, [])

    const sortedBooks = useMemo(() => {
        return getSortedBooks(sortActive, sortInput, books, selectedOption, booksCountPerShelf, setBooksCount)
    }, [booksCountPerShelf, sortActive, books.length, books])

    //handlers
    const onResizeHandler = () => {
        setBooksCount(computeBooksCountPerShelf(content))
    }
    const searchBtnHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        if (sortActive) {
            setSortActive(prevState => !prevState)
            sortInput.current!.value = ''
        }
        if (sortInput.current && sortInput.current.value.trim().length != 0)
            setSortActive(prevState => !prevState)
    }
    const resetSelected = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSelectedBook(null)
    }

    return (
        <div className="library">
            <div className="library__container">
                <section className="library__header">
                    <Select options={options}
                            selected={selectedOption}
                            setSelected={setSelectedOption}/>
                    <input type="input"
                           className="library__input "
                           placeholder="Поиск..."
                           autoComplete="off"
                           ref={sortInput}
                           id="sort" required/>
                    <button className={`library__button${sortActive ? ' library__button_error' : ''}`}
                            onClick={searchBtnHandler}>
                        {sortActive ? 'Сбросить' : 'Искать'}
                    </button>
                </section>
                <section className="library__content" ref={content}>
                    {!books.length && loading ?
                        <Loader/>
                        :
                        sortedBooks.map((group, idx) =>
                            <div className="shelf_container" onClick={resetSelected} key={idx}>
                                {group.map(book => <Book book={book}
                                                         selected={selectedBook === book.id}
                                                         setSelected={setSelectedBook}
                                                         key={book.id}/>)}
                                <div className="shelf">
                                    <div className="shelf_wrapper">
                                        <div className="shelf_content">
                                            <div className="shelf_content__top"/>
                                            <div className="shelf_content__front"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
}