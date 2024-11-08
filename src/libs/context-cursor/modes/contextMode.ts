// @ts-nocheck
import { TweenLite } from "gsap";
import { getMoveIndex, isElHasProperty, getStyleProp } from "../chunks";
import propNames from "../propNames";

const modoContexto = (
  cursor: HTMLElement,
  props: CProps,
  elementosInterativos: NodeListOf<Element>
) => {
  const velocidadeParallax = {
    cursor: props.parallaxIndex,
    target: props.parallaxIndex * 1.5,
  };
  let estaEmHover: boolean = false;
  let alvoCursor: HTMLElement = null;

  const moverCursor = (e: MouseEvent) => {
    // Se o elemento não estiver sendo sobrevoado
    if (!estaEmHover) {
      TweenLite.to(cursor, props.transitionSpeed, {
        x: e.clientX - props.radius / 2,
        y: e.clientY - props.radius / 2,
      });
    } else {
      const borderRadius = Number(
        window.getComputedStyle(alvoCursor).borderRadius.slice(0, -2) as any
      );
      // Para o modo "LIFT"
      if (isElHasProperty(alvoCursor, propNames.lift)) {
        TweenLite.to(alvoCursor, props.transitionSpeed, {
          x: getMoveIndex(
            e.clientX,
            alvoCursor.getBoundingClientRect().left,
            alvoCursor.clientWidth,
            velocidadeParallax.target
          ),
          y: getMoveIndex(
            e.clientY,
            alvoCursor.getBoundingClientRect().top,
            alvoCursor.clientHeight,
            velocidadeParallax.target
          ),
          scale: 1.1,
          boxShadow: getStyleProp("--ghost-shadow"),
        });
        TweenLite.to(cursor, props.transitionSpeed, {
          filter: "blur(8px)",
          x:
            alvoCursor.getBoundingClientRect().left +
            (e.clientX -
              alvoCursor.getBoundingClientRect().left -
              alvoCursor.clientWidth / 2) /
              velocidadeParallax.cursor,
          y:
            alvoCursor.getBoundingClientRect().top +
            (e.clientY -
              alvoCursor.getBoundingClientRect().top -
              alvoCursor.clientHeight / 2) /
              velocidadeParallax.cursor,
          backgroundImage: `radial-gradient(circle at ${
            e.clientX - alvoCursor.getBoundingClientRect().left
          }px ${
            e.clientY - alvoCursor.getBoundingClientRect().top
          }px, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
        });
      } else {
        // Para o modo padrão "PARALLAX"
        TweenLite.to(cursor, props.transitionSpeed, {
          x:
            alvoCursor.getBoundingClientRect().left -
            (isElHasProperty(alvoCursor, propNames.noPadding)
              ? null
              : props.hoverPadding) +
            (isElHasProperty(alvoCursor, propNames.noParallax)
              ? 0
              : (e.clientX -
                  alvoCursor.getBoundingClientRect().left -
                  alvoCursor.clientWidth / 2) /
                velocidadeParallax.cursor),
          y:
            alvoCursor.getBoundingClientRect().top -
            (isElHasProperty(alvoCursor, propNames.noPadding)
              ? null
              : props.hoverPadding) +
            (isElHasProperty(alvoCursor, propNames.noParallax)
              ? 0
              : (e.clientY -
                  alvoCursor.getBoundingClientRect().top -
                  alvoCursor.clientHeight / 2) /
                velocidadeParallax.cursor),
          borderRadius:
            borderRadius *
            (isElHasProperty(alvoCursor, propNames.noPadding) ? 1 : 1.5),
          width:
            alvoCursor.clientWidth +
            (isElHasProperty(alvoCursor, propNames.noPadding)
              ? null
              : props.hoverPadding * 2),
          height:
            alvoCursor.clientHeight +
            (isElHasProperty(alvoCursor, propNames.noPadding)
              ? null
              : props.hoverPadding * 2),
        });
        // Para o "NO PARALLAX"
        if (!isElHasProperty(alvoCursor, propNames.noParallax)) {
          TweenLite.to(alvoCursor, props.transitionSpeed, {
            x: -getMoveIndex(
              e.clientX,
              alvoCursor.getBoundingClientRect().left,
              alvoCursor.clientWidth,
              velocidadeParallax.target
            ),
            y: -getMoveIndex(
              e.clientY,
              alvoCursor.getBoundingClientRect().top,
              alvoCursor.clientHeight,
              velocidadeParallax.target
            ),
          });
        }
      }
    }
  };

  const handleMouseOver = (e: MouseEvent) => {
    estaEmHover = true;
    alvoCursor = e.target as HTMLElement;
    const borderRadius = Number(
      window.getComputedStyle(alvoCursor).borderRadius.slice(0, -2) as any
    );

    if (isElHasProperty(alvoCursor, propNames.lift)) {
      cursor.classList.add("c-cursor-lift_active");
      TweenLite.to(cursor, props.transitionSpeed, {
        borderRadius: borderRadius,
        width: alvoCursor.clientWidth,
        height: alvoCursor.clientHeight,
        scale: 1.1,
      });
    } else {
      cursor.classList.add("c-cursor_active");
    }
  };

  const handleMouseOut = (e: MouseEvent) => {
    estaEmHover = false;
    cursor.classList.remove("c-cursor_active");
    cursor.classList.remove("c-cursor-lift_active");

    TweenLite.to(cursor, props.transitionSpeed, {
      x: e.clientX - props.radius / 2,
      y: e.clientY - props.radius / 2,
      width: props.radius,
      height: props.radius,
      borderRadius: "100px",
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0px)",
    });
    TweenLite.to(alvoCursor, props.transitionSpeed, {
      x: 0,
      y: 0,
      scale: 1,
      boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
    });
  };

  // Adicionando ouvintes de eventos
  document.addEventListener("mousewheel", (e: WheelEvent) => {
    handleMouseOut(e);
  });

  document.addEventListener("mousemove", (e: MouseEvent) => {
    moverCursor(e);
  });

  elementosInterativos.forEach((item) => {
    item.addEventListener("mouseenter", (e: MouseEvent) => {
      handleMouseOver(e);
    });
  });

  elementosInterativos.forEach((item) => {
    item.addEventListener("mouseleave", (e: MouseEvent) => {
      handleMouseOut(e);
    });
  });
};

export default modoContexto;
