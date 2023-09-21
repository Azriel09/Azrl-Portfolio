import { Divider } from "@mui/material";
import "./projects-styles.scss";
import ProjectTab from "./project-tab";

export default function ProjectsContainer() {
  const projects = [
    {
      title: "RyoEx",
      tools: ["js", "react", "mongodb", "nodejs", "mui", "aws"],
      desc: "A project I made in the bootcamp, an exchange rate site with graphs that has a Login/Signup/Reset Password feature, financial news, and a dashboard for easy access of their chosen currencies once they logged in on RyoEx site. It uses mongoDB for online database. Frontend is deployed in Netlify while backend is deployed in AWS EC2",
      links: [
        "https://github.com/Azriel09/client",
        "https://ryoex-change.netlify.app",
      ],
      image:
        "https://lh3.googleusercontent.com/pw/AIL4fc-K7BN4nJ1oe6NryALXppxfnPiglEuGFd2vUFkgJ4LchqzLNA1O08zosZKL2nhi-dAy6wlFa-7gUzXtALNxV3cEgAq3on9gJ6i86fwu52VflAr2_aq038MIbOJb9Bud249vBK6cdC4xEQGXreAh_5HSJXNFicp-6FuO2M36jdi0xCzBplVdDxh3oDEVuavHhGzQQzDbiYRS8pVsf6riAQiOnvpBWXnoW_clYM6kTpWiLEz1MGn0d-zgRjv8AYHCPXMyqKOF0KnsbhSCARTM4iXbW5tuZypryJXud9NWTGsNdX3X5SisdWRdOw1zw1LHIPY9hBOtDCYyfKGBZtDHFqgCyaJdc5zbCu5UOVfWW7byCa8z9Eba7xFCPRS3COSfTVvmARlvEYQGRql_Sz4w-0jiyVkuRSByywFN8mrAVvuMT1QIgRdpPasCwD4RL6VG-Khneze3frpWKId6WNRTxTbQrfYqR-utJqLd5ObZRT7LD_CMZj6wNp0iuqrM4q7TSHbqc1A7JwN8MODPXYK4X5Imb_rs5_VNzLf-uF8yamiZU1LOr8y82Sq-eGNokoxds24dgZTdtXXB3seWJjDRIwx7ZSmUEPEAfykh2ubpm-CvDOz6s7M3S7BZjXUoF9bHDBrrQAuXv5HP59Aycbsas6zFmciiAoYtIbkWVbtfDjY1qqCETTS3AVMQujmGW6dmq92CExDd5VRLhpL3pLiyVBRCoUH_BrFDbEoPNzmuylpGFGikrQ0AzxvJSExF8_84QvV3glInNYKvdSzjmjASxdobOgmEarntFL7ZO6PzBY57SkdQizkDUWZu8iioL_PHzpY4xN1Ng4SISEwR-AQ2FRACXyuohXr5cu-KHQelPf0wuuGazUorIipZtYDxaVVnMUlRrf1spXE2jeaX3UxP7Q=w1862-h965-s-no?authuser=0",
    },
    {
      title: "Jhan Marmel's Gallery",
      tools: ["js", "html", "css", "bootstrap"],
      desc: "A personal gallery project I made during the bootcamp. It showcases my hobby to take pictures of everything and utilizes grid css in order to be displayed properly no matter what the viewer device is.",
      links: [
        "https://github.com/Azriel09/project-1",
        "https://azriel09.github.io/project-1/index.html",
      ],
      image:
        "https://lh3.googleusercontent.com/pw/AIL4fc8Tz3xGlK-wopGw-YtrR3tmepgo6cNoekl3taMOGC4oQW1qDQv504OKzSBnRiLv1sQMuoVVVlMxiAaacHY-1JC6n0BzWV9D14xIvCuEl_YgzI7aFOZ5szzoZwm8M9eByvpu5o_5-kWk8XszmJWS1WsxkAVVHodeoyXKDPZuHXWyo3w2nBGujPRtbNCUjlom7DK4H2vhcrHNYde3faF_nBqjfq56inNI9bIiHTWt2OCx0LNK2OdUbNEYi6zsT_P48ytuuaqdsj3AD3z-hr3sf12_BuyIwktSFFk0WTKRrVdZuA4NX9SFF3HeKcEWD0TvvMDGvk6URLuzw-sYK6ebLB19qxyQyuU_lfwmrtne8gF7vJXFdi9A3XetP-zbxyBK4HrOlFJZw6fLVYqs5Lm3ykZKs1QqM7A304CNJJY8g9_krTfPIFP4PfqJM02dbsCieEGup21L3qO4pvoDUE0bNpHCWXuNmkQraKIivTBOrl43glSrRXLFt3Wq4dbiVTAzMQnSRf67FADWwuMaVVWQ1uLuskSPkjZYMMkzZgZxv1bos_Rrliy83ZN-hU1-lirk9lM_RyfhHv2MCXWDxMdmcJv5boznz50v5J2Gh2sWwdwaqOsONk6qMUffq9eHWoFi-BMdobvs2NHuW_vVI3ICex6lJlwxDH4QXi_eLhr_PRokH3xn_WxCc0bAZxTDbydm-cZ08vVuBrP8uJ4JWuOgDucu1Nie-Rmy0AT1wQc40k3WcK5rCqERJSYr-r9OAsgnYcVfoVE62y2nA4MDL61hh0KI-zf_RnO3VbRwufQoKqUt2oGxspvNDGwWZkeNPuUBFV1aO1l5gEGUulCPJd24xBxRkyG8AE9ZWhD2t5qLw9g2LgXjLQXdZHn2MENmPAcHGWYFVltAPlAOLLdwW5iS-Q=w1716-h965-s-no?authuser=0",
    },
    {
      title: "Azriel URL Shortener",
      tools: ["js", "react", "mui", "sass", "mysql", "aws", "nodejs"],
      desc: "A URL shortener that uses React as Frontend and NodeJS Express as Backend. For the online database, I chose Amazon's RDS Aurora MySQL. Both Frontend and Backend are deployed in Netlify",
      links: [
        "https://github.com/Azriel09/Az_short",
        "https://az-short.netlify.app/",
      ],
      image:
        "https://lh3.googleusercontent.com/pw/AIL4fc9Ue1M9Cr5jaFzvqidodVUtlrwCdA7PrKiYZy_K53i8HbeqKaq27F6MVmk34rZb4iYknN9Qy-Csfsi1Oy8z7Azhfl9se2EjKDfEsc8I5OUpa8ZjgiaweTBmyF88y01D0qHGFMEfnJMszQZDnQs1t4MlhNnxZ8pyHevPHU3m2SRRg23c2wtp2b8JUKFNfhupgZGPAtsJkz4VunT82CiuO-jo-uYI_oroZhQ6Mf3gnAofmmPc-Xw2pyHypU4CVIm2M748-HPuxv1cDZzABYVZex3EftUK06ZXBobrb6nCwpYpXRJdOJZVbBJQF1dlbtItj0msLr5iHJMCJ50cXZktHsKauEAx5KkqLcuMm_j2cn1QH0Y8wmD8dxFlycqV3KsdS3SB_v2YTeaiwe0owTNxQl4LnJfQ5ttvkxolJeFduI6HX9Kaox99n551I06JvDUpelAPqXJrGZoW7SyZM41hyZyvkdypn-A7ZqIiocMHFqI_YZQVim8PWfwD76dDf1e99m_tPzJAm19pjy8lprjWi91OybfOuZin_AaB1fJ5hiiPsctn6khLzNkBFxfnLtjNFAAUDGV-SYcmsk43iRvmiYBsm9HirZphyqyttzbnvMgwHvIPcdG7lPSjERmUQGIKazLDvqkvUP9m2n4_8RqM-_f_uQBcUAH-_G0k7XRefI1UiN6N4t3zK5WcQi89F27kXS-F_B0Az4Kz6haCrEAqa5eCGfsWXPjGaCtusLskJFpIKg79r1AXVeXIfl_DRd6Nzm9V4N41xDxYJzbw82z_3uoySGNtXpgyXUWNrIuzEnS6Q1ivNs_yy0M5Oe1pyGiWJa6_FXmFc7OolnLyPyjV3mgmP1G4QbqLieUV8NnTtc1rygoW_kfqwm8Pb-DbwmWlXacpKnporJk-MBFqGa7qzw=w1716-h965-s-no?authuser=0",
    },
  ];
  return (
    <div className="projects-container">
      <div className="header"># Personal Projects</div>
      <Divider className="divider" />
      <div className="intro">
        Below is a selection of some recent projects that I have worked on. For
        more detail on everything that I have done, as well as what I am
        currently working on, check out my GitHub at{" "}
        <a href="https://github.com/Azriel09" target="blank">
          https://github.com/Azriel09
        </a>
      </div>
      <div className="projects-list">
        {" "}
        {projects.map((proj) => {
          return (
            <ProjectTab
              title={proj.title}
              tools={proj.tools}
              desc={proj.desc}
              links={proj.links}
              image={proj.image}
            />
          );
        })}
        {/* DISCORD BOT */}
      </div>
    </div>
  );
}
