var next = document.getElementsByClassName("next")[0]
var dot = document.querySelector('.dot:checked').value;

next.addEventListener('click', () => {
	console.log(next);
	var tmp = "s2";
	var dot2 = document.getElementById("s2");
	var dot1 = document.getElementById("s1");
	console.log(dot_next);

	dot_next.attr( 'checked', true );
});

function myFunction() {
    $("label").click(function () {
        $(this).toggleClass("active");
      });
}