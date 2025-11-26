import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `ProfileAvatar`.
 */
export type ProfileAvatarProps =
  SliceComponentProps<Content.ProfileAvatarSlice>;

/**
 * Component for "ProfileAvatar" Slices.
 */
const ProfileAvatar: FC<ProfileAvatarProps> = ({ slice }) => {
  const { primary, slice_type, variation } = slice || {};
  return (
    <section
      className="flex flex-col items-center gap-2 py-6"
      data-slice-type={slice_type}
      data-slice-variation={variation}
    >
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-stroke">
        <Image
          src={primary.avatar_image.url || "/profile-default.webp"}
          alt={primary.avatar_image.alt || primary.username || "avatar"}
          width={112}
          height={112}
        />
      </div>
      <h1 className="text-base">{primary.username}</h1>
    </section>
  );
};

export default ProfileAvatar;
