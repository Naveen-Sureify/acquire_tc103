export class CreateUserSessionDto {
  user_id?: number;
  login_time?: string;
  logout_time?: string;
  login_ip?: string;
  browser?: string;
  OS?: string;
  platform?: 'A' | 'I' | 'W';
  device_id?: string;
  device_token?: string;
  last_activity_time?: string;
  expiry_duration?: number;
  row_status?: number;
  created_time?: string;
  modified_time?: string;
  access_token?: string;
  carrier_id?: number;
  headers_json_data?: string;
  location?: JSON;
}
