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
    <div className="border-b border-neutral-800 pb-12">
      <div className="flex flex-wrap justify-center text-center">
        <h2 className="text-4xl font-extralight pt-6">GitHub</h2>
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
                className="border-2 font-extralight border-neutral-400 text-white py-2 px-4 rounded-2xl"
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
                className="px-6 py-2 border-2 text-white rounded-2xl font-extralight hover:text-purple-700 hover:border-purple-700 transition-all duration-500"
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
