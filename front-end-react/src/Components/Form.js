import React, { useRef } from "react";
import { useForm } from "react-hook-form";

function Form() {
    const { 
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data, event) => {
        event.preventDefault();
        alert(JSON.stringify(data));
    };

    const password = useRef({});
    password.current = watch("password", "");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col form-validate">
                    <label htmlFor="username" className="form-label">Username: *</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text">@</span>
                        <input
                            type="text"
                            className="form-control"
                            {...register("username", {
                                required: "Username is required",
                                minLength: {
                                    value: 5,
                                    message: "Min length is 5"
                                }
                            })} />
                    </div>
                    {errors.username && <p>{errors.username.message}</p>}
                </div>
            </div>

            <div className="row">
                <div className="col form-validate">
                    <label htmlFor="email" className="form-label">Email: *</label>
                    <input
                        className="form-control"
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: "Invalid email address"
                            }
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
            </div>

            <div className="row">
                <div className="col form-validate">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password: *</label>
                        <input
                            type="password"
                            id="input-password"
                            className="form-control"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters long"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Password must be no more than 20 characters long"
                                }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="repeat-password" className="form-label">Repeat your password: *</label>
                        <input
                        
                            type="password"
                            className="form-control"
                            {...register("repeatpassword", {
                                validate: value => value === password.current || "The passwords do not match"
                            })}
                        />
                        {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col form-validate">
                    <label htmlFor="firstName" className="form-label">First Name: *</label>
                    <input
                        className="form-control"
                        {...register("firstName", {
                            required: "First name is required",
                            minLength: {
                                value: 2,
                                message: "Min length is 2"
                            },
                            pattern: {
                                value: /[a-z]/gi,
                                message: "Forbidden symbols"
                            }
                        })}
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
            </div>

            <div className="row">
                <div className="col form-validate">
                    <label htmlFor="lastName" className="form-label">Last Name: *</label>
                    <input
                        className="form-control"
                        {...register("lastName", {
                            required: "Last name is required",
                            minLength: {
                                value: 2,
                                message: "Min length is 2"
                            },
                            pattern: {
                                value: /[a-z]/gi,
                                message: "Forbidden symbols"
                            }
                        })}
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
            </div>

            <div className="row">
                <div className="col text-center">
                    <button type="submit" className="btn main-page-btn my-3">Sign up!</button>
                </div>
            </div>
        </form>
    )
}

export default Form;