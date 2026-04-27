fetch("https://hcm55preview.sapsf.eu/sf/logout?bplte_company=", { mode: "no-cors" })
  .then(function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });
  })
  .then(function() {
    window.open("https://", "_blank");
  });
