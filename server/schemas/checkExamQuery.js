import { isDate } from "util/types";

export const examSchema = {
    name: {
        notEmpty: {
            errorMessage: "name cannot be empty"
        },
        isString: {
            errorMessage: "name must be a string"
        }
    },
    date: {
        isDate: {
            errorMessage: "date must be provided in a right format"
        },
        notEmpty: {
            errorMessage: "date cannot be empty"
        },
        isString: {
            errorMessage: "date must be a string/date"
        }
    },
    dateFrom: {
        isDate: {
            errorMessage: "date must be provided in a right format"
        },
        notEmpty: {
            errorMessage: "dateFrom cannot be empty"
        },
        isString: {
            errorMessage: "dateFrom must be a string/date"
        }
    },
    dateTo: {
        isDate: {
            errorMessage: "date must be provided in a right format"
        },
        notEmpty: {
            errorMessage: "dateTo cannot be empty"
        },
        isString: {
            errorMessage: "dateTo must be a string/date"
        }
    },
    user: {
        notEmpty: {
            errorMessage: "user cannot be empty"
        },
        isString: {
            errorMessage: "user must be a string"
        }
    },
    tasks: {
        notEmpty: {
            errorMessage: "atleast one task is demanded"
        },
    },
    'tasks.*.name': {
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "name cannot be empty"
        },
    },
    'tasks.*.a': {
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "a cannot be empty"
        },
    },
    'tasks.*.b': {
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "b cannot be empty"
        },
    },
    'tasks.*.c': {
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "c cannot be empty"
        },
    },
    'tasks.*.trueAnswer': {
        notEmpty: {
            errorMessage: "right answer cannot be empty"
        },
    }
}