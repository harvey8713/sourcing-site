/** LinkedIn post content types */
export type PostFormat = 'text' | 'carousel' | 'poll' | 'question';

export type PostStatus = 'draft' | 'pending_review' | 'approved' | 'scheduled' | 'published';

export interface PostDraft {
  id: string;
  title: string;
  content: string;
  format: PostFormat;
  pillar: string;
  status: PostStatus;
  created: string;
  scheduledFor?: string;
  carouselSlides?: string[];
  imagePrompt?: string;
  notes?: string;
}

export interface TopicBrief {
  title: string;
  hook: string;
  reason: string;
  pillar: string;
  angle: string;
}

export interface WeeklyPlan {
  weekOf: string;
  topics: TopicBrief[];
}

export interface EngagementSuggestion {
  postTitle: string;
  postUrl?: string;
  commentResponses: { trigger: string; response: string }[];
  suggestedDM: string;
}
