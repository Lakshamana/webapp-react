export type cardForm = {
  full_name: string,
  year: string,
  month: string,
  email: string,
  cpf: string,
}

export type pmDataType = {
  token: string;
  created_at: Date;
  updated_at: Date;
  email?: any;
  data?: any;
  storage_state: string;
  test: boolean;
  metadata?: any;
  callback_url?: any;
  last_four_digits: string;
  first_six_digits: string;
  card_type: string;
  first_name: string;
  last_name: string;
  month: number;
  year: number;
  address1?: any;
  address2?: any;
  city?: any;
  state?: any;
  zip?: any;
  country?: any;
  phone_number?: any;
  company?: any;
  full_name: string;
  eligible_for_card_updater: boolean;
  shipping_address1?: any;
  shipping_address2?: any;
  shipping_city?: any;
  shipping_state?: any;
  shipping_zip?: any;
  shipping_country?: any;
  shipping_phone_number?: any;
  issuer_identification_number: string;
  payment_method_type: string;
  errors: any[];
  fingerprint: string;
  verification_value: string;
  number: string;
}
