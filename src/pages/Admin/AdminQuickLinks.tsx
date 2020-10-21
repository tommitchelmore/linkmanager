import * as React from 'react';
import {Button, Grid, Input, Modal, Select, Spacer} from "@geist-ui/react";
import LinkCard from "./AdminLinkCard";
import db from "../../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState} from "react";

type CardProps = {
    displayName: "",
    index: 0,
    color: "default" | "secondary" | "success" | "warning" | "error" | "dark" | "lite" | "alert" | "purple" | "violet" | "cyan",
    avatarUrl: string
}

const AdminQuickLinks = () => {

    const [addModalState, setAddModalState] = useState(false)
    const openAddModal = () => setAddModalState(true)
    const closeAddModal = () => setAddModalState(false)

    const ref = db.firestore().collection('quicklinks')
    const query = ref.orderBy('index')
    const [data] = useCollectionData(query, {})

    return (
        <>
            <Modal open={addModalState} onClose={closeAddModal}>
                <Modal.Title>New Quick Link</Modal.Title>
                <Modal.Content>
                    <form>
                        <Input size={"large"} name={"name"}>
                            Display Name
                        </Input>
                        <Spacer />
                        <Input size={"large"} name={"link"}>
                            Link
                        </Input>
                        <Spacer />
                        <Select size={"large"} placeholder={"Color"}>
                            <Select.Option value={"lite"}>Lite</Select.Option>
                            <Select.Option style={{background: "#000000", color: "#ffffff"}} value={"dark"}>Dark</Select.Option>
                            <Select.Option style={{background: "#0070F3", color: "#ffffff"}} value={"success"}>Success</Select.Option>
                            <Select.Option style={{background: "#F5A623", color: "#ffffff"}} value={"warning"}>Warning</Select.Option>
                            <Select.Option style={{background: "#EE0000", color: "#ffffff"}} value={"error"}>Error</Select.Option>
                            <Select.Option style={{background: "#FF0080", color: "#ffffff"}} value={"alert"}>Alert</Select.Option>
                            <Select.Option style={{background: "#F81CE5", color: "#ffffff"}} value={"purple"}>Purple</Select.Option>
                            <Select.Option style={{background: "#7928CA", color: "#ffffff"}} value={"violet"}>Violet</Select.Option>
                            <Select.Option style={{background: "#50E3C2"}} value={"cyan"}>Cyan</Select.Option>
                        </Select>
                    </form>
                </Modal.Content>
                <Modal.Action passive onClick={() => setAddModalState(false)}>Cancel</Modal.Action>
                <Modal.Action>Submit</Modal.Action>
            </Modal>

            <Grid.Container gap={2} justify={"center"} style={{marginTop: "1rem"}}>
                {data && data.map((obj: any, i) => {
                    return (
                        <Grid xs={24} key={i}>
                            <LinkCard color={obj.color} avatarUrl={obj.avatarUrl}>{obj.displayName}</LinkCard>
                        </Grid>
                    )
                })}
                <Grid xs={24} style={{textAlign: "center"}}>
                    <Button type={"success"} onClick={openAddModal}>Add new</Button>
                </Grid>
            </Grid.Container>
        </>
    );
};

export default AdminQuickLinks



export function AddCard() {

}

