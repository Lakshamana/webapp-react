import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  subtitle?: string, 
  description?: string,
  price?: string,
  description?: string,
}
