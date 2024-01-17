import {DevTool} from "@hookform/devtools";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Card} from "../../ui/card";
import {Typography} from "../../ui/typography";
import s from './sign-up.module.scss'
import {ControlledTextField} from "../../controlled/controlled-text-field";
import {Button} from "../../ui/button";
import {Link} from "react-router-dom";
import {omit} from "remeda";


const schema = z.object({
    email: z.string().email("Invalid email address").nonempty("Enter email"),
    password: z.string().nonempty("Enter password"),
    passwordConfirmation: z.string().nonempty("Confirm your password")
})
    // .superRefine((data, ctx) => {
    //     if (data.password !== data.passwordConfirmation) {
    //         ctx.addIssue({
    //             message: 'Password don`t match',
    //             code: z.zodIssueCode.custom,
    //             path: ['passwordConfirmation']
    //         })
    //     }
    // return data
    // })

type FormType = z.infer<typeof schema>

type SignUpProps = {
    onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
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

    const handleFormSubmitted = handleSubmit(data =>
        onSubmit(omit(data, ['passwordConfirmation']))
    )

    return (
        <>
            <DevTool control={control}/>
            <Card className={s.card}>
                <Typography variant={'large'} className={s.title}>
                    Sign Up
                </Typography>
                <form onSubmit={handleFormSubmitted} className={s.form}>
                        <ControlledTextField
                        name={'Email'}
                        control={control}
                        label={"Email"}
                        />
                    <ControlledTextField
                        name={'Name'}
                        control={control}
                        label={"Name"}
                    />
                        <ControlledTextField
                            name={"password"}
                            control={control}
                            label={"Password"}
                            type={"password"}
                        />
                        <ControlledTextField
                            name={"confirm password"}
                            control={control}
                            label={"Confirm Password"}
                            type={"password"}
                        />
                        <Button className={s.button} fullwidth type={'submit'}>
                            Sign Up
                        </Button>
                </form>
                <Typography className={s.caption} variant={'body2'}>
                    Already have account?
                </Typography>
                <Typography variant={'link1'} as={Link} to={"/login"} className={s.signInLink}>
                    Sign In
                </Typography>
            </Card>
        </>
    )
}