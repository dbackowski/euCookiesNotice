describe("Test eu-cookies-notice", function() {
  describe("init without options (default options)", function() {
    it("show eu cookies law notice on page", function() {
      chai.assert.equal($("#eu-cookies-notice").is(":visible"), true)
      chai.assert.equal($("#eu-cookies-notice span").html(), 'Ta strona korzysta z ciasteczek. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.');
      chai.assert.equal($("#eu-cookies-notice a.btn").html(), 'Zamknij');
    });
  });

  describe("click button", function() {
    it("hide notice", function() {
      $('#eu-cookies-notice-accept').trigger('click');
      setTimeout(function() {
        chai.assert.equal($("#eu-cookies-notice").is(":visible"), false)
      }, 100);
    });
  });
});