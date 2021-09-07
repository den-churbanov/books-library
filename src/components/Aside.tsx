import React, {useState} from 'react'
import {BookData} from '../utils/types'
import shortid from 'shortid'
import {Alert} from './Alert'
import {AlertBookForm} from './AlertBookForm'

interface IAsideProps {
    book: BookData,
    addBook: (data: BookData) => void,
    changeBook: (data: BookData) => void,
    deleteBook: (id: string) => void
}

export const Aside: React.FC<IAsideProps> = ({book, addBook, deleteBook, changeBook}) => {

    const [newBook, setNewBook] = useState<BookData>({
        id: shortid.generate(),
        author: '',
        name: ''
    })
    const [validation, setValidation] = useState({
        name: true,
        author: true,
        numberOfPages: true,
        releaseYear: true,
        image: true
    })
    const [menuActive, setMenuActive] = useState(false)

    const [showDeletionAlert, setShowDeletionAlert] = useState(false)
    const [showChangeAlert, setShowChangeAlert] = useState(false)
    const [showAddAlert, setShowAddAlert] = useState(false)

    //удаление
    const toggleShowDeletionAlertHandler = () => {
        setShowDeletionAlert(prevState => !prevState)
    }
    const deleteBookHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        deleteBook(book.id)
        setShowDeletionAlert(prevState => !prevState)
    }

    //добавление
    const toggleShowAddAlertHandler = () => {
        setShowAddAlert(prevState => !prevState)
        setNewBook({
            id: shortid.generate(),
            author: '',
            name: ''
        })
        setValidation({
            name: true,
            author: true,
            numberOfPages: true,
            releaseYear: true,
            image: true
        })
    }
    const addBookHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        addBook(newBook)
        setShowAddAlert(prevState => !prevState)
    }

    //изменение
    const toggleShowChangeAlertHandler = () => {
        setShowChangeAlert(prevState => !prevState)
        setNewBook({...book})
        setValidation({
            name: true,
            author: true,
            numberOfPages: true,
            releaseYear: true,
            image: true
        })
    }
    const changeBookHandler = (e: React.MouseEvent) => {
        e.stopPropagation()
        changeBook(newBook)
        setShowChangeAlert(prevState => !prevState)
    }


    const toggleMenuHandler = () => {
        setMenuActive(prevState => !prevState)
    }

    return (
        <React.Fragment>
            {/*подтверждение удаления*/}
            <Alert isError={true} show={showDeletionAlert} hideHandler={toggleShowDeletionAlertHandler}>
                <p className="error">Удалить книгу?</p>
                <span className="error">Отменить данное действие невозможно.</span>
                <button className="button button_error"
                        onClick={deleteBookHandler}>Удалить
                </button>
            </Alert>

            {/*добавление книги*/}
            <Alert show={showAddAlert} header="Добавление книги" hideHandler={toggleShowAddAlertHandler}>
                <AlertBookForm validation={validation}
                               setValidation={setValidation}
                               newBook={newBook}
                               setNewBook={setNewBook}
                               buttonTitle="Добавить"
                               buttonHandler={addBookHandler}/>
            </Alert>

            {/*изменение книги*/}
            <Alert show={showChangeAlert} header="Изменение книги" hideHandler={toggleShowChangeAlertHandler}>
                <AlertBookForm validation={validation}
                               setValidation={setValidation}
                               newBook={newBook}
                               setNewBook={setNewBook}
                               buttonTitle="Изменить"
                               buttonHandler={changeBookHandler}/>
            </Alert>
            <aside className={`aside${menuActive ? ' aside_active' : ''}`}>
                <main className="book_info">
                    <div className={`bars${menuActive ? ' is-active' : ''}`} onClick={toggleMenuHandler}>
                        <span/>
                    </div>
                    <h3>{book ? 'Информация' : 'Выберите книгу'}</h3>
                    {book ? <div className="book_info__wrapper">
                        <ul className="info">
                            <li>
                                <span>Название:</span>
                                <p>{book.name}</p>
                            </li>
                            <li>
                                <span>Автор:</span>
                                <p>{book.author}</p>
                            </li>
                            <li>
                                <span>Год выпуска:</span>
                                <p>{book.releaseYear}</p>
                            </li>
                            <li>
                                <span>Кол-во страниц:</span>
                                <p>{book.numberOfPages}</p>
                            </li>
                        </ul>
                        <div className="buttons_wrapper">
                            <button className="button button_warning"
                                    onClick={toggleShowChangeAlertHandler}>Изменить
                            </button>
                            <button className="button button_error"
                                    onClick={toggleShowDeletionAlertHandler}>Удалить
                            </button>
                        </div>
                    </div> : <button className="button"
                                     onClick={toggleShowAddAlertHandler}>Или добавьте новую</button>
                    }
                </main>
            </aside>
        </React.Fragment>

    )
}