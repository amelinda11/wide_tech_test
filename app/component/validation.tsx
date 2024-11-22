import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message";
import Alert from "./alert";
import styled from "styled-components";
import { Button } from "@nextui-org/react";

interface PersonalInformationFormValues {
    name    : string;
    password: string;
    email   : string;
    confirmPassword: string;
}

const PERSONAL_INFORMATION_FORM_DEFAULT_VALUES = {
    name    : '',
    password: '',
    email   : '',
    confirmPassword: ''
  } as PersonalInformationFormValues;
  

export default function Validation() {
    const methods = useForm<PersonalInformationFormValues>({
        defaultValues: PERSONAL_INFORMATION_FORM_DEFAULT_VALUES,
        mode: 'onBlur',
    });

    const {
        register,
        handleSubmit,
        trigger,
        watch,
        reset,
        formState: { errors },
    } = methods;

    const password = watch('password');

    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [personalName, setPersonalName] = useState<string>('');

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    const onSubmit = async (data: PersonalInformationFormValues) => {
        const isValid = await trigger();
        if (isValid) {
            setPersonalName(data.name);
            setShowAlert(true);
            reset();
        }
    };

    useEffect(() => {
        if (showAlert) {
          const timer = setTimeout(() => {
            setShowAlert(false);
          }, 7000); 
    
          return () => clearTimeout(timer);
        }
    }, [showAlert]);
    
    return (
        <StyledWrapperCard>
            {showAlert && (
                <Alert
                    message={`Hallo ${personalName}!`}
                    type="success"
                    onClose={handleCloseAlert}
                />
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="text-white flex flex-col gap-4">
                <div className="flex flex-col">
                    <label>Name</label>
                    <input 
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                        })}
                        className={errors.name ? 'error' : ''}

                    /> 
                    <ErrorMessage errors={errors} name="name" as="p" className="text-red-500 text-sm"/>
                </div>
               
                <div className="flex flex-col">
                    <label>Email</label>
                    <input 
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message:
                                    'Invalid email format, please use example@mail.com',
                            },
                        })}
                        className={errors.email ? 'error' : ''}

                    /> 
                    <ErrorMessage errors={errors} name="email" as="p" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Password</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 8, 
                                message: 'Password must be at least 8 characters long',
                            },
                        })}
                        className={errors.password ? 'error' : ''}
                    />
                    <ErrorMessage errors={errors} name="password" as="p" className="text-red-500 text-sm"/>
                </div>
                <div className="flex flex-col">
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    {...register('confirmPassword', {
                        required: 'Confirm Password is required',
                        validate: (value) =>
                        value === password || 'Passwords do not match',
                    })}
                    className={errors.confirmPassword ? 'error' : ''}
                    />
                    <ErrorMessage errors={errors} name="confirmPassword" as="p" className="text-red-500 text-sm" />
                </div>

                <Button fullWidth color="warning" type="submit">
                    Submit
                </Button> 
            </form>
        </StyledWrapperCard>
    )
}

const StyledWrapperCard = styled.div`
    padding: 40px;
    border: 2px solid #fff;
    border-radius: 13px;
    min-width: 500px;
    box-shadow: 4px 3px 19px 0px rgba(0,0,0,0.28);
    -webkit-box-shadow: 4px 3px 19px 0px rgba(0,0,0,0.28);
    -moz-box-shadow: 4px 3px 19px 0px rgba(0,0,0,0.28);

    @media (max-width: 768px) {
        min-width: 200px;
    }
`
