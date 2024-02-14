import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './learnCard.module.scss'

export const LearnCard = () => {

    // const {data: card} = useGetRandomCardQuery({id})

    return (
        <Card className={s.card}>
            <Typography variant={'large'}>
                Learn
            </Typography>
            <Typography variant={'small'}>
                Question
            </Typography>
        </Card>
    )
}