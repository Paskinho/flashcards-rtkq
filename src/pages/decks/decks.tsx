import {DevTool} from "@hookform/devtools";
import {z} from "zod";
import {Page} from "../../components/ui/page";
import {useForm} from "react-hook-form";
import {Typography} from "../../components/ui/typography";
import {Modal} from "../../components/ui/modal";
import {Button} from "../../components/ui/button";
import s from './decks.module.scss'
import {ControlledTextField} from "../../components/controlled/controlled-text-field";
import {zodResolver} from "@hookform/resolvers/zod";


const schema = z.object({})

type FormType = z.infer<typeof schema>

type DecksProps = {
    onSubmit: (data: FormType) => void
}


export const Decks = ({onSubmit}: DecksProps) => {

    const { control, handleSubmit } = useForm<FormType>({
        resolver: zodResolver(schema),
        defaultValues: {
            isPrivate: false,
            name: '',
        },
    })

    return (
        <Page>
            <div className={s.page}>
                <Typography variant={'large'}>Decks list</Typography>
                <Button>Add New Pack</Button>
                <Modal>

                </Modal>
                <ControlledTextField
                    name={'search'}
                    control={control}
                    type={'search'}
                />
            </div>
        </Page>

    )
}