var pJS = function(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 }
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance
    }),
    (i.fn.retinaInit = function() {
      i.retina_detect && window.devicePixelRatio > 1
        ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0))
        : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed =
          i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance =
          i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance =
          i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance =
          i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width =
          i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size =
          i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance =
          i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function() {
      i.canvas.ctx = i.canvas.el.getContext("2d");
    }),
    (i.fn.canvasSize = function() {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener("resize", function() {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina &&
                ((i.canvas.w *= i.canvas.pxratio),
                (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable ||
                (i.fn.particlesEmpty(),
                i.fn.particlesCreate(),
                i.fn.particlesDraw(),
                i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function() {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function() {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function(e, a, t) {
      if (
        ((this.radius =
          (i.particles.size.random ? Math.random() : 1) *
          i.particles.size.value),
        i.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = i.particles.size.anim.speed / 100),
          i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var s =
            e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          null != e.value.r &&
            null != e.value.g &&
            null != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (i.particles.opacity.random ? Math.random() : 1) *
        i.particles.opacity.value),
        i.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = i.particles.opacity.anim.speed / 100),
          i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
        case "top":
          n = { x: 0, y: -1 };
          break;
        case "top-right":
          n = { x: 0.5, y: -0.5 };
          break;
        case "right":
          n = { x: 1, y: -0 };
          break;
        case "bottom-right":
          n = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          n = { x: 0, y: 1 };
          break;
        case "bottom-left":
          n = { x: -0.5, y: 1 };
          break;
        case "left":
          n = { x: -1, y: 0 };
          break;
        case "top-left":
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x),
          (this.vy = n.y),
          i.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5),
          (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var r = i.particles.shape.type;
      if ("object" == typeof r) {
        if (r instanceof Array) {
          var c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if ("image" == this.shape) {
        var o = i.particles.shape;
        (this.img = {
          src: o.image.src,
          ratio: o.image.width / o.image.height
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == i.tmp.img_type &&
            null != i.tmp.source_svg &&
            (i.fn.vendors.createSvgImg(this),
            i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function() {
      var e = this;
      if (null != e.radius_bubble) var a = e.radius_bubble;
      else a = e.radius;
      if (null != e.opacity_bubble) var t = e.opacity_bubble;
      else t = e.opacity;
      if (e.color.rgb)
        var s =
          "rgba(" +
          e.color.rgb.r +
          "," +
          e.color.rgb.g +
          "," +
          e.color.rgb.b +
          "," +
          t +
          ")";
      else
        s =
          "hsla(" +
          e.color.hsl.h +
          "," +
          e.color.hsl.s +
          "%," +
          e.color.hsl.l +
          "%," +
          t +
          ")";
      switch (
        ((i.canvas.ctx.fillStyle = s), i.canvas.ctx.beginPath(), e.shape)
      ) {
        case "circle":
          i.canvas.ctx.arc(e.x, e.y, a, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          i.canvas.ctx.rect(e.x - a, e.y - a, 2 * a, 2 * a);
          break;
        case "triangle":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - a,
            e.y + a / 1.66,
            2 * a,
            3,
            2
          );
          break;
        case "polygon":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - a / (i.particles.shape.polygon.nb_sides / 3.5),
            e.y - a / 0.76,
            (2.66 * a) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          i.fn.vendors.drawShape(
            i.canvas.ctx,
            e.x - (2 * a) / (i.particles.shape.polygon.nb_sides / 4),
            e.y - a / 1.52,
            (2 * a * 2.66) / (i.particles.shape.polygon.nb_sides / 3),
            i.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == i.tmp.img_type) var n = e.img.obj;
          else n = i.tmp.img_obj;
          n &&
            i.canvas.ctx.drawImage(
              n,
              e.x - a,
              e.y - a,
              2 * a,
              (2 * a) / e.img.ratio
            );
      }
      i.canvas.ctx.closePath(),
        i.particles.shape.stroke.width > 0 &&
          ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color),
          (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width),
          i.canvas.ctx.stroke()),
        i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function() {
      for (var e = 0; e < i.particles.number.value; e++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value)
        );
    }),
    (i.fn.particlesUpdate = function() {
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        if (i.particles.move.enable) {
          var t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == a.opacity_status
              ? (a.opacity >= i.particles.opacity.value &&
                  (a.opacity_status = !1),
                (a.opacity += a.vo))
              : (a.opacity <= i.particles.opacity.anim.opacity_min &&
                  (a.opacity_status = !0),
                (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == a.size_status
              ? (a.radius >= i.particles.size.value && (a.size_status = !1),
                (a.radius += a.vs))
              : (a.radius <= i.particles.size.anim.size_min &&
                  (a.size_status = !0),
                (a.radius -= a.vs)),
            a.radius < 0 && (a.radius = 0)),
          "bounce" == i.particles.move.out_mode)
        )
          var s = {
            x_left: a.radius,
            x_right: i.canvas.w,
            y_top: a.radius,
            y_bottom: i.canvas.h
          };
        else
          s = {
            x_left: -a.radius,
            x_right: i.canvas.w + a.radius,
            y_top: -a.radius,
            y_bottom: i.canvas.h + a.radius
          };
        switch (
          (a.x - a.radius > i.canvas.w
            ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h))
            : a.x + a.radius < 0 &&
              ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h
            ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w))
            : a.y + a.radius < 0 &&
              ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case "bounce":
            a.x + a.radius > i.canvas.w
              ? (a.vx = -a.vx)
              : a.x - a.radius < 0 && (a.vx = -a.vx),
              a.y + a.radius > i.canvas.h
                ? (a.vy = -a.vy)
                : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray("grab", i.interactivity.events.onhover.mode) &&
            i.fn.modes.grabParticle(a),
          (isInArray("bubble", i.interactivity.events.onhover.mode) ||
            isInArray("bubble", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.bubbleParticle(a),
          (isInArray("repulse", i.interactivity.events.onhover.mode) ||
            isInArray("repulse", i.interactivity.events.onclick.mode)) &&
            i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var n = e + 1; n < i.particles.array.length; n++) {
            var r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r),
              i.particles.move.attract.enable &&
                i.fn.interact.attractParticles(a, r),
              i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function() {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h),
        i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        i.particles.array[e].draw();
      }
    }),
    (i.fn.particlesEmpty = function() {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function() {
      cancelRequestAnimFrame(i.fn.checkAnimFrame),
        cancelRequestAnimFrame(i.fn.drawAnimFrame),
        (i.tmp.source_svg = void 0),
        (i.tmp.img_obj = void 0),
        (i.tmp.count_svg = 0),
        i.fn.particlesEmpty(),
        i.fn.canvasClear(),
        i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function(e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r =
          i.particles.line_linked.opacity -
          n /
            (1 / i.particles.line_linked.opacity) /
            i.particles.line_linked.distance;
        if (r > 0) {
          var c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")"),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function(e, a) {
      var t = e.x - a.x,
        s = e.y - a.y;
      if (Math.sqrt(t * t + s * s) <= i.particles.line_linked.distance) {
        var n = t / (1e3 * i.particles.move.attract.rotateX),
          r = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= n), (e.vy -= r), (a.vx += n), (a.vy += r);
      }
    }),
    (i.fn.interact.bounceParticles = function(e, a) {
      var t = e.x - a.x,
        i = e.y - a.y;
      Math.sqrt(t * t + i * i) <= e.radius + a.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function(e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; t < e; t++)
        i.particles.array.push(
          new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h
          })
        ),
          t == e - 1 &&
            (i.particles.move.enable || i.fn.particlesDraw(),
            (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function(e) {
      i.particles.array.splice(0, e),
        i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function(e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("bubble", i.interactivity.events.onhover.mode)
      ) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s =
            1 -
            (l = Math.sqrt(a * a + t * t)) /
              i.interactivity.modes.bubble.distance;
        function n() {
          (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
        }
        if (l <= i.interactivity.modes.bubble.distance) {
          if (s >= 0 && "mousemove" == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                (c = e.radius + i.interactivity.modes.bubble.size * s) >= 0 &&
                  (e.radius_bubble = c);
              } else {
                var r = e.radius - i.interactivity.modes.bubble.size,
                  c = e.radius - r * s;
                e.radius_bubble = c > 0 ? c : 0;
              }
            var o;
            if (
              i.interactivity.modes.bubble.opacity != i.particles.opacity.value
            )
              if (
                i.interactivity.modes.bubble.opacity > i.particles.opacity.value
              )
                (o = i.interactivity.modes.bubble.opacity * s) > e.opacity &&
                  o <= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = o);
              else
                (o =
                  e.opacity -
                  (i.particles.opacity.value -
                    i.interactivity.modes.bubble.opacity) *
                    s) < e.opacity &&
                  o >= i.interactivity.modes.bubble.opacity &&
                  (e.opacity_bubble = o);
          }
        } else n();
        "mouseleave" == i.interactivity.status && n();
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("bubble", i.interactivity.events.onclick.mode)
      ) {
        if (i.tmp.bubble_clicking) {
          (a = e.x - i.interactivity.mouse.click_pos_x),
            (t = e.y - i.interactivity.mouse.click_pos_y);
          var l = Math.sqrt(a * a + t * t),
            v = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          v > i.interactivity.modes.bubble.duration &&
            (i.tmp.bubble_duration_end = !0),
            v > 2 * i.interactivity.modes.bubble.duration &&
              ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        function p(a, t, s, n, r) {
          if (a != t)
            if (i.tmp.bubble_duration_end)
              null != s &&
                ((o =
                  a +
                  (a -
                    (n -
                      (v * (n - a)) / i.interactivity.modes.bubble.duration))),
                "size" == r && (e.radius_bubble = o),
                "opacity" == r && (e.opacity_bubble = o));
            else if (l <= i.interactivity.modes.bubble.distance) {
              if (null != s) var c = s;
              else c = n;
              if (c != a) {
                var o =
                  n - (v * (n - a)) / i.interactivity.modes.bubble.duration;
                "size" == r && (e.radius_bubble = o),
                  "opacity" == r && (e.opacity_bubble = o);
              }
            } else
              "size" == r && (e.radius_bubble = void 0),
                "opacity" == r && (e.opacity_bubble = void 0);
        }
        i.tmp.bubble_clicking &&
          (p(
            i.interactivity.modes.bubble.size,
            i.particles.size.value,
            e.radius_bubble,
            e.radius,
            "size"
          ),
          p(
            i.interactivity.modes.bubble.opacity,
            i.particles.opacity.value,
            e.opacity_bubble,
            e.opacity,
            "opacity"
          ));
      }
    }),
    (i.fn.modes.repulseParticle = function(e) {
      if (
        i.interactivity.events.onhover.enable &&
        isInArray("repulse", i.interactivity.events.onhover.mode) &&
        "mousemove" == i.interactivity.status
      ) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t),
          n = { x: a / s, y: t / s },
          r = clamp(
            (1 / (o = i.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(s / o, 2) + 1) *
              o *
              100,
            0,
            50
          ),
          c = { x: e.x + n.x * r, y: e.y + n.y * r };
        "bounce" == i.particles.move.out_mode
          ? (c.x - e.radius > 0 && c.x + e.radius < i.canvas.w && (e.x = c.x),
            c.y - e.radius > 0 && c.y + e.radius < i.canvas.h && (e.y = c.y))
          : ((e.x = c.x), (e.y = c.y));
      } else if (
        i.interactivity.events.onclick.enable &&
        isInArray("repulse", i.interactivity.events.onclick.mode)
      )
        if (
          (i.tmp.repulse_finish ||
            (i.tmp.repulse_count++,
            i.tmp.repulse_count == i.particles.array.length &&
              (i.tmp.repulse_finish = !0)),
          i.tmp.repulse_clicking)
        ) {
          var o = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            l = i.interactivity.mouse.click_pos_x - e.x,
            v = i.interactivity.mouse.click_po
            