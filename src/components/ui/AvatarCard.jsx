import { useAnalytics } from '../../hooks/useAnalytics';

export function AvatarCard({ href, img, label, alt, disabled }) {
  const { track } = useAnalytics();
  if (disabled) {
    return (
      <div className="avatar-circular avatar-disabled">
        <div className="avatar-circle">
          <img src={img} alt={alt} />
        </div>
        <span className="avatar-label">{label}</span>
      </div>
    );
  }

  return (
    <a href={href} className="avatar-circular" target="_blank" rel="noreferrer" onClick={() => track.clickAvatar(label)}>
      <div className="avatar-circle">
        <img src={img} alt={alt} />
      </div>
      <span className="avatar-label">{label}</span>
    </a>
  );
}