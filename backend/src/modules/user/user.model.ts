import { User, Table, col } from 'pangea-server';

@Table('capstone_users')
export class CapstoneUser extends User {
  // fields
  @col.Str({ maxLength: 'short' }) nickname!: string;
  @col.Str({ maxLength: 'short' }) fullname!: string;
  @col.Str({ nullable: true, maxLength: 'medium' }) image!: string | null;
}
