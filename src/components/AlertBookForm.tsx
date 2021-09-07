import React, {useMemo} from 'react'
import validator from 'validator'
import {BookData} from '../utils/types'

type ValidationType = {
    name: boolean,
    author: boolean,
    numberOfPages: boolean,
    releaseYear: boolean,
    image: boolean
}

interface IAlertBookForm {
    validation: ValidationType,
    setValidation: React.Dispatch<React.SetStateAction<ValidationType>>,
    newBook: BookData,
    setNewBook: React.Dispatch<React.SetStateAction<BookData>>,
    buttonTitle: string,
    buttonHandler: (e: React.MouseEvent) => void
}

export const AlertBookForm: React.FC<IAlertBookForm> = ({
                                                            validation,
                                                            setValidation,
                                                            newBook,
                                                            setNewBook,
                                                            buttonTitle,
                                                            buttonHandler
                                                        }) => {
    const buttonDisabled = useMemo(() => {
        return !(validation.numberOfPages &&
            validation.author &&
            validation.name &&
            validation.image &&
            validation.releaseYear) ||
            !(!!newBook.author.length &&
                !!newBook.numberOfPages &&
                !!newBook.releaseYear &&
                !!newBook.name.length)
    }, [validation, newBook])

    const inputOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewBook(prevState => ({...prevState, [e.target.name]: e.target.value}))
        checkValidation(e)
    }

    const checkValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
        let isValid = true
        const value = e.target.value
        switch (e.target.name) {
            case 'name':
                isValid = value.length > 0
                break
            case 'image':
                isValid = !value.length || validator.isURL(value)
                break
            case 'author':
                isValid = value.length > 0
                break
            case 'numberOfPages':
                isValid = Number.isInteger(Number.parseInt(value))
                break
            case 'releaseYear':
                isValid = Number.isInteger(Number.parseInt(value))
                break
        }
        setValidation(prevState => ({...prevState, [e.target.name]: isValid}))
    }

    const inputKeys: Array<keyof ValidationType> = Object.keys(validation) as Array<keyof ValidationType>
    const inputsInfo = new Map([
        ['name', {
            placeholder: 'Название',
            required: true
        }],
        ['author', {
            placeholder: 'Автор',
            required: true
        }],
        ['numberOfPages', {
            placeholder: 'Количество страниц',
            required: true
        }],
        ['image', {
            placeholder: 'URL изображения',
            required: false
        }],
        ['releaseYear', {
            placeholder: 'Год издания',
            required: true
        }],
    ])

    return (
        <React.Fragment>
            {inputKeys.map((key, idx) => (
                <input type="input"
                       className={`library__input alert_input${!validation[key] ? ' alert_input_not_valid' : ''}`}
                       name={key}
                       value={newBook[key]}
                       onChange={inputOnChangeHandler}
                       onBlur={checkValidation}
                       placeholder={inputsInfo.get(key)!.placeholder}
                       autoComplete="off"
                       required={inputsInfo.get(key)!.required}/>
            ))}
            <button className="button"
                    disabled={buttonDisabled}
                    onClick={buttonHandler}>{buttonTitle}</button>
        </React.Fragment>
    )
}