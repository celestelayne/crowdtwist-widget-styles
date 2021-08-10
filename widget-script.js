console.log("this works");

const reloadWidgets = () => {
  if (window.CrowdTwist) return;

  let widgetCount = window.CrowdTwist.Widget._widgets.length;

  for (let i = widgetCount; i > 0; i--) {
    window.CrowdTwist.Widget.removeWidget(CrowdTwist.Widget._widgets[0]);
  }

  window.CrowdTwist.loadWidgets();
};
