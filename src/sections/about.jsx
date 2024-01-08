import React, { useEffect } from 'react';

function About() {
  // const records_wrap = document.querySelector(".records"); 
  // const records_numbers = document.querySelectorAll(".number"); 

  useEffect(() => {
    const checkScroll = (el) => {
      let rect = el.getBoundingClientRect();
      if (window.innerHeight >= rect.top + el.offsetHeight) return true;
      return false;
    }

    const skillsEffect = () => {
      const skillsWrap = document.querySelector(".skills");
      const skillsBars = document.querySelectorAll(".skill-progress");

      if (!skillsWrap || !skillsBars.length) return;

      const checkScroll = (element) => {
        const elementPosition = element.getBoundingClientRect().top;
        return elementPosition - window.innerHeight <= 0;
      };

      if (!checkScroll(skillsWrap)) return;

      skillsBars.forEach((skill) => (skill.style.width = skill.dataset.progress));
    };

    const handleScroll = () => {
      skillsEffect();
      // countUp();
    };

    // const countUp = () => {
    //   if (!checkScroll(records_wrap)) return;
    //   records_numbers.forEach((numb) => {
    //     const updateCount = () => {
    //       let currentNum = +numb.innerText;
    //       let maxNum = +numb.dataset.num;
    //       let speed = 100;
    //       const increment = Math.ceil(maxNum / speed);
    
    //       if (currentNum < maxNum) {
    //         numb.innerText = currentNum + increment;
    //         setTimeout(updateCount, 1);
    //       } else {
    //         numb.innerText = maxNum;
    //       }
    //     };
    
    //     setTimeout(updateCount, 400);
    //   });
    // }
    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = {
    aboutInfo: `
    👋 Hey, I'm Redouane DADDIOUAMER, a Master's student in Science and Technology of Information and Communication (STIC) with a keen interest in web and desktop development.
    <br /><br />
    🚀 For my thesis, I built "NTICShip," an internship management app using Laravel and Vue.js. Professionally, I freelanced on "Mahdara," a school management app with AWS deployment.
    <br /><br />
    🌐 In my DevOps internship at ValleyCom, I optimized services on AWS EC2 and ensured security with Cloudflare CDN.
    <br /><br />
    💡 Fluent in French, English, Arabic, and Berber, I enjoy coding (HTML, CSS, JavaScript, Laravel) and activities like sports, hiking, and photography.
    <br /><br />
    🌟 Let's explore the tech world together, where learning and innovation never stop!
    `,
    imagePaths: {
      points: "./img/shapes/points4.png",
      about: "./img/Main-image.png",
    },
  };


  return (
    <>
      <div className="about section" id="About">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Who Am I">About me</h3>
          </div>

          <div className="section-body grid-2">
            <div className="column-1">
              <h3 className="title-sm">Hello, I'm</h3>
              <p className="text" dangerouslySetInnerHTML={{ __html: data.aboutInfo }}></p>
            </div>

            <div className="column-2 image">
              <img src={data.imagePaths.points} className="points" alt="" />
              <img src={data.imagePaths.about} className="z-index" alt="" />
            </div>
          </div>
        </div>

        
      </div>
    </>
  )
}

export default About
