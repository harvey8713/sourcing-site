import type { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="rounded-xl border border-border bg-surface p-6 text-center shadow-sm transition hover:shadow-md">
      {/* Avatar */}
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-secondary text-xl font-bold text-white">
        {member.initials}
      </div>

      {/* Name + Role */}
      <h3 className="mt-4 text-lg font-semibold text-text">{member.name}</h3>
      <p className="text-sm font-medium text-primary">{member.role}</p>

      {/* Bio */}
      {member.bio && (
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {member.bio}
        </p>
      )}
    </article>
  );
}
