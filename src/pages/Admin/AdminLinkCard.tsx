import * as React from 'react';
import {Avatar, Card, Grid} from "@geist-ui/react";
import { Trash2, ArrowUpCircle as ArrowUp, ArrowDownCircle as ArrowDown, Edit3} from '@geist-ui/react-icons'


type LinkCardProps = {
    color: "default" | "secondary" | "success" | "warning" | "error" | "dark" | "lite" | "alert" | "purple" | "violet" | "cyan",
    avatarUrl: string
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
    return (
        <Grid.Container gap={1} justify={"center"} alignItems={"center"} alignContent={"center"}>
            <Grid xs={20}>
                <Card type={props.color} shadow hoverable>
                    <Grid.Container  gap={1} alignItems={"center"}>
                        <Grid>
                            <Avatar src={props.avatarUrl} size={"medium"} />
                        </Grid>
                        <Grid>
                            <h4 style={{marginBottom: 0}}>{props.children}</h4>
                        </Grid>
                        <Grid style={{marginLeft: "auto"}}>
                        </Grid>
                    </Grid.Container>
                </Card>
            </Grid>
            <Grid>
                <Grid.Container gap={0.5}>
                    <Grid xs={24} style={{lineHeight: 0, width: 0}}>
                        <ArrowUp size={24} />
                    </Grid>
                    <Grid xs={24} style={{lineHeight: 0, width: 0}}>
                        <ArrowDown size={24} />
                    </Grid>
                    <Grid xs={24} style={{lineHeight: 0, width: 0}}>
                        <Edit3 size={24} />
                    </Grid>
                    <Grid xs={24} style={{lineHeight: 0}}>
                        <Trash2 size={24} />
                    </Grid>
                </Grid.Container>
            </Grid>
        </Grid.Container>
    );
};

export default LinkCard
