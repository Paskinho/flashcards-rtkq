import {Button} from "../../../components/ui/button";
import {ControlledRadioGroup} from "../../../components/controlled/controlled-radioGroup";
import s from './RateLearnCard.module.scss'

export type RateLearnCardProps = {
    grade: string
}

export const RateLearnCard = () => {
    return (
        <form>
            <ControlledRadioGroup
                className={s.radioGroup}
            />
            <Button type={'submit'} fullWidth>
                Next Question
            </Button>

        </form>
    )
}