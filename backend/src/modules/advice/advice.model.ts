import { BaseModel, Table, col, rel } from 'pangea-server';
// models
import { Person } from '../person/person.model';
import { Experience } from '../experience/experience.model';

@Table('advices')
export class Advice extends BaseModel {
  // relations
  @col.ForeignKey(() => Person) personId!: ModelId;
  @rel.BelongsTo(() => Person) person!: Person;
  @col.ForeignKey(() => Experience, { nullable: true }) experienceId!: ModelId | null;
  @rel.BelongsTo(() => Experience) experience!: Experience | null;
  // fields
  @col.Str({ maxLength: 'short' }) type!: string;
  @col.Text() content!: string;
}
