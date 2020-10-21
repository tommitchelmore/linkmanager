import * as React from 'react';
import {Avatar, Card, Grid} from "@geist-ui/react";

type LinkCardProps = {
    color: "default" | "secondary" | "success" | "warning" | "error" | "dark" | "lite" | "alert" | "purple" | "violet" | "cyan",
    avatarUrl: string
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
    return (
        <Card type={props.color} shadow hoverable>
            <Grid.Container gap={1} alignItems={"center"}>
                <Grid>
                    <Avatar src={props.avatarUrl} size={"medium"} />
                </Grid>
                <Grid>
                    <h4 style={{marginBottom: 0}}>{props.children}</h4>
                </Grid>
            </Grid.Container>
        </Card>
    );
};

export default LinkCard
