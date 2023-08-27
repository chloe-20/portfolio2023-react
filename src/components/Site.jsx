import React from "react";

const siteText = [
  {
    text: ["MAKE","SITE COMPLIANT WITH","WEBSTANDARD",],
    title: "웹 표준을 준수한 사이트 제작",
    code: "https://github.com/chloe-20/portfolio2023-vite",
    view: "https://portfolio2023-vite.netlify.app/",
    info: ["SITE CODING","PRODUCTION PERIOD : TWO DAYS","USE STACK : HTML5/CSS3, CSS VARIABLE, VITE",],    
  },
  {
    text: ["MAKE","SITE COMPLIANT WITH","REACT.JS",],
    title: "리액트를 이용한 사이트 제작",
    code: "https://github.com/chloe-20/portfolio2023-react",
    view: "https://portfolio2023-react.netlify.app/",
    info: ["SITE CODING","PRODUCTION PERIOD : TWO DAYS","USE STACK : HTML5/CSS3, CSS VARIABLE, REACT.JS",],
  },
  {
    text: ["MAKE","SITE COMPLIANT WITH","VUE.JS",],
    title: "뷰를 이용한 사이트 제작",
    code: "https://github.com/chloe-20/portfolio2023-vue",
    view: "https://portfolio2023-vue.netlify.app/",
    info: ["SITE CODING","PRODUCTION PERIOD : TWO DAYS","USE STACK : HTML5/CSS3, CSS VARIABLE, VUE.JS",],
  },
  {
    text: ["MAKE","SITE COMPLIANT WITH","NEXT.JS",],
    title: "넥스트를 이용한 사이트 제작",
    code: "https://github.com/chloe-20/portfolio2023-next",
    view: "https://portfolio2023-next.netlify.app/",
    info: ["SITE CODING","PRODUCTION PERIOD : TWO DAYS","USE STACK : HTML5/CSS3, CSS VARIABLE, NEXT.JS",],
  },
];

const Site = () => {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">SITE CODING <em>나의 작업물</em></h2>
        <div className="site__wrap">
          {siteText.map((site, key) => (
            <article className={`site__item s${key+1}`} key={key}>
              <span className="num">{key+1}.</span>
              <div className="text">
                <div>{site.text[0]}</div>
                <div>{site.text[1]}</div>
                <div>{site.text[2]}</div>
              </div>
              <h3 className="title">{site.title}</h3>
              <div className="btn">
                <a href={site.code}>CODE</a>
                <a href={site.view}>VIEW</a>
              </div>
              <div className="info">
                <span>{site.info[0]}</span>
                <span>{site.info[1]}</span>
                <span>{site.info[2]}</span>
              </div>
            </article>
          ))}          
        </div>
      </div>
    </section>
  );
};

export default Site;