import React from 'react';
import {Card, Page, Grid, Tabs} from "@geist-ui/react";
import AdminQuickLinks from "./AdminQuickLinks";

export default function Admin() {
    return (
        <Page dotBackdrop>
            <Card>
                <Grid.Container justify={"center"} alignItems={"center"} gap={3}>
                    <Grid xs={24}>
                        <h1>Welcome back!</h1>
                    </Grid>
                    <Grid xs={24}>
                        <Tabs initialValue={"1"}>
                            <Tabs.Item label={"Quick Links"} value={"1"}>
                                <AdminQuickLinks />
                            </Tabs.Item>
                            <Tabs.Item label={"Shortener"} value={"2"}>

                            </Tabs.Item>
                            <Tabs.Item label={"Settings"} value={"3"}>

                            </Tabs.Item>
                        </Tabs>
                    </Grid>
                </Grid.Container>
            </Card>
        </Page>
    );
};
