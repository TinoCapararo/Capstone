import { BaseModel, Table, col } from 'pangea-server';

@Table('persons')
export class Person extends BaseModel {
  // fields
  @col.Str({ maxLength: 'short' }) nickname!: string;
  @col.Str({ maxLength: 'short' }) fullname!: string;
}
