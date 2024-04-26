import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';

@Entity({ name: 'users' })
export class User {
  constructor(_params: CreateUserDto) {}

  @PrimaryGeneratedColumn()
  id!: number;

  // @Column({ default: null, nullable: true }) invitation_type?: number; // int(11)
  @Column({ default: null, nullable: true }) name?: string; // varbinary(2550)
  @Column({ default: null, nullable: true }) email?: string; // varbinary(2550) aes_encrypt(\"admin@sureify.com\", '$salt')
  @Column({ default: null, nullable: true }) password?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) agency_id?: number; // int(11)
  // @Column({ default: null, nullable: true }) agent_code?: string; // varbinary(2550)
  @Column({ default: null, nullable: true }) user_type?: number; // int(11)
  // @Column({ default: null, nullable: true }) phone_number?: string; // varbinary(2550)
  @Column({ default: null, nullable: true }) status?: number; // int(11)
  @Column({ default: null, nullable: true }) login_attempts?: number; // int(11)
  @Column({ default: null, nullable: true }) last_login?: string; // datetime
  @Column({ default: null, nullable: true }) active_status?: number; // int(11)
  @Column({ default: 1 }) row_status?: 0 | 1; // tinyint(1)
  @Column({ default: null, nullable: true }) user_unique_id?: string; // varbinary(2550)
  // @Column({ default: null, nullable: true }) fb_access_token?: string; // varbinary(2550)
  // @Column({ default: null, nullable: true }) last_fb_sync_date?: string; // datetime
  @Column({ default: null, nullable: true }) access_token_error?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) fb_flag?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) confirm_status?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) onboard_activity?: number; // int(11)
  // @Column({ nullable: true, type: 'json' }) onboarding_tracking?: object; // json
  // @Column({ default: null, nullable: true }) otp?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) otp_sent_time?: string; // datetime
  @Column({ default: null, nullable: true }) user_session_id?: number; // int(11)
  @Column({ default: () => 'CURRENT_TIMESTAMP' }) created_time?: Date; // datetime
  @Column({ default: null, onUpdate: 'CURRENT_TIMESTAMP' })
  modified_time?: Date; // timestamp
  // @Column({ default: null, nullable: true }) random_user_id?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) validic_token_response?: string; // varbinary(2550)
  // @Column({ default: null, nullable: true }) validic_access_token?: string; // varbinary(2550)
  // @Column({ default: null, nullable: true }) password_randomid?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) password_reset_date?: string; // datetime
  // @Column({ default: null, nullable: true }) user_timezone?: string; // varchar(50)
  // @Column({ default: null, nullable: true }) timezone_name?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) endorsement_delivery?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) amendment_acceptance?: number; // tinyint(4)
  // @Column({ default: null, nullable: true }) agent_id?: number; // int(11)
  // @Column({ default: null, nullable: true }) socotra_policy_holder_locator?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) socotra_policy_locator?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) auth_code?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) auth_code_sent_time?: string; // datetime
  // @Column({ default: null, nullable: true }) carrier_consumer_id?: string; // varchar(255)
  // @Column({ default: null, nullable: true }) last_updated?: string; // datetime
  // @Column({ default: null, nullable: true }) is_agency_admin?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) archive_status?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) reassign_status?: number; // tinyint(1)
  // @Column({ default: null, nullable: true }) policy_holder_id?: string; // varbinary(2550)
  // @Column({ default: null, nullable: true }) unique_id?: string; // varchar(100)
  @Column({ default: null, nullable: true }) type_of_user?: string; // varchar(255)

  @Column({ default: 1, nullable: false })
  carrier_id!: number;

  static async createPasswordHash(str: string): Promise<string> {
    return bcrypt.hash(str, 1);
  }

  @BeforeInsert()
  async hashPassword(): Promise<boolean> {
    if (!this.password) return false;
    this.password = await User.createPasswordHash(this.password);
    return true;
  }
}
