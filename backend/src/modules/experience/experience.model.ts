import { BaseModel, Table, col, rel } from 'pangea-server';
// models
import { Person } from '../person/person.model';

@Table('experiences')
export class Experience extends BaseModel {
  // relations
  @col.ForeignKey(() => Person) personId!: ModelId;
  @rel.BelongsTo(() => Person) person!: Person;
  // fields
  @col.Str({ maxLength: 'short' }) context!: string;
  @col.StrArray() emotions!: ColDefault<string[]>;
  @col.Text({ nullable: true }) dashboardData!: string | null;
  @col.Text({ nullable: true }) insights!: string | null;
  @col.Str({ nullable: true, maxLength: 'medium' }) suggestedAction!: string | null;
}
