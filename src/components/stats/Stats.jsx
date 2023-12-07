import React from "react";
import "./stats.css";
import GitHubCalendar from "react-github-calendar";

const Stats = () => {
  return (
    <section id="stats__container" className="section">
      <h2 className="section__title">Stats</h2>
      <span className="section__subtitle">My Github Stats</span>

      <div className="container__content container">
        <div id="calender-div" className="react-activity-calendar">
          <GitHubCalendar
            // style={{
              // 'font-size': "100%"
            // }}
            // blockSize= '12'
            username="ashishsen003"
            colorScheme="dark"
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
          />
        </div>
        <div id="stats-div">
          <a
            href="https://git.io/streak-stats"
            target="_blank"
            id="github-streak-stats-a-tag"
            >
            <img
              id="github-streak-stats"
              className="stats__img"
              src="https://github-readme-streak-stats.herokuapp.com?user=ashishsen003&theme=dark&hide_border=true"
              alt="GitHub Streak"
            />
          </a>

          <a
            href="https://github.com/anuraghazra/github-readme-stats"
            target="_blank"
            id="github-stats-card-a-tag"
            >
            <img
              id="github-stats-card"
              className="stats__img"
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=ashishsen003&theme=dark&show_icons=true"
            />
          </a>
        </div>

        <div id="github-lang-div">
          <a
            href="https://github.com/anuraghazra/convoychat"
            target="_blank"
            >
            <img
              id="github-top-langs"
              className="stats__img"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ashishsen003&theme=dark&langs_count=8&layout=compact"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Stats;