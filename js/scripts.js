function Lengths(first, second, third) {
  this.length1 = first;
  this.length2 = second;
  this.length3 = third;
}

Lengths.prototype.allSides = function () {
  if ((this.length1 === this.length2) && (this.length1 === this.length3)) {
    return "equilateral";
  }
  else if ((this.length1 === this.length2) || (this.length1 === this.length3) || (this.length2 === this.length3)) {
    return "isoceles";
  }
  else if ((this.length1 !== this.length2) && (this.length1 !== this.length3) && (this.length2 !== this.length3)) {
    return "scalene";
  }
}


$(document).ready(function() {
  $("form#lengths").submit(function(event) {
    event.preventDefault();

    var inputLength1 = parseInt($("input#length1").val());
    var inputLength2 = parseInt($("input#length2").val());
    var inputLength3 = parseInt($("input#length3").val());

    var newLengths = new Lengths(inputLength1,inputLength2,inputLength3);

    $("input#length1").val("");
    $("input#length2").val("");
    $("input#length3").val("");



   $("#show-type").append(newLengths.allSides());
    // $(".triangle").append(<p>This is <span class="not"> a </span><span class="triangle"></span> triangle.</p>);
    // $("#show-type").text(newLengths);
    // $(".contact").click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    // });
  });
});
