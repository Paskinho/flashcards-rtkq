import {Button} from "../../../components/ui/button";
import {ControlledRadioGroup} from "../../../components/controlled/controlled-radioGroup";
import s from './RateLearnCard.module.scss'
import {JSX} from "react";
import {useForm} from "react-hook-form";
import {rateOptions} from "./rateOptions";

export type RateLearnCardValues = {
    grade: string
}

type Props = {
    onSubmit: (data: RateLearnCardValues) => void
}

export const RateLearnCard = ({onSubmit}: Props): JSX.Element => {

    const {control, handleSubmit} = useForm<RateLearnCardValues>({
        defaultValues:{grade: '1'}
    })

    return (
        <form className={s.root} onSubmit={handleSubmit(onSubmit)}>
            <ControlledRadioGroup
                className={s.radioGroup}
                control={control}
                name={'grade'}
                options={rateOptions}
            />
            <Button type={'submit'} fullWidth>
                Next Question
            </Button>
        </form>
    )
}