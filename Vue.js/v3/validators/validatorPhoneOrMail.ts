import validatorMail from "./validatorMail";
import validatorPhone from "./validatorPhone";

export default function validatorPhoneOrMail(val: string): boolean {
  return validatorMail(val) || validatorPhone(val);
}
