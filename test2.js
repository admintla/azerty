fetch("https://hcm55preview.sapsf.eu/sf/logout?bplte_company=LVMHTT18", { mode: "no-cors" })
  .then(function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });
  })
  .then(function() {
    window.open("https://hcm55preview.sapsf.eu/login?company=LVMHTT6", "_blank");
  });
