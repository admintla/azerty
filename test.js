fetch("https://hcm55preview.sapsf.eu/sf/logout?bplte_company=LVMHTT18", { mode: "no-cors" })
  .then(function() {
    return new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });
  })
  .then(function() {
    window.open("https://azjvwrftk.accounts.ondemand.com/saml2/idp/sso?sp=https://www.successfactors.com/LVMHTT6&idp=https://azjvwrftk.accounts.ondemand.com", "_blank");
  });
