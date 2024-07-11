import React from "react";
import { homneScreen, profileScreen } from "./config/theme/global.theme";
import Spinner from "./components/loading/Spinner";

const Loading = () => (
  <main className={profileScreen}>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center m-3">
        <div role="status">
          <Spinner />
          <div className="mt-4 text-2xl text-white">
            <span>Loading</span>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Loading;
