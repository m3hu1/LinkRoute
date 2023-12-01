import React from "react";

interface RedirectTrackerProps {
  redirectData?: {
    url: string;
    status_code: number;
    redirects: {
      url: string;
      status_code: number;
    }[];
  } | null;
}

export default function RedirectTracker({
  redirectData,
}: RedirectTrackerProps) {
  return (
    <div className="redirect-tracker-container">
      {redirectData && (
        <div className="mt-10 redirect-results text-center">
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate underline">
            <a href={redirectData.url}>Final URL: {redirectData.url}</a>
          </h3>
          <h3 className="text-gradient_purple-blue font-extrabold glow-effect-animate">
            Status Code: {redirectData.status_code}
          </h3>
          <br></br>
          {redirectData.redirects.length > 0 && (
            <>
              <h2 className="text-gradient_blue-purple underline">
                Redirects:
              </h2>
              <ul className="grid grid-cols-1">
                {redirectData.redirects.map((redirect) => (
                  <li className="bg-transparent" key={redirect.url}>
                    {/* //     URL: {redirect.url}<br/>
                //     Status Code: {redirect.status_code}
                //   </li> */}
                    <div className="flex flex-col">
                      <span className="text-gradient_blue-purple font-bold">
                        URL:
                      </span>
                      <span className="underline text-gradient_blue-purple">
                        {redirect.url}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gradient_blue-purple font-bold">
                        Status Code:
                      </span>
                      <span className="text-gradient_blue-purple">
                        {redirect.status_code}
                      </span>
                    </div>
                    <div className="text-gradient_blue-purple">↓</div>
                  </li>
                ))}
              </ul>
              <ul className="grid grid-cols-1 gap-10">
                <li className="bg-transparent" key={redirectData.url}>
                  <div className="flex flex-col text-gradient_purple-blue">
                    <span className="font-bold">Final URL:</span>
                    <span className="underline">{redirectData.url}</span>
                  </div>
                  <div className="flex flex-col text-gradient_purple-blue">
                    <span className="font-bold">Status Code:</span>
                    <span>{redirectData.status_code}</span>
                  </div>
                </li>
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}
