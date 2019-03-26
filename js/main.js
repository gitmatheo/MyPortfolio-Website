document.addEventListener("DOMContentLoaded", function() {
  const project = document.querySelectorAll(".project");
  const projects = document.getElementById("projects");
  const about = document.querySelector(".about__container");
  const divider = document.querySelector(".divider__wrapper");
  const tech = [...document.querySelectorAll(".tech__wrapper")];

  // *************************
  // GSAP ANIMATIONS
  // *************************
  //Init ScrollMagic
  const controller = new ScrollMagic.Controller();
  //build a scene

  const aboutScene = new ScrollMagic.Scene({
    triggerElement: about,
    triggerHook: 0.6
  })
    .setTween(TweenMax.from(about, 1, { opacity: 0, x: -100 })) //addd class to project 01 .addIndicators
    .addTo(controller);

  const dividerScene = new ScrollMagic.Scene({
    triggerElement: divider,
    offset: -100
  })
    .setTween(TweenMax.from(divider, 1, { opacity: 0 })) //addd class to project 01
    .addTo(controller);

  const projectScene = new ScrollMagic.Scene({
    triggerElement: projects
  })
    .setTween(
      TweenMax.staggerFrom(project, 0.8, {
        cycle: { opacity: [0, 0], x: [-200, 200] }
      })
    )
    .addTo(controller);

  tech.forEach(e => {
    const techScene = new ScrollMagic.Scene({
      triggerElement: e,
      triggerHook: 0.7
    })
      .setTween(TweenMax.from(e, 0.5, { opacity: 0, y: 40 }))
      .addTo(controller);
  });

  // *************************
  // NAV CLOSE
  // *************************
  const checkbox = document.querySelector(".navigation__checkbox");
  const navItems = document.querySelectorAll(".navigation__item");
  const disableCheckbox = event => {
    checkbox.checked = false;
  };
  navItems.forEach(function(e) {
    e.addEventListener("click", disableCheckbox);
  });
});
