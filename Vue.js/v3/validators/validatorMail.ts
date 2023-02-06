const phoneOrMail = /^(\w+@\w+\.\w{2,})$/;

export default function validatorMail(val: string): boolean {
  return phoneOrMail.test(val.trim());
}
