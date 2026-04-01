import { BaseModel, Table, col, rel } from 'pangea-server';
// models
import { Experience } from '../experience/experience.model';

@Table('advices')
export class Advice extends BaseModel {
  // relations
  @col.ForeignKey(() => Experience, { nullable: true }) experienceId!: ModelId | null;
  @rel.BelongsTo(() => Experience) experience!: Experience | null;
  // fields
  @col.Text() content!: string;
  @col.Str({ maxLength: 'short' }) type!: string;
}
