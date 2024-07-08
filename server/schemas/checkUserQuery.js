import { checkSchema } from "express-validator";

export const userSchema = {
    email: {
        notEmpty: {
            errorMessage: "Email cannot be empty"
        },
        isEmail: {
            errorMessage: "Enter a valid email address"
        },
        normalizeEmail: true
    },
    first_name: {
        notEmpty: {
            errorMessage: "First name cannot be empty"
        },
        isString: {
            errorMessage: "First name must be a string"
        },
        trim: true,
        escape: true
    },
    last_name: {
        notEmpty: {
            errorMessage: "Last name cannot be empty"
        },
        isString: {
            errorMessage: "Last name must be a string"
        },
        trim: true,
        escape: true
    },
    password: {
        notEmpty: {
            errorMessage: "Password cannot be empty"
        },
        isLength: {
            options: { min: 8 },
            errorMessage: "Password must be at least 8 characters long"
        }
    },
    date_of_birth: {
        notEmpty: {
            errorMessage: "Date of birth cannot be empty"
        },
        isISO8601: {
            errorMessage: "Date of birth must be a valid date"
        }
    },
    address: {
        notEmpty: {
            errorMessage: "Address cannot be empty"
        },
        isString: {
            errorMessage: "Address must be a string"
        },
        trim: true,
        escape: true
    }
}
