

import LoginForm from "./component/loginForm";

export default function Login() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
