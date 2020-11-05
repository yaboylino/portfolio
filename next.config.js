module.exports = {
  env: {
    URL: "http://localhost:3000"
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" },
      "/portfolio": { page: "/portfolio" },
      "/contact": { page: "/contact" }
    }
  }
}
