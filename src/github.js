/**
 * GitHub API Helper for VastoWorm
 * Retrieves repository stats and commit history.
 */

export async function fetchGitHubData() {
  const repo = process.env.GITHUB_REPOSITORY; // format: "owner/repo"
  const token = process.env.GITHUB_TOKEN;

  // Local fallback mock data
  if (!repo || !token) {
    console.log("⚠️ No GITHUB_REPOSITORY or GITHUB_TOKEN environment variables found. Using mock GitHub data.");
    return {
      commitsCount: Math.random() > 0.5 ? 1 : 0,
      starsCount: 12,
      openIssuesCount: 3
    };
  }

  const headers = {
    Accept: "application/vnd.github.v3+json",
    Authorization: `Bearer ${token}`,
    "User-Agent": "VastoWorm-Virus-Tamagotchi"
  };

  try {
    // 1. Fetch Repository Details (stars, forks, open issues)
    const repoResponse = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!repoResponse.ok) {
      throw new Error(`Repo fetch failed with status: ${repoResponse.status}`);
    }
    const repoData = await repoResponse.json();

    // 2. Fetch Commits from the past hour
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);
    const sinceDate = oneHourAgo.toISOString();

    const commitsResponse = await fetch(`https://api.github.com/repos/${repo}/commits?since=${sinceDate}`, { headers });
    let commitsCount = 0;
    
    if (commitsResponse.ok) {
      const commitsData = await commitsResponse.json();
      if (Array.isArray(commitsData)) {
        commitsCount = commitsData.length;
      }
    } else {
      console.warn(`Commits fetch failed: ${commitsResponse.status}`);
    }

    return {
      commitsCount,
      starsCount: repoData.stargazers_count || 0,
      openIssuesCount: repoData.open_issues_count || 0
    };

  } catch (error) {
    console.error("❌ Error fetching GitHub API data:", error);
    // Fallback in case of API rate-limiting or network issues
    return {
      commitsCount: 0,
      starsCount: 0,
      openIssuesCount: 0
    };
  }
}
