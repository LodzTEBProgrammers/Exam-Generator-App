import validator from 'validator'; // Import całego modułu validator

export const examSchema = {
    name: {
        notEmpty: {
            errorMessage: "name cannot be empty"
        },
        isString: {
            errorMessage: "name must be a string"
        }
    },
    description: {
        optional: true,
        isString: {
            errorMessage: "description must be a string"
        }
    },
    dateFrom: {
        notEmpty: {
            errorMessage: "dateFrom cannot be empty"
        },
        custom: {
            options: (value) => validator.isISO8601(value),
            errorMessage: "dateFrom must be a valid ISO 8601 date"
        }
    },
    dateTo: {
        notEmpty: {
            errorMessage: "dateTo cannot be empty"
        },
        custom: {
            options: (value) => validator.isISO8601(value),
            errorMessage: "dateTo must be a valid ISO 8601 date"
        }
    },
    user_id: {
        notEmpty: {
            errorMessage: "user_id cannot be empty"
        },
        isInt: {
            errorMessage: "user_id must be an integer"
        }
    },
    status: {
        optional: true,
        isString: {
            errorMessage: "status must be a string"
        }
    },
    tasks: {
        optional: true,
        isArray: {
            errorMessage: "tasks must be an array"
        }
    },
    'tasks.*.name': {
        optional: true,
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "name length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "name cannot be empty"
        }
    },
    'tasks.*.a': {
        optional: true,
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "option a length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "option a cannot be empty"
        }
    },
    'tasks.*.b': {
        optional: true,
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "option b length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "option b cannot be empty"
        }
    },
    'tasks.*.c': {
        optional: true,
        isLength: {
            options: {
                min: 1,
                max: 200
            },
            errorMessage: "option c length must be between 1 and 200"
        },
        notEmpty: {
            errorMessage: "option c cannot be empty"
        }
    },
    'tasks.*.trueAnswer': {
        optional: true,
        isInt: {
            options: { min: 1, max: 3 },  // Assuming answers are numbered 1, 2, or 3
            errorMessage: "trueAnswer must be an integer between 1 and 3"
        },
        notEmpty: {
            errorMessage: "trueAnswer cannot be empty"
        }
    }
}
