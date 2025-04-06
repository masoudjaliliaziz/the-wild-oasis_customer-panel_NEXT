import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <div className="relative h-24 w-24 rounded-full overflow-hidden">
          <Image
            fill
            className="object-cover"
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            referrerPolicy="no-referrer"
          />
        </div>

        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
