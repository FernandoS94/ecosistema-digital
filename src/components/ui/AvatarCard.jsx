export function AvatarCard({ href, img, label, alt, disabled }) {
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
    <a href={href} className="avatar-circular" target="_blank" rel="noreferrer">
      <div className="avatar-circle">
        <img src={img} alt={alt} />
      </div>
      <span className="avatar-label">{label}</span>
    </a>
  );
}