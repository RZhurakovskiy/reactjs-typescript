import { createContext, useState } from 'react';


interface IModalContext {
    isModalVisible: boolean,
    open: () => void,
    close: () => void
}


export const ModalContext = createContext<IModalContext>({
    isModalVisible: false,
    open: () => {},
    close: () => {}
})


export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [isModalVisible, setModalVisible] = useState(false)


    const open = () => {setModalVisible(!isModalVisible)}
    const close = () => {setModalVisible(!isModalVisible)}

    return (
        <ModalContext.Provider value={{isModalVisible, open, close}}>
            {children}
        </ModalContext.Provider>
    )
}