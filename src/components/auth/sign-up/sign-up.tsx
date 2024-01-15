import {DevTool} from "@hookform/devtools";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './sign-up.module.scss'
import {ControlledTextField} from "../../controlled/controlled-text-field";


const schema = z.object({
    email: z.string().email("Invalid email address").nonempty("Enter email"),
    password: z.string().nonempty("Enter password"),
    passwordConfirmation: z.string().nonempty("Confirm your password")
})
    .superRefine((data, ctx) => {
        if (data.password !== data.passwordConfirmation) {
            ctx.addIssue({
                message: 'Password don`t match',
                code: z.zodIssueCode.custom,
                path: ['passwordConfirmation']
            })
        }

    })

type FormType = z.infer<typeof schema>

type SignUpProps = {
    onSubmit: (data: FormType) => void
}


export const SignUp = ({onSubmit}: SignUpProps) => {

    const {control, handleSubmit} = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    })

    const handleFormSubmitted = handleSubmit(onSubmit)

    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant={'large'}>
                    Registration
                </Typography>
                <form onSubmit={handleFormSubmitted}>
                    <div>
                        <ControlledTextField
                        name={'email'}
                        control={control}
                        placeholder={'Enter email'}
                        label={"email"}
                        />
                        <ControlledTextField
                            name={"password"}
                            control={control}
                            placeholder={"Password"}
                            label={"Password"}
                            type={"password"}
                        />
                        <ControlledTextField
                            name={"confirm password"}
                            control={control}
                            placeholder={"Confirm Password"}
                            label={"Confirm Password"}
                            type={"password"}
                        />
                    </div>
                </form>
            </Card>
        </>
    )
}