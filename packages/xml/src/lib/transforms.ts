import { get } from 'lodash';
import dayjs from 'dayjs';

export function concat(delimiter = '', ...args: any[]) {
  return args.filter((arg) => arg !== '').join(delimiter);
}

export const interpolate = (str: string, obj: any) => {
  const result = str.replace(/\${([^}]+)}/g, (k, prop: any) => {
    return get(obj, prop);
  });
  return result;
};

export const dobToAge = (birthDate: string): number => {
  const today = dayjs();
  let age = today.get('year') - dayjs(birthDate).get('year');
  const monthDiff = today.get('month') - dayjs(birthDate).get('month');

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.get('date') < dayjs(birthDate).get('date'))
  ) {
    age -= 1;
  }
  return age;
};

export const heightToInches = (feet: string, inches: string): number => {
  return Number(feet) * 12 + Number(inches);
};
