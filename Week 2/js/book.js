let myVar = "Happy"

function orderThis(id) {
    // alert(`Order id${id}`);
    let res = document.getElementById('results');
    res.innerHTML = ` id:${id} `;
    let x = "BlackJack"
    if (x == "BlackJack") {
        console.log(x)
    }

}

function orderThat(id) {
    let myVar = "Beanhead";
    myVar += "4";
    myVar = 22;
    myVar = 3.14;
    myVar += 1;
    let res = document.getElementById('results');
    res.innerHTML = ` id:${id} myVar:${myVar} `;
}

function orderThatV2(id) {
    let myList = ['planes', 'trains', 'automobiles'];
    myList.push("Boat");
    let oStr = " ";
    let c = "";
    for (let i = 0; i < myList.length; i++) {
        oStr += c + myList[i];
        c = ", ";
    }
    console.log("FLAG1:" + oStr);
    console.log(myList.map(i => "item:" + i));
    let newList = myList.map(i => "item:" + i);
    console.log("----------")
    console.log(myList);
    console.log(newList);
}

function orderThatV3(id) {
    let myString = "Applease";
    myString += 'Bananas';
    let myNum = 4;
    let myList = []; //An Array
    let myOb = {}; // A list

    let student = { // Object Literal
        name: "Jack",
        age: 22,
        gpa: 3.55,
        courses: ["CSC1700", "CSC2200"]
    }

    console.log(`name:${student.name}`);
    console.log(`age:${student.age}`);
    console.log(`gpa:${student.gpa}`);
    console.log(`NumCourse:${student.courses.length}`);

    let studentV2 = [ // An array of object literals
        { // Object Literal
            name: "Jack",
            age: 22,
            gpa: 3.55,
            courses: ["CSC1700", "CSC2200"]
        },
        { // Object Literal
            name: "Jill",
            age: 21,
            gpa: 3.95,
            courses: ["CSC1700", "CSC2200", "CSC3700"]
        },
        { // Object Literal
            name: "Jafet",
            age: 24,
            gpa: 3.85,
            courses: ["CSC1700"]
        },
        {
            name: "Harold",
            age: 30,
            gpa: 4.2,
            courses: ["CSC1700", "CSC5000"]
        }
    ];
    //////////////////////////////////////////////////////////////////

    console.log(`name:${studentV2[1].name}`);
    console.log(`age:${studentV2[1].age}`);
    console.log(`gpa:${studentV2[1].gpa}`);
    console.log(`NumStudents:${studentV2.length}`);

    for (let i = 0; i < studentV2.length; i++) { //For loop to alert
        // of each student name
        alert(`Name:${studentV2[i].name}`);
    }
    let ct = 0; //instantiating count variable
    for (let i = 0; i < studentV2.length; i++) {// FOr loop to alert
        //and count up total classes taken
        ct += studentV2[i].courses.length;
    }
    alert(`Course total:${ct}`);

    if (studentV2.length != 0) {
        if (studentV2.age === 21) { // === makes sure its the number, not the
            // string. checks datatypes
        }
    }

}

function orderThatV4(id) {
    let myVar;
    let myVar2 = ""
    let myVar3 = null
    console.log(`${myVar}`);
    console.log(`${myVar2}`);
    console.log(`${myVar3}`);

    if(myVar === undefined){
        console.log(`${myVar} is undefined`);
    }
    if(myVar3 === null){
    }
}