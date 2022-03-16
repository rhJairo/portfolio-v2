import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Animations() {
  React.useLayoutEffect(() => {
    let tl = gsap.timeline({ delay: 0.3 });
    tl.to(".bg-1", { scaleX: 1, duration: 0.2 })
      .to(".bg-7", {
        scaleX: 1,
        duration: 0.2,
        transformOrigin: "right center",
      })
      .from(".welcome", { x: -2000, duration: 0.2 }, "text")
      .to(".words", { opacity: 1, duration: 0.1 })
      .to("nav", { opacity: 1, duration: 0.1 })
      .to(".welcome", { x: 2000, opacity: 0, duration: 0.2, delay: 0.6 })
      .to(".bg-1", { scaleX: 0, duration: 0.2 })
      .to(".bg-7", {
        scaleX: 0,
        duration: 0.2,
        transformOrigin: "left center",
      });

    gsap.registerPlugin(ScrollTrigger);

    //projects title
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project--title",
        start: "10% bottom",
        end: "40% ",
        toggleActions: "play reset play reset",
        // markers: true,
        // scrub: true
      },
    });
    tl2
      .from(".line-project", { scaleX: 0, transformOrigin: "center" })
      .from(".project--title", { y: 200, opacity: 0 }, "text");

    //about title
    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about--title",
        start: "top bottom",
        // markers: true,
        scrub: 2,
      },
    });
    tl3.from(".about--title", { x: -500, opacity: 0 }, "text");

    //project images
    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".p-wrap",
        start: "center bottom",
        toggleActions: "play reset play reset",
        // markers: true
      },
    });
    tl4.from(
      ".thumbnail-image, .hover--content",
      { duration: 0.2, y: 600 },
      "text"
    );

    //about text
    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about--content",
        start: "top bottom",
        toggleActions: "play reset play reset",
        // markers: true
      },
    });
    tl5
      .to(".bg-3", { scaleX: 1, duration: 0.2 })
      .to(".bg-4", {
        scaleX: 1,
        duration: 0.2,
        transformOrigin: "right center",
      })
      .to(".bg-5", { scaleX: 1, duration: 0.2 })
      .to(".bg-6", {
        scaleX: 1,
        duration: 0.2,
        transformOrigin: "right center",
      })
      .to(".about--description", { opacity: 1, duration: 0.1 })
      .to(".bg-3", { scaleX: 0, duration: 0.2 })
      .to(".bg-4", { scaleX: 0, duration: 0.2 })
      .to(".bg-5", { scaleX: 0, duration: 0.2 })
      .to(".bg-6", { scaleX: 0, duration: 0.2 });

    let cursor = document.querySelectorAll(".cursor"),
      follower = document.querySelectorAll(".cursor-follower");

    let posX = 0,
      posY = 0;

    let mouseX = 0,
      mouseY = 0;

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;

          gsap.set(follower, {
            css: {
              left: posX - 12,
              top: posY - 12,
            },
          });

          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      }
    );

    function mouseMovement(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    document.addEventListener("mousemove", mouseMovement);

    // const links = document.querySelectorAll('.link')

    // function addActiveClass() {
    //     cursor.addClass("active");
    //     follower.addClass("active");
    // }
    // function removeActiveClass() {
    //     cursor.removeClass("active");
    //     follower.removeClass("active");
    // }

    // links.forEach(element => {
    //     element.addEventListener("mouseenter", addActiveClass)
    // })

    // links.forEach(element => {
    //     element.addEventListener("mouseleave", removeActiveClass)
    // })

    const NUM_BALLS = 10;
    const MAX_VELOCITY = 4;
    const MIN_SIZE = 100;
    const MAX_SIZE = 120;

    class Ball {
      constructor(
        height,
        width,
        maxVelocity = MAX_VELOCITY,
        minSize = MIN_SIZE,
        maxSize = MAX_SIZE
      ) {
        // Set starting coordinates.
        this.x = this.random(0, width);
        this.y = this.random(0, height);

        // Set ball velocity.
        this.velX = this.random(-maxVelocity, maxVelocity);
        this.velY = this.random(-maxVelocity, maxVelocity);

        // Set ball color.
        var rgb = [
          this.random(0, 100),
          this.random(0, 100),
          this.random(0, 255),
        ];
        this.color = "rgb(" + rgb.join(",") + ")";

        // Set ball size.
        this.size = this.random(minSize, maxSize);
      }

      random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
      }

      update() {
        if (this.x + this.size >= width) {
          this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
          this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
          this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
          this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
      }
    }

    // Refresh the screen.
    function loop(width, height, ctx, balls) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fillRect(0, 0, width, height);

      for (var i = 0, j = balls.length; i < j; i++) {
        balls[i].draw(ctx);
        balls[i].update();
      }

      requestAnimationFrame(loop.bind(window, width, height, ctx, balls));
    }

    // Setup the canvas.
    var width = window.innerWidth;
    var height = window.innerHeight;

    var canvas = document.querySelector("canvas");
    canvas.height = height;
    canvas.width = width;

    // Create the balls.
    var balls = [];
    while (balls.length < NUM_BALLS) {
      balls.push(new Ball(height, width));
    }

    // Call the loop function to get this party started!
    var ctx = canvas.getContext("2d");
    loop(width, height, ctx, balls);

    return function cleanup() {
      tl.kill();
      tl2.kill();
      tl3.kill();
      tl4.kill();
      tl5.kill();
      document.removeEventListener("mousemove", mouseMovement);
      // document.removeEventListener("mouseenter", addActiveClass)
      // document.removeEventListener("mouseleave", removeActiveClass)
    };
  }, []);

  return (
    <>
        <canvas></canvas>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>
    </>
  );
}

export default Animations;
