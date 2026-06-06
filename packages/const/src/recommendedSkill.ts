export enum RecommendedSkillType {
  Builtin = 'builtin',
  Klavis = 'klavis',
  ASAI = 'ASAI',
}

export interface RecommendedSkillItem {
  id: string;
  type: RecommendedSkillType;
}

export const RECOMMENDED_SKILLS: RecommendedSkillItem[] = [
  // Builtin skills
  { id: 'lobe-artifacts', type: RecommendedSkillType.Builtin },
  { id: 'lobe-user-memory', type: RecommendedSkillType.Builtin },
  { id: 'lobe-cloud-sandbox', type: RecommendedSkillType.Builtin },
  { id: 'lobe-task', type: RecommendedSkillType.Builtin },
  { id: 'lobe-agent-documents', type: RecommendedSkillType.Builtin },
  { id: 'lobe-message', type: RecommendedSkillType.Builtin },
  // ASAI skills
  { id: 'twitter', type: RecommendedSkillType.ASAI },
  // Klavis skills
  { id: 'gmail', type: RecommendedSkillType.Klavis },
  { id: 'google-drive', type: RecommendedSkillType.Klavis },
  { id: 'google-calendar', type: RecommendedSkillType.Klavis },
  { id: 'google-sheets', type: RecommendedSkillType.Klavis },
  { id: 'google-docs', type: RecommendedSkillType.Klavis },
  { id: 'slack', type: RecommendedSkillType.Klavis },
  { id: 'notion', type: RecommendedSkillType.Klavis },
  { id: 'github', type: RecommendedSkillType.Klavis },
  { id: 'youtube', type: RecommendedSkillType.Klavis },
  { id: 'jira', type: RecommendedSkillType.Klavis },
  { id: 'airtable', type: RecommendedSkillType.Klavis },
  { id: 'figma', type: RecommendedSkillType.Klavis },
];
