import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";

const schema = z.object({
    password: z.string().nonempty("Enter a password")
})

type FormType = z.infer<typeof schema>

type Props = {
    onSubmit: (data: FormType) => void
}

export const NewPassword = ({onSubmit}: Props) => {

    const {control, handleSubmit} = useForm({
        mode: 'onSubmit',
        resolver: zodResolver(schema),
        defaultValues: {
            password: ''
        }
    })

    const handleFormSubmitted = handleSubmit

 return (
     <>
         <DevTool control={control}/>
     </>

 )
}