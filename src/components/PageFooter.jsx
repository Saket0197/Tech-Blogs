import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function PageFooter() {
  const { page, totalPages } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="py-4 mt-6 flex justify-around items center w-full dark:text-[#fff] border-t-2 border-t-[#bbaeaecb]">
      <div className="space-x-4">
        {page < totalPages && (
          <Button
            onclick={() => navigate({ search: `page=${page + 1}` })}
            buttonText={"Next"}
          />
        )}
        {page > 1 && (
          <Button
            onclick={() => navigate({ search: `page=${page - 1}` })}
            buttonText={"Previous"}
          />
        )}
      </div>

      <span className="font-semibold">
        Page {page} of {totalPages}
      </span>
    </div>
  );
}
