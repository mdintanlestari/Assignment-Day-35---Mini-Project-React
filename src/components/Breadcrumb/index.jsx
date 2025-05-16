import React from "react";
import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <div>
      <ol className="flex">
        <li>
          <Link to=" / ">Home</Link>
          {pathname.length > 0 && " / "}
        </li>

        {pathname.map((value, index) => {
          const to = " / " + pathname.slice(0, index + 1).join(" / ");

          const isLast = index === pathname.length - 1;
          return (
            <li key={index}>
              {isLast ? (
                <span>{value}</span>
              ) : (
                <>
                  <Link to={to}>{value}</Link>
                  {" / "}
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Breadcrumb;
