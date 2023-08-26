import Link from "next/link";
import IconGitHub from "../../../icons/IconGitHub";
import IconLinkedIn from "../../../icons/IconLinkedIn";

export const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="h-20 bg-zinc-800 px-2 py-6 text-slight-off-white">
          <div className="flex justify-center space-x-4">
            <div className="focus-within:text-blue-300 hover:text-blue-300">
              <Link
                href="https://github.com/dvidbowman"
                rel="norefferer"
                target="_blank"
              >
                <IconGitHub size={32} className="inline-block" />
              </Link>
            </div>

            <div className="focus-within:text-blue-300 hover:text-blue-300">
              <Link
                href="https://www.linkedin.com/in/david-bowman-41ba6a251/"
                rel="norefferer"
                target="_blank"
              >
                <IconLinkedIn size={32} className="inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
