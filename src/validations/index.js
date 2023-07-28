import { ResponseError } from "../errors/response-error.js";

const validate = (schema, request) => {
  const result = schema.validate(request, {
    abortEarly: false,
    allowUnkown: false,
    errors: {
      wrap: {
        label: ""
      }
    }
  });

  if (result.error)
    throw new ResponseError({
      code: 403,
      message: "Validation Error",
      errors: formatMessageValidation(result.error.details)
    });

  return result.value;
};

const formatMessageValidation = (errors) => {
  const messages = {};
  errors.forEach((error) => {
    const label = error.context.label;
    const message = error.message;

    messages[label] = message;
  });

  return messages;
};

export default validate;
