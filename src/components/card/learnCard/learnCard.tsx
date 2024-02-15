import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './learnCard.module.scss'

type LearnCardPropsType = {
    packName: string
    question: string
    questionImage: string
    answer: string
    answerImageL: string
    numberAttempts: number
    //dataHandler: (value: string) => void
}


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