/**
 * Configuration for repository type
 *
 * Baca dari environment variable REPOSITORY_TYPE
 * Default: "inmemory"
 */

export type RepositoryType = "inmemory" | "neon";

export function getRepositoryType(): RepositoryType {
  const type = process.env.REPOSITORY_TYPE as RepositoryType;

  if (type === "neon") {
    return "neon";
  }

  return "inmemory"; // default
}

export const config = {
  repositoryType: getRepositoryType(),
  isNeon: () => getRepositoryType() === "neon",
  isInMemory: () => getRepositoryType() === "inmemory",
};
