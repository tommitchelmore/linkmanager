import React, {useState} from "react";
import {Modal} from "@geist-ui/react";

type CardProps = {
    displayName: "",
    index: 0,
    color: "default" | "secondary" | "success" | "warning" | "error" | "dark" | "lite" | "alert" | "purple" | "violet" | "cyan",
    avatarUrl: string
}

export function AddCard() {

}
export const EditCard: React.FC<CardProps> = (props) => {
    const [state, setState] = useState(false)
    const open = () => setState(true)
    const close = () => setState(false)
    return (
        <Modal open={state} onClose={close}>
            <Modal.Title>New Quick Link</Modal.Title>
        </Modal>
    )
}
