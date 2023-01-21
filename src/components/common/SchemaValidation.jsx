import * as yup from 'yup'

const passwordRules = "";
// /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const SchemaValidation = yup.object().shape({
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

  age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password is not Secure" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match ")
    .required("Required"),
});

