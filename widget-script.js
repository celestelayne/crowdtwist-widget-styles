console.log("this works");

const selectHeaderText = () => {
  console.log("selecting");

  let questionText = document.querySelectorAll(".question-text");
  console.log(questionText.length, questionText);
};

const reloadWidgets = () => {
  if (window.CrowdTwist) return;

  let widgetCount = window.CrowdTwist.Widget._widgets.length;

  for (let i = widgetCount; i > 0; i--) {
    window.CrowdTwist.Widget.removeWidget(CrowdTwist.Widget._widgets[0]);
  }

  window.CrowdTwist.loadWidgets();

  selectHeaderText();
};
