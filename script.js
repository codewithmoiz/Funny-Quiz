var face_1 = document.querySelector(".face1");
var face_2 = document.querySelector(".face2");
var face_3 = document.querySelector(".face3");
var face_4 = document.querySelector(".face4");
function face1() {
    gsap.to(face_1, {
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
    gsap.to(face_2, {
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
    gsap.to(face_3, {
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
    gsap.to(face_4, {
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

function resetTheFacesOfDevil() {
    gsap.to(face_1,face_2,face_3,face_4, {
        duration: 2,
        x: 0,
        y: 0
    });
}