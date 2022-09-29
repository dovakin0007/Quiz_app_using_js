let question;
let form;
let res;
let qno;
let score = 0;
let qid;
var checkboxarray = [];
var a = 0;
var k = 0;



const questions = [{
        id: 1,
        title: 'WWW stands for ?',
        options: [
            'World Whole Web',
            'Wide World Web',
            'Web World Wide',
            'World Wide Web'
        ],
        answer: '3'

    },
    {
        id: 2,

        title: 'Which of the following are components of Central Processing Unit (CPU) ?',
        options: [
            'Arithmetic logic unit, Mouse',
            'Arithmetic logic unit, Control unit',
            'Arithmetic logic unit, Integrated Circuits',
            'Control Unit, Monitor'
        ],
        answer: '1'
    },

    {
        id: 3,
        title: 'Which among following first generation of computers had ?',
        options: [
            'Vaccum Tubes and Magnetic Drum',
            'Integrated Circuits',
            'Magnetic Tape and Transistors',
            'All of above'
        ],
        answer: '0'

    },
    {
        id: 4,
        title: 'Where is RAM located ?',
        options: [
            'Expansion Board',
            'External Drive',
            'Mother Board',
            'All of above'
        ],
        answer: '2'

    },
    {
        id: 5,
        title: 'If a computer has more than one processor then it is known as ?',
        options: [
            'Uniprocess',
            'Multiprocessor',
            'Multithreaded',
            'Multiprogramming'
        ],
        answer: '1'

    },
    {
        id: 6,
        title: 'If a computer provides database services to other, then it will be known as ?',
        options: [
            'Web server',
            'Application server',
            'Database server',
            'FTP server'
        ],
        answer: '2'

    },
    {
        id: 7,
        title: 'Full form of URL is ?',
        options: [
            'Uniform Resource Locator',
            'Uniform Resource Link',
            'Uniform Registered Link',
            'Unified Resource Link'
        ],
        answer: '0'

    },
    {
        id: 8,
        title: 'In which of the following form, data is stored in computer ?',
        options: [
            'Decimal',
            'Binary',
            'HexaDecimal',
            'Octal'
        ],
        answer: '1'

    },
    {
        id: 9,
        title: 'Which level language is Assembly Language ?',
        options: [
            'high-level programming language',
            'medium-level programming language',
            'low-level programming language',
            'machine language'
        ],
        answer: '2'

    },
    {
        id: 10,
        title: 'Documents, Movies, Images and Photographs etc are stored at a ?',
        options: [
            'Application Sever',
            'Web Sever',
            'Print Server',
            'File Server'
        ],
        answer: '3'

    }
];
var newquestions = shuffle(questions);

var correctAnswer = new Map();
var userAnswer = new Map();

newquestions.forEach((question) => {
    correctAnswer.set(question.id, question.answer);
    userAnswer.set(question.id, null);
})

// correctAnswer.forEach((question, answer) => {
//     console.log(question, answer);

// })

function shouldLoad() {

    document.getElementById("ans1").innerHTML = newquestions[a].options[0];
    document.getElementById("ans2").innerHTML = newquestions[a].options[1];
    document.getElementById("ans3").innerHTML = newquestions[a].options[2];
    document.getElementById("ans4").innerHTML = newquestions[a].options[3];
    document.getElementById("question").innerHTML = newquestions[a].title
}

function checkAnswer() {
    try {

        // if (document.querySelector('input[name="op"]:checked').value == newquestions[a].answer) {
        //     console.log("True")
        //     a += 1
        //     userAnswer.set(newquestions[a].id, chechk)
        //     uncheck()
        //     shouldLoad()
        // } else {
        //     a += 1

        //     console.log("False");
        //     userAnswer.set(newquestions[a].id, chechk)
        //     uncheck();
        //     shouldLoad();
        //     checkboxarray[a] = document.querySelector('input[name="op"]:checked').value;

        // }

        if (document.querySelector('input[name="op"]:checked')) {
            let x = document.querySelector('input[name="op"]:checked').value
            console.log(x)
            userAnswer.set(newquestions[a].id, x)
            a += 1
            shouldLoad();
            userAnswer.get(newquestions[a].id) == null ? uncheck() : false;

            console.log(userAnswer);
        } else {
            a += 1
            shouldLoad();
        }

    } catch (e) {

        checkScore()
        console.log(score)
        console.log("score" + score);
        console.log(e.message);

        document.getElementById("startstop").value = "Stop";
        document.getElementById("startstop").innerHTML = "Start";
        document.getElementById("X").style.display = "none";
        var oldscore = score;
        a = 0;
        document.getElementById("scr").style.display = "block";
        document.getElementById("s").innerHTML = "Score is " + oldscore;

    }
    console.log(userAnswer);
}


