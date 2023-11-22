// Create a tab in the devtools area
chrome.devtools.panels.create(
  "Extension 4.",
  null,
  "html/panel.html",
  (panel) => {}
);

chrome.devtools.panels.elements.createSidebarPane("Extension 4 Rules",
  function(sidebar) {
    sidebar.setPage("html/sidebar.html");
    sidebar.setHeight("8ex");
  }
);