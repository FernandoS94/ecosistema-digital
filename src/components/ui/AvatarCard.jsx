export function AvatarCard({ href, img, label, alt }) {
  return (
    <a href={href} className="avatar-circular" target="_blank" rel="noreferrer">
      <div className="avatar-circle">
        <img src={img} alt={alt} />
      </div>
      <span className="avatar-label">{label}</span>
    </a>
  );
}
