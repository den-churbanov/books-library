import React, {useState} from 'react'

export type OptionData = {
    title: string,
    value: string,
    disabled: boolean
}

export type SelectedOption =  {
    title: string,
    value: string
}
interface ISelectProps {
    options: Array<OptionData>,
    selected: SelectedOption,
    setSelected: React.Dispatch<React.SetStateAction<SelectedOption>>
}

export const Select: React.FC<ISelectProps> = ({options, selected, setSelected}) => {

    const [isActive, setActive] = useState(false)

    const selectContentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setActive(prevState => !prevState)
        const label = (e.target as HTMLLabelElement)
        const value = label.getAttribute('data-value')
        if (value) setSelected({
            title: label.innerText,
            value: value
        })
    }

    return (
        <div className="select" data-state={`${isActive ? 'active' : ''}`}>
            <div className="select__title" onClick={selectContentClickHandler}>
                {selected.title}
            </div>
            <div className="select__content" onClick={selectContentClickHandler}>
                {options.map((option, idx) =>
                    (
                        <React.Fragment key={idx}>
                            <input id={`singleSelect${idx}`}
                                   className="select__input"
                                   type="radio"
                                   name="singleSelect"
                                   checked={option.value === selected.value}/>
                            <label htmlFor={`singleSelect${idx}`}
                                   data-value={option.value}
                                   className="select__label"
                            >
                                {option.title}
                            </label>
                        </React.Fragment>
                    )
                )}
            </div>
        </div>
    )
}