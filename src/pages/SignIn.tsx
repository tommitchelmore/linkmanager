import React, {useState} from 'react';
import {Card, Page, Grid, Text, Input, Spacer, Button} from "@geist-ui/react";
import db from "../services/firestore"

const SignIn = () => {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handleEmail = (e: React.ChangeEvent) => {
        // @ts-ignore
        setEmail(e.target.value)
    }

    const handlePassword = (e: React.ChangeEvent) => {
        // @ts-ignore
        setPass(e.target.value)
    }

    const login = () => {
        db.auth().signInWithEmailAndPassword(email, pass).catch(err => {
            setError(err.code)
        })
    }

    return (
        <Page dotBackdrop>
            <Card shadow hoverable>
                <Grid.Container justify={"center"} alignItems={"center"} gap={3}>
                    <Grid>
                        <h1>Welcome back</h1>
                        <Text style={{textAlign: "center"}} p>Please sign in</Text>
                    </Grid>
                    <Grid xs={24}>
                        <form onSubmit={(e) => {e.preventDefault(); login()}}>
                            <Input placeholder="joe@example.com" name="email" onChange={handleEmail} status={error === "auth/invalid-email" ? "error" : "default"}>
                                Email
                            </Input>
                            <Spacer />
                            <Input.Password placeholder="" name="password" onChange={handlePassword} status={error === "auth/wrong-password" ? "error" : "default"}>
                                Password
                            </Input.Password>
                            <Spacer />
                            <Button type="success" htmlType="submit">Sign in</Button>
                        </form>
                    </Grid>
                </Grid.Container>
            </Card>
        </Page>
    );
};

export default SignIn
