
var Hint_Text = document.getElementById("Hint_Text");
var Hint_Box = document.getElementById('Hint_Box');
Hints_200 = ["Most prominent leader in the Civil Rights Movement ", "Nationwide protests that happened early 2020", "Found over 300 ways to use peanuts", "Rose to fame in the 1930s and is called the 'Queen of Jazz'", "Famous musical about Alicia Key's life"];
Answers_200 = ["Martin Luther King Jr", "George Floyd Protests", "George Washington Carver", "Ella Fitzgerald", "Hell's Kitchen Musical"];
Hints_400 = ["Co-Founder of STAR, participated in the Stonewall Riots, and the P in her name stands for Pay it No Mind ", "Boycott in Mongomery, Alabama that involved not getting up and moving to the back of the bus", "Inventor of the 3 position traffic signal", "Best known for the hit song 'Respect' and is known as the 'Queen of Soul'", "Bronx is the home of this music genre that was created by DJ Kool Herc"];
Answers_400 = ["Marsha P. Johnson", "Rosa Parks and the Montgomery Bus Boycott", "Garrett Morgan", "Aretha Franklin", "Hip Hop"];
Hints_600 = ["15 year old girl who got arrested in Montgomery, Alabama for not giving up her seat on the bus", "Supreme court case whoose ruling decided that segregated schools violates the 14th's ammemendment and demanded the end of segreated schools", "Inventor of the Super Soaker and N-Strike Nerf product line", "This genre of music's origin is often tied to blues and country but Ike Turner is often noted as the first person who play this genre", "Period that was marked as the golden age for literature, music, theater, and art"];
Answers_600 = ["Cludette Colvin", "Brown v. Board of Education", "Lonnie Johnson", "Rock and Roll", "The Harlem Renaissance"];
Hints_800 = ["First African American womman and Native American to get a piolte iceense and one of the earliest known black person to get an international pilot's license. Nickname was 'Queen Bess", "In August of 1831 the only effective slave rebellion took place striking fear in southern slave owners", "Inventor of the first electic blimp with directional controls", " This genre of music originated in chicago's black and queer underground scene in the 80's ", "Located on now Wall Street was a market that used to auction off slaves"];
Answers_800 = ["Bessie Coleman", "Nat Turner's Revolt", "John F. Pickering", "House Music", "Municipal Slave Market"];
Hints_1000 = ["First Black Child to enter an all-white school in the south", "Name that refers to a town in Tulsa, Oklahoma in the nearly 20th century that was destoryed in the Tulsa Race Massacre", "Inventor of the methods that allowed for the process, preservation, and storing of blood plasma during WWII and is also known as the 'Father of the Blood Bank'", "This genre of music origniated in the late 19th and early 20th centuries in Methodist and Basptist churches in the south after abolition of slavery", "Town that was located from 81st to 89th street that is now Central Park which homed the Episcopal Zion Church — the wealthiest and largest church for African Americans"];
Answers_1000 = ["Rudgy Bridges", "Black Wall Street", "Dr. Charles Drew", "Rural Gospal Music", "Seneca Village"];

document.querySelectorAll(".container").forEach(function(container) {
  container.addEventListener("click", function(event) {
    event.target.closest(".money").style.backgroundColor = "#020991";
    const h2 = event.target.closest(".money").querySelector("h2");
    if(h2){
        h2.style.color = "#818181";
    }
  });
});

function Hint_Box_Text(Hint_Number, Answer_Number, Category_Number) {
    Hint_Text.textContent = Hint_Number[Category_Number].toUpperCase();
    Hint_Box.classList.toggle("show");

    document.addEventListener("keydown", function(event) {
        if(event.keycode === 32 || event.key === " "){
          Hint_Text.textContent = Answer_Number[Category_Number].toUpperCase();  
        }
        
    })
    

}

function Close_Hint() {
    Hint_Box.classList.toggle("show");
}
function Close_Screen() {
    document.getElementById('Title_Screen').classList.toggle("hidden");
}

function Menu_Start() {
    var Start_Menu_text = document.getElementById('Title_Screen_Text');
    var Player_Menu = document.getElementById('Player_Menu')
    Start_Menu_text.classList.toggle("Show_No_Animation");
    Player_Menu.classList.toggle("Show_No_Animation");
}

function Total_Click(click) {
    const Total_Clicks = document.getElementById("Total_Clicks");
    const Sum_Value = parseInt(Total_Clicks.innerText) + click;
    Total_Clicks.innerText = Sum_Value;

    if(Sum_Value < 0) {
        Total_Clicks.innerText = 0;
    } else if (Sum_Value > 4) {
        Total_Clicks.innerText = 4;

    }
}