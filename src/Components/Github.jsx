import React, { useState, useEffect } from "react";
import axios from "axios";

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [visibleRepos, setVisibleRepos] = useState(3); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/13nico01/repos")
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const loadMoreRepos = () => {
    setVisibleRepos(repos.length);
  };

  return (
    <div className="border-b border-neutral-800 mb-20">
      <div className="flex flex-wrap justify-center text-center">
        <h2 className="text-4xl font-extralight pt-4">GitHub</h2>
      </div>

      {loading ? (
        <div className="flex justify-center py-4">Loading...</div>
      ) : error ? (
        <div className="flex justify-center py-4 text-red-500">
          Error: {error.message}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center mt-8 gap-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {repos.slice(0, visibleRepos).map((repo) => (
              <li
                key={repo.id}
                className="bg-neutral-900 text-white p-6 rounded-md shadow-md"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:underline"
                >
                  {repo.name}
                </a>
                <p className="mt-2 text-neutral-400">{repo.description}</p>
              </li>
            ))}
          </ul>

          {visibleRepos < repos.length && (
            <div className="flex justify-center mt-6">
              <button
                onClick={loadMoreRepos}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Github;
