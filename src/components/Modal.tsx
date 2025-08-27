import type { ReactNode } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const modalRoot = document.getElementById("modal-root");

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleEsc);


        return () => document.removeEventListener("keydown", handleEsc);
    }, [onClose])

    if (!isOpen || !modalRoot) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg relative">
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-black"
                    onClick={onClose}
                >
                    ✖
                </button>
                {children}
            </div>
        </div>,
        modalRoot

    );
}