function uncheck() {
    Array.from(document.querySelectorAll('input[name="op"]:checked'), input => input.checked = false);
}

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;


    while (currentIndex != 0) {


        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;


        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function changeTest() {
    if (document.getElementById("startstop").value === "Start") {
        document.getElementById("startstop").value = "stop";
        document.getElementById("startstop").innerHTML = "Stop";
        document.getElementById("X").style.display = "block";
        document.getElementById("scr").style.display = "none";
        k += 1
        startClock(1);
        if (k > 1) {
            location.href = "./Exampage.html"
        }

    } else if (document.getElementById("startstop").value === "stop") {
        document.getElementById("startstop").value = "Start";
        document.getElementById("startstop").innerHTML = "Start";
        document.getElementById("X").style.display = "none";
        checkScore();
        startClock(0)


        document.getElementById("scr").style.display = "block";
        document.getElementById("s").innerHTML = "Score is " + score;
    }


}



function previous() {
    try {
        a -= 1
        document.getElementById("ans1").innerHTML = newquestions[a].options[0];
        document.getElementById("ans2").innerHTML = newquestions[a].options[1];
        document.getElementById("ans3").innerHTML = newquestions[a].options[2];
        document.getElementById("ans4").innerHTML = newquestions[a].options[3];
        document.getElementById("question").innerHTML = newquestions[a].title
        if (userAnswer.get(newquestions[a].id) == 0) {
            document.getElementById("op1").checked = true;
            document.getElementById("op1").checked

        } else if (userAnswer.get(newquestions[a].id) == 1) {
            document.getElementById("op2").checked = true;
            console.log("2")
            document.getElementById("op2").checked
        } else if (userAnswer.get(newquestions[a].id) == 2) {
            document.getElementById("op3").checked = true;
            console.log("3")
            document.getElementById("op3").checked
        } else if (userAnswer.get(newquestions[a].id) == 3) {
            document.getElementById("op4").checked = true;
            console.log(document.getElementById("op4").checked)
            console.log("4")
        } else {
            console.log("null")
            console.log(userAnswer.get(newquestions[a].id))



        }
    } catch (e) {
        console.log(score);
        a = 0;


    }
}

function checkScore() {
    newquestions.forEach((x) => {
        if (correctAnswer.get(x.id) === userAnswer.get(x.id)) {
            score += 1

        } else {
            score += 0
        }
    })

}

function next() {
    document.getElementById("ans1").innerHTML = newquestions[a].options[0];
    document.getElementById("ans2").innerHTML = newquestions[a].options[1];
    document.getElementById("ans3").innerHTML = newquestions[a].options[2];
    document.getElementById("ans4").innerHTML = newquestions[a].options[3];
    document.getElementById("question").innerHTML = newquestions[a].title
    if (userAnswer.get(newquestions[a].id) == 0) {
        document.getElementById("op1").checked = true;
        document.getElementById("op1").checked

    } else if (userAnswer.get(newquestions[a].id) == 1) {
        document.getElementById("op2").checked = true;
        console.log("2")
        document.getElementById("op2").checked
    } else if (userAnswer.get(newquestions[a].id) == 2) {
        document.getElementById("op3").checked = true;
        console.log("3")
        document.getElementById("op3").checked
    } else if (userAnswer.get(newquestions[a].id) == 3) {
        document.getElementById("op4").checked = true;
        console.log(document.getElementById("op4").checked)
        console.log("4")
    } else {
        console.log("null")
        console.log(userAnswer.get(newquestions[a].id))

    }
}

function startClock(no) {
    var mins = 0.5;
    var time = mins * 60;


    var countDownE = document.getElementById("countDown")
    var newno = no
    var interval = setInterval(updateCountDown, 1000)

    console.log(newno)

    function updateCountDown() {
        if (newno == 0) {
            console.log("hello")
            document.getElementById("countDown").style.display = "none"
        } else {

            var minutes = Math.floor(time / 60)
            var seconds = time % 60
            seconds = seconds < 10 ? '0' + seconds : seconds;
            countDownE.innerHTML = `${minutes}: ${seconds}`
            time -= no;

            if (time === -1) {
                clearInterval(interval);
                console.log(time)
                document.getElementById("startstop").value = "Start";
                document.getElementById("startstop").innerHTML = "Start";
                document.getElementById("X").style.display = "none";
                checkScore();



                document.getElementById("scr").style.display = "block";
                document.getElementById("s").innerHTML = "Score is " + score;
            }
        }


    }
}