import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './learnCard.module.scss'

export const LearnCard = () => {
    return (
        <Card className={s.main}>
            <Typography>
                Learn
            </Typography>
        </Card>
    )
}