import { useState } from "react";
import { KeyIcon } from "@heroicons/react/24/solid";

const AuthRight = () => {
  const [authMode, setAuthMode] = useState("SAAS");

  const AuthModes = {
    SAAS: [
      { href: "/dashboard", iconSrc: "/svg/github.svg", text: "Sign in with Github" },
      { href: "/dashboard", iconSrc: "/svg/bitbucket.svg", text: "Sign in with Bitbucket" },
      { href: "/dashboard", iconSrc: "/svg/azure-devops.svg", text: "Sign in with Azure DevOps" },
      { href: "/dashboard", iconSrc: "/svg/gitlab.svg", text: "Sign in with GitLab" },
    ],
    SELF_HOSTED: [
      { href: "/dashboard", iconSrc: "/svg/gitlab.svg", text: "Sign in with GitLab" },
      { href: "/dashboard", iconComponent: <KeyIcon className="w-5" />, text: "Sign in with SSO" },
    ],
  };

  const AuthButton = ({ href, iconSrc, text, iconComponent }) => (
    <a
      href={href}
      className="flex items-center w-full gap-3 p-2 border rounded-xl justify-center hover:bg-gray-100"
    >
      {iconSrc && <img src={iconSrc} alt={text} className="w-5" />}
      {iconComponent}
      {text}
    </a>
  );

  return (
    <div className="flex w-full max-w-[400px] md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        {/* Header Section */}
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src="/svg/logo.svg" alt="logo" />
            <span className="font-light">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          <div>
            <div className="bg-gray-100/70 border rounded-xl flex">
              <button
                className={`p-3 w-1/2 rounded-l-xl ${
                  authMode === "SAAS" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setAuthMode("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`p-3 w-1/2 rounded-r-xl ${
                  authMode === "SELF_HOSTED" ? "bg-[#1570EF] text-white" : ""
                }`}
                onClick={() => setAuthMode("SELF_HOSTED")}
              >
                Self Hosted
              </button>
            </div>
          </div>
        </div>
        {/* Authentication Options */}
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
              {AuthModes[authMode].map((auth, index) => (
                <AuthButton
                  key={index}
                  href={auth.href}
                  iconSrc={auth.iconSrc}
                  iconComponent={auth.iconComponent}
                  text={auth.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div>
        <span>
          By signing up you agree to the <b>Privacy Policy.</b>
        </span>
      </div>
    </div>
  );
};

export default AuthRight;
