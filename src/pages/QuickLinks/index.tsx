import React from 'react'
import { Page, Grid, Text } from '@geist-ui/react'
import LinkCard from "./LinkCard";
import db from "../../services/firestore";
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function Index() {

    const ref = db.firestore().collection('quicklinks')
    const query = ref.orderBy('index')
    const [data] = useCollectionData(query, {})

    return (
        <Page dotBackdrop>
            <Page.Header>
                <h1>Hey! I'm Tom</h1>
                <Text p>My website and social links can all be found here!</Text>
            </Page.Header>
            <Grid.Container gap={2}>
                {data && data.map((obj: any, i) => {
                    return (
                        <Grid xs={24} key={i}>
                            <LinkCard color={obj.color} avatarUrl={obj.avatarUrl}>{obj.displayName}</LinkCard>
                        </Grid>
                    )
                })}
            </Grid.Container>
            <Page.Footer>
                <Text p>© 2020 Thomas Mitchelmore</Text>
            </Page.Footer>
        </Page>
    )
}
