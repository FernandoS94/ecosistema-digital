import { AvatarCard } from './AvatarCard';

export function AvatarCategory({ title, avatars, fullWidth }) {
  return (
    <div className={`categoria-section${fullWidth ? ' categoria-full-width' : ''}`}>
      <div className="categoria-header animate-on-scroll">
        <h3 className="categoria-titulo">{title}</h3>
      </div>
      <div className="avatares-grid-circular">
        {avatars.map((avatar) => (
          <AvatarCard key={avatar.label} {...avatar} />
        ))}
      </div>
    </div>
  );
}
