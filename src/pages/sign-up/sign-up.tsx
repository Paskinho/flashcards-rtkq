import {useSignUpMutation} from "../../services/auth/auth";
import { useNavigate } from "react-router-dom";
import {LoginArgs} from "../../services/auth/types";

export const signUpPage = () => {
    const [registration] = useSignUpMutation()
    const navigate = useNavigate()
    const handleRegistration = async (data: LoginArgs) => {
       return registration(data)
           .unwrap()
           .then(()=> navigate('/'))
           .catch(err => toast.error(err.data.message))
    }

}