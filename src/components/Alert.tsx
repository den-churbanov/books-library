import React from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition} from 'react-transition-group'

interface IAlertParams {
    children?: React.ReactNode,
    show: boolean,
    isError?: boolean,
    header?: string,
    hideHandler: () => void,
}
/***
 * Component renders modal window with children react node
 * @param children -
 * @param hideHandler -
 * @param header - possibly window header
 * @param show -
 * @param isError - **/
export const Alert = ({children, show, hideHandler, header, isError}: IAlertParams) => {

    return ReactDOM.createPortal(
        <CSSTransition in={show}
                       timeout={500}
                       classNames="blur_window"
                       unmountOnExit>
            <div className="blur_window">
                <div className={`alert${isError? ' alert_error': ''}`}>
                    <div className={`alert__header${!header ? ' cont_left' : ''}`}>
                        {header ? <p>{header}</p> : null}
                        <div className="bars is-active"
                             onClick={hideHandler}>
                            <span/>
                        </div>
                    </div>
                    <div className="alert__content">
                        {children}
                    </div>
                </div>
            </div>
        </CSSTransition>,
        document.getElementById('modal')!
    )
}