let fullName : string = "catrina callahan"
let upperName : string = fullName.toUpperCase();
console.log(upperName)

console.log("Occupation: Corporate Development Manager")
console.log("Description: Mostly just really loud, but also can make really good pasta, so that's a plus.")
console.log("My interests include:")
let interests : string[] = ["*Cooking", "*Learning", "*Gardening"]
for (var _i = 0; _i < interests.length; _i++) {
    console.log(interests[_i])
}
console.log("Job History:");

interface Jobs {
    title: string,
    companyName: string,
    jobDescription: string
}

let positions : Array<Jobs> = [{
    title: "- Corporate Developement Manager",
    companyName: "McWane Science Center",
    jobDescription: "I wrote a whole lot of fancy grants. Raised lots of money. Planned big events."
}, {
    title: "- Fabricator",
    companyName: "Triebold Paleontology",
    jobDescription: "Made a lot of really cool dinosaur molds. tried not to die from OSHA violations."
}, {
    title: "- Receptionist",
    companyName: "Dr.'s Office",
    jobDescription: "Answer phones. Answer more phones. Never stop answering phones."
}];

function displayPosition(a : number) {
    console.log(positions[a].title),
        console.log(positions[a].companyName),
        console.log(positions[a].jobDescription)
}
displayPosition(0)
displayPosition(1)
displayPosition(2)

console.log("My Skills:");

interface Skills {
    skill: string,
    isCool: boolean,
}

let mySkills : Array<Skills> = [{
        skill: "+ Grant Writing",
        isCool: false
    },
    {
        skill: "+ Answering Phones",
        isCool: false
    },
    {
        skill: "+ Molding Dino Bones",
        isCool: true
    },
    {
        skill: "+ Digging up cool stuff",
        isCool: true
    }
]


function displaySkills(arr : Array<Skills>) {
    for ( let _b = 0; _b < mySkills.length; _b++) {
        if (mySkills[_b].isCool == true) {
            console.log("BAM:" + (mySkills[_b].skill));
        } else if (mySkills[_b].isCool == false) {
            console.log(mySkills[_b].skill)
        }
    }
};

displaySkills(mySkills);