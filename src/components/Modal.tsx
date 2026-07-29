import { useEffect, useRef, type ReactNode } from 'react'
import './Modal.scss'

type ModalProps = {
  openModal: boolean
  onClose: () => void
  title?: string
  wide?: boolean
  children: ReactNode
}

const Modal = ({ openModal, onClose, title, wide, children }: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !openModal) return
    dialog.showModal()
    return () => dialog.close()
  }, [openModal])

  return (
    <dialog
      ref={dialogRef}
      className={`modal${wide ? ' wide' : ''}`}
      aria-label={title}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className='modalContent'>
        <button className="modalClose" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div>
          {title && <h3 className="modalTitle">{title}</h3>}
          {children}
        </div>
      </div>
    </dialog>
  )
}

export default Modal
