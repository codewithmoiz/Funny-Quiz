
function face1() {
    gsap.to(".face1", {
        duration: 3,
        x: 680,
        y: 50,
        onComplete: function () {
            Swal.fire({
                icon: "error",
                title: "Wrong Answer",
                text: "Better luck next-time",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    });
}

function face2() {
    gsap.to(".face2", {
        duration: 3,
        x: 675,
        y: -60,
        onComplete: function () {
            Swal.fire({
                icon: "error",
                title: "Wrong Answer",
                text: "Better luck next-time",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    });
}

function face3() {
    gsap.to(".face3", {
        duration: 3,
        x: 677,
        y: -160,
        onComplete: function () {
            Swal.fire({
                icon: "success",
                title: "Congratulations!",
                text: "Your answer is correct",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    });
}

function face4() {
    gsap.to(".face4", {
        duration: 3,
        x: 675,
        y: -260,
        onComplete: function () {
            Swal.fire({
                icon: "error",
                title: "Wrong Answer",
                text: "Better luck next-time",
                // footer: '<a href="#">Why do I have this issue?</a>'
              });
        }
    });
}

function resetFaces() {
    gsap.to(".face1, .face2, .face3, .face4", {
        duration: 2,
        x: 0,
        y: 0
    });
}

// Swal.fire({
//     icon: "error",
//     title: "Wrong Answer",
//     text: "Better luck next-time",
//     // footer: '<a href="#">Why do I have this issue?</a>'
//   });