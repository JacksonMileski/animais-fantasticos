export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  function handOutsideClick(event) {
    console.log(element);
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, '');
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handOutsideClick);
      });
      callback();
    }
  }

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handOutsideClick));
    });
    element.setAttribute(outside, '');
  }
}
