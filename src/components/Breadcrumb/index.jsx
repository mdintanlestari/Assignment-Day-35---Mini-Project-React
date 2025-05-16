import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Breadcrumb() {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center h-10 px-6 my-6 text-sm font-medium text-center text-white bg-blue-600 rounded-2xl w-60">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:underline hover:text-blue-300">
            Home
          </Link>
          {pathname.length > 0 && (
            <span className="mx-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          )}
        </li>

        {pathname.map((value, index) => {
          const to = "/" + pathname.slice(0, index + 1).join("/");
          const isLast = index === pathname.length - 1;

          return (
            <li key={index} className="flex items-center space-x-2">
              {!isLast ? (
                <>
                  <span
                    to={to}
                    className="capitalize hover:underline hover:text-blue-300"
                  >
                    {value}
                  </span>
                  <span className="mx-2">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </>
              ) : (
                <span className="text-gray-300 capitalize">{value}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
