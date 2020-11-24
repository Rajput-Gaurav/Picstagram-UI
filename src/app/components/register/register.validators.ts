// create custom validators for password:
// confirm Password validation:
export const passwordMatch = (formGroup) => {
  const password = formGroup.get("password");
  const confirmPassword = formGroup.get("confirmPassword");

  if (password.value !== confirmPassword.value) {
    // if error then:
    confirmPassword.setErrors({ passwordMatch: true });
  } else {
    // no error then return null:
    confirmPassword.setErrors(null);
  }
};

// symbol required validation:
export const mustContainSymbol = (control) => {
  if (control.hasError("required")) return null;
  if (
    control.hasError("minlength") &&
    control.errors.minlength.actualLength < 5
  ) {
    return null;
  }
  // control lvl validators:
  if (control.value.indexOf("@") > -1) {
    return null;
  } else {
    return { symbol: true };
  }
};
