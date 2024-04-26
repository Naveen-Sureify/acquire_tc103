export class CreateCarrierDto {
  name?: string;
  carrier_config?: object;
  title?: string;
  access_code?: string;
  phoneno?: string;
  row_status?: number;
  carrier_unique_id?: string;
  carrier_access_token?: string;
  tango_remaining_balance?: number;
  user_session_id?: number;
  created_time?: string;
  modified_time?: string;
  address_line1?: string;
  address_line2?: string;
  address_city?: string;
  address_state?: number;
  zip?: string;
  image?: string;
  organization_id?: string;
  organization_access_token?: string;
  registration_flag?: number;
  signup_type?: number;
  client_id?: number;
  distribution?: number;
  carrier_display_name?: string;
}
