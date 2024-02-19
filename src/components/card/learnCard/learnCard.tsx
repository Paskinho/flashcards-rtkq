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
        defaultValue = '1'
    }: LearnCardPropsType
) => {

    const [isOpen, setIsOpen] = useState(false)

    const [radioValue, setRadioValue] = useState('')

    const showAnswer = () => {
        setRadioValue(defaultValue)
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
                    Question: {question}
                </Typography>
                <Typography variant={'small'}>
                    Count of attempts: {numberAttempts}
                </Typography>
                <img alt={questionImage} src={questionImage}/>


                {isOpen ? (


                        <>
                            <Typography variant={'small'}>
                                Answer:{answer}
                            </Typography>
                            <img alt={answerImage} src={answerImage}/>
                            <Typography>
                                Rate yourself:
                            </Typography>
                            <Button variant={'primary'}
                                    fullWidth
                            >Next Question</Button>
                        </>
                    ) :
                    (
                        <Button onClick={
                            isOpen ? () => {
                                closeAnswer()
                            } : showAnswer

                        }
                                variant={'primary'}
                                fullWidth
                        >Show Answer</Button>
                    )
                }
            </Card>

        </Page>
    )
}