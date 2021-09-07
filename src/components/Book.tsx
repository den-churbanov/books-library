import React from 'react'
import {BookData} from '../utils/types'

interface IBookProps {
    book: BookData,
    selected: boolean,
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
}

export const Book: React.FC<IBookProps> = ({book, selected, setSelected}) => {
    if (!book) return null

    const setSelectedHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        setSelected(book.id)
    }

    return (
        <div className={`book_item${selected? ' book_item_active': ''}`} onClick={setSelectedHandler}>
            <div className="book_wrapper">
                <div className={`book_content`} >
                    <div className="book_content__front">
                        <div className="front_cover" style={{backgroundImage: `url(${book.image})`}}>
                        </div>
                    </div>
                    <div className="book_content__back"/>
                    <div className="book_content__left">
                        <h2><i>{book.author}</i> <br/> <b>{book.name}</b></h2>
                    </div>
                    <div className="book_content__right"/>
                </div>
            </div>
        </div>
    )
}