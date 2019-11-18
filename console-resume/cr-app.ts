//Name, Career, Description
displayInfo ('Name: Chris Smith','Career: Web Dev In Training', 'Description: I\'m here to kick ass.');

function displayInfo( name: string, career: string, description: string) {
    console.log(name.toUpperCase());
    console.log(career);
    console.log(description);

}

console.log('')

//Interests
let myInterests = ('My Interests:');
let interests = ['Video Games', 'Computers', 'Music', 'Printing']; {
    console.log(myInterests);
    console.log('* ' + interests[0]);
    console.log('* ' + interests[1]);
    console.log('* ' + interests[2]);
    console.log('* ' + interests[3]);
}

console.log('');

//Previous Experiences
console.log('My Previous Experiences: ');

displayPosition('Urban Standard', 'General Manager/Barista', 'Ordering, scheduling, managing employees, etc');
displayPosition('The Coffee Well', 'Manager/Barista', 'Managing employees, keeping things cleaned & organized, etc');
displayPosition('OfficeMax', 'Print Specialist', 'Designing and printing a wide variety of things for customers');

function displayPosition(companyName: string, jobTitle: string, jobDescription: string) {
    console.log('* ' + companyName + ', ' + jobTitle + ' - ' + jobDescription + '. ');
}

console.log('');

// Skills
console.log('My Skills: ');

displaySkill('Letterpress Printing', true);
displaySkill('Building Computers', false);
displaySkill('Photoshop', false);
displaySkill('Illustrator', true);
displaySkill('Latte Art', true);

function displaySkill(mySkill: string, bam: boolean) {
    if (bam == true) {
        console.log('*  BAM: ' + mySkill);
    } else if (bam == false) {
        console.log('*  ' + mySkill);
    };
}