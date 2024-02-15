import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './learnCard.module.scss'
import {Button} from "../../ui/button";

type LearnCardPropsType = {
    packName: string
    question: string
    questionImage: string
    answer: string
    answerImage: string
    numberAttempts: number
    //dataHandler: (value: string) => void
}


export const LearnCard = (
    {
        packName,
        question,
        questionImage,
        answer,
        answerImage,
        numberAttempts,
    } : LearnCardPropsType
) => {

    // const {data: card} = useGetRandomCardQuery({id})

    return (
        <Card className={s.card}>
            <Typography variant={'large'}>
                Learn {packName}
            </Typography>
            <Typography variant={'small'}>
                {question}
            </Typography>
            <Typography variant={'small'}>
               Count of attempts: {numberAttempts}
            </Typography>
            <img alt={questionImage} src={questionImage}/>
            <Button>Show Answer</Button>
            <Typography variant={'small'}>
                Answer:{answer}
            </Typography>
            <img alt={answerImage} src={answerImage}/>
        </Card>
    )
}