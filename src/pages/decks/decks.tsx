import {DevTool} from "@hookform/devtools";
import {z} from "zod";
import {Page} from "../../components/ui/page";
import {useForm} from "react-hook-form";
import {Typography} from "../../components/ui/typography";
import {Modal} from "../../components/ui/modal";
import {Button} from "../../components/ui/button";
import s from './decks.module.scss'


const schema = z.object({})

type FormType = z.infer<typeof schema>

type DecksProps = {
    onSubmit: (data: FormType) => void
}


export const Decks = ({onSubmit}: DecksProps) => {


    return (
            <Page >
                <div className={s.page}>
                <Typography variant={'large'}>Decks list</Typography>
                <Button>Add New Pack</Button>
                <Modal>

                </Modal>
                </div>
            </Page>

    )
}