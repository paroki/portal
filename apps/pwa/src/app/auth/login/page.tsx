import { signIn } from "@/utils/auth";

const LoginForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="email">email</label>
        <input id="email" type="text" name="email" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input id="password" type="password" name="password" />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </div>
  );
};

export default function LoginPage({}) {
  return (
    <div>
      <div>Gunakan akun google yang anda pakai di android/iphone anda!</div>
      <form>
        {process.env.NODE_ENV != "production" && <LoginForm />}

        <button
          type="submit"
          onClick={async () => {
            "use server";
            await signIn("google");
            return false;
          }}
        >
          Google
        </button>
      </form>
    </div>
  );
}
