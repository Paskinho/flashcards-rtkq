import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './learnCard.module.scss'
import {Button} from "../../ui/button";
import {Page} from "../../ui/page";
import {useState} from "react";

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

    const [isOpen, setIsOpen] = useState(false)

    const [radioValue, setRadioValue] = useState('')

    const showAnswer = () => {
        // setRadioValue(defaultValue)
        setIsOpen(true)
    }
    const closeAnswer = () => {
        setIsOpen(false)
    }

    // const {data: card} = useGetRandomCardQuery({id})

    return (
        <Page flex>
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

            <Button onClick={
                isOpen ? () => {
                    closeAnswer()
                } : showAnswer

            }>Show Answer</Button>
            <Typography variant={'small'}>
                Answer:{answer}
            </Typography>
            <img alt={answerImage} src={answerImage}/>
        </Card>
        </Page>
    )
}