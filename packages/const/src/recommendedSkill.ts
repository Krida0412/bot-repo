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
  // Klavis skills — dibatasi ke 3 (Klavis free tier max 3 instance/akun)
  { id: 'instagram', type: RecommendedSkillType.Klavis },
  { id: 'google-drive', type: RecommendedSkillType.Klavis },
  { id: 'notion', type: RecommendedSkillType.Klavis },
];
