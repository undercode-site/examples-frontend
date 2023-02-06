const phoneOrMail = /^(?:\+?\d{11,12}d?)$/;

export default function validatorPhone(val: string): boolean {
  return phoneOrMail.test(val.replaceAll(/[ ()-]/g, ''));
}
