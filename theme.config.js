const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Jeongbong Seo.
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
      `}</style>
    </footer>
  ),
  titleSuffix: ' | Jeongbong Seo',
  darkMode: true,
  readMore: "More",
  navs: [
    {
      name: "GitHub",
      url: "https://github.com/jngbng",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jngbng",
    },
    {
      name: "Medium",
      url: "https://medium.com/@jngbng",
    }
  ],
}
