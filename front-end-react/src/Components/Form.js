import { useRef } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

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
            <div className="row mb-3">
                <div className="col form-validate">
                    <div className="input-group">
                        <span className="input-group-text">@</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username: *"
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

            <div className="row  mb-3">
                <div className="col form-validate">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Email: *"
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
                        <input
                            type="password"
                            id="input-password"
                            className="form-control"
                            placeholder="Password: *"
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
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat password: *"
                            {...register("repeatpassword", {
                                validate: value => value === password.current || "The passwords do not match"
                            })}
                        />
                        {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col form-validate">
                    <input
                        className="form-control"
                        placeholder="First name *"
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

            <div className="row mb-3">
                <div className="col form-validate">
                    <input
                        className="form-control"
                        placeholder="Last name *"
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

            <div className="row mb-3">
                <div className="col form-validate">
                    <select className="form-select">
                        <option defaultValue hidden>Select your country:</option>
                        <option value="1">Latvia</option>
                        <option value="2">Lithuania</option>
                        <option value="3">Estonia</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col form-validate">
                    <div className="form-check py-2">
                        <input className="form-check-input" type="checkbox" value="" id="termsInput" {...register("termsInput", {
                            required: "You must agree to register!"
                        })}
                    />
                    {errors.termsInput && <p>{errors.termsInput.message}</p>}
                        <label className="form-check-label" htmlFor="termsInput">
                            I agree to the <NavLink to="/">Terms & Conditions</NavLink> *
                        </label>
                    </div>
                    <div className="form-check py-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Subscribe to our awesome newsletter
                        </label>
                    </div>
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