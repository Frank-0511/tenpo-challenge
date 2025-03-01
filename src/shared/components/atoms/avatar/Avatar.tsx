interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <figure className="px-4 pt-4 pb-2">
      <div className="avatar">
        <div className="w-20 h-20 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
          <img
            src={src || ""}
            alt={alt}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </figure>
  );
};
