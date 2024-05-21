import React from "react";
import { DashboardNumbersCard } from "../ui/github/cards";

const GithubPage = () => {
  return (
    <>
      <div className="w-full p-4 rounded">
        <div className="flex items-center justify-around gap-5">
          <DashboardNumbersCard
            message="Last request"
            value="29s"
            color="bg-green-300"
          />
          <DashboardNumbersCard
            message="Total requests"
            value="1.93m"
            color="bg-yellow-300"
          />
          <DashboardNumbersCard
            message="Total projects"
            value="228"
            color="bg-blue-300"
          />
          <DashboardNumbersCard
            message="Total issues"
            value="2.3k"
            color="bg-gray-300"
          />
        </div>
      </div>
    </>
  );
};

export default GithubPage;
