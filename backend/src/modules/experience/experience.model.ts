import { BaseModel, Table, col, rel } from 'pangea-server';
// models
import { CapstoneUser } from '../user/user.model';

@Table('capstone_experiences')
export class Experience extends BaseModel {
  // relations
  @col.ForeignKey(() => CapstoneUser) userId!: ModelId;
  @rel.BelongsTo(() => CapstoneUser) user!: CapstoneUser;
  // fields
  @col.Str({ maxLength: 'short' }) context!: string;
  @col.StrArray() emotions!: ColDefault<string[]>;
  @col.Text({ nullable: true }) dashboardData!: string | null;
  @col.Text({ nullable: true }) insights!: string | null;
  @col.Str({ nullable: true, maxLength: 'medium' }) suggestedAction!: string | null;
}
