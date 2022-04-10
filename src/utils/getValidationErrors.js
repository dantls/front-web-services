export default function getValidationErrors(err) {
  let validationErrors;

  err.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}