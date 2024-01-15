import s from './sign-up.module.scss'
import { DevTool } from "@hookform/devtools";
import {useForm} from "react-hook-form";
import {z} from "zod";


const schema = z.object({
        email: z.string().email("Invalid email address").nonempty("Enter email"),
        password: z.string().nonempty("Enter password"),
        passwordConfirmation: z.string().nonempty("Confirm your password")
})
    .superRefine((data, ctx)=> {
            if (data.password !== data.passwordConfirmation) {
                    ctx.addIssue({
                            message: 'Password don`t match',
                            code: z.zodIssueCode.custom,
                            path: ['passwordConfirmation']
                    })
            }

    })


export const SignUp = () => {

     const {control, handleSubmit} = useForm({

     })

return (
    <>
    <DevTool control={control}/>
    </>
)
}