import { BaseModel, Table, col, rel } from 'pangea-server';
// models
import { Experience } from '../experience/experience.model';

@Table('capstone_advices')
export class Advice extends BaseModel {
  // relations
  @col.ForeignKey(() => Experience) experienceId!: ModelId;
  @rel.BelongsTo(() => Experience) experience!: Experience;
  // fields
  @col.Text() content!: string;
  @col.Str({ maxLength: 'short' }) type!: string;
}
