import * as yup from "yup";

// const passwordRules = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const signUpValidation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  firstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: yup
    .string()
    .min(6, "Too Short!")
    // .matches(passwordRules, { message: "Password is not Secure" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match ")
    .required("Required"),
});

export const loginValidation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});
