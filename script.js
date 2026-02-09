//Variables
var Hint_Text = document.getElementById("Hint_Text");
var Hint_Box = document.getElementById('Hint_Box');
let Player_Count = 0;
let points = 0;

// Sounds
var Background_Theme_Music = new Audio('sounds/Jeopardy_Theme.mp3');
var Correct_Sound = new Audio('sounds/Correct_Answer.mp3');
var Wrong_Sound = new Audio('sounds/Wrong_Answer.mp3');

// Hints and Answers
Hints_200 = ["Most prominent leader in the Civil Rights Movement ", "Nationwide protests that happened early 2020", "Found over 300 ways to use peanuts", "Rose to fame in the 1930s and is called the 'Queen of Jazz'", "Famous musical about Alicia Key's life"];
Answers_200 = ["Martin Luther King Jr", "George Floyd Protests", "George Washington Carver", "Ella Fitzgerald", "Hell's Kitchen Musical"];
Hints_400 = ["Co-Founder of STAR, participated in the Stonewall Riots, and the P in her name stands for Pay it No Mind ", "Boycott in Mongomery, Alabama that involved not getting up and moving to the back of the bus", "Inventor of the 3 position traffic signal", "Best known for the hit song 'Respect' and is known as the 'Queen of Soul'", "Bronx is the home of this music genre that was created by DJ Kool Herc"];
Answers_400 = ["Marsha P. Johnson", "Rosa Parks and the Montgomery Bus Boycott", "Garrett Morgan", "Aretha Franklin", "Hip Hop"];
Hints_600 = ["15 year old girl who got arrested in Montgomery, Alabama for not giving up her seat on the bus", "Supreme court case whose ruling decided that segregated schools violates the 14th's amemendment and demanded the end of segreated schools", "Inventor of the Super Soaker and N-Strike Nerf product line", "This genre of music's origin is often tied to blues and country, this genre's predecessor was referred to as 'Boogie Woogie Music' ", "Period that was marked as the golden age for literature, music, theater, and art"];
Answers_600 = ["Cludette Colvin", "Brown v. Board of Education", "Lonnie Johnson", "Rock and Roll", "The Harlem Renaissance"];
Hints_800 = ["First African American womman and Native American to get a pilot license and one of the earliest known black person to get an international pilot's license. Nickname was 'Queen Bess", "In August of 1831 the only effective slave rebellion took place striking fear in southern slave owners", "Inventor of the first electic blimp with directional controls", " This genre of music originated in chicago's black and queer underground scene in the 80's ", "Located on now Wall Street was a market that used to auction off slaves"];
Answers_800 = ["Bessie Coleman", "Nat Turner's Revolt", "John F. Pickering", "House Music", "Municipal Slave Market"];
Hints_1000 = ["First Black Child to enter an all-white school in the south", "Name that refers to a town in Tulsa, Oklahoma in the nearly 20th century that was destoryed in the Tulsa Race Massacre", "Inventor of the methods that allowed for the process, preservation, and storing of blood plasma during WWII and is also known as the 'Father of the Blood Bank'", "This genre of music origniated in the late 19th and early 20th centuries in Methodist and Basptist churches in the south after abolition of slavery", "Town that was located from 81st to 89th street that is now Central Park which homed the Episcopal Zion Church — the wealthiest and largest church for African Americans"];
Answers_1000 = ["Ruby Bridges", "Black Wall Street", "Dr. Charles Drew", "Rural Gospel Music", "Seneca Village"];

// Icon List
const Player_Icons_List = ["icons/cow_1.png", "icons/cow_2.png", "icons/cow_3.png", "icons/cow_4.png", "icons/cow_5.png", "icons/cow_6.png", "icons/cow_7.png"];

// Random Icon is chosen
function Get_Random() {
    const random_index = Math.floor(Math.random() * Player_Icons_List.length);

    if(Player_Icons_List.length > 0){
        selected_image = Player_Icons_List.splice (random_index,1);  
        return selected_image;
    } else {
        Get_Random();
    }

}

// Changes the the text to grey when clicked on
document.querySelectorAll(".container").forEach(function(container) {
  container.addEventListener("click", function(event) {
    event.target.closest(".money").style.backgroundColor = "#020991";
    const h2 = event.target.closest(".money").querySelector("h2");
    if(h2){
        h2.style.color = "#818181";
    }
  });
});


// Functions changes the text for the questions and plays the background musics and the sounds for correct or right answer
function Hint_Box_Text(Hint_Number, Answer_Number, Category_Number, Point_Amount) {
    Hint_Text.textContent = Hint_Number[Category_Number].toUpperCase();
    Hint_Box.classList.toggle("show");
    points = Point_Amount;
    Background_Theme_Music.loop = true;
    Background_Theme_Music.volume = 0.5;
    Background_Theme_Music.currentTime = 0;
    Background_Theme_Music.play();
    

    document.addEventListener("keydown", function(event) {
        if(event.keycode === 32 || event.key === " "){
          Hint_Text.textContent = Answer_Number[Category_Number].toUpperCase();  
        }
        
    });
    document.addEventListener("keydown", function(event) {
        if(event.keycode === 67 || event.key === "c"){
            Background_Theme_Music.pause();
            Correct_Sound.play();
            Correct_Sound.volume = 0.5;
        }
    });
    document.addEventListener("keydown", function(event) {
        if(event.keycode === 66 || event.key === "b"){
            Background_Theme_Music.pause();
            Wrong_Sound.play();
            Wrong_Sound.volume = 0.5;
        }
    });
     document.addEventListener("keydown", function(event) {
        if(event.keycode === 77 || event.key === "m"){
            Background_Theme_Music.play();
        }
    });
    

}

// Close the Hint Box
function Close_Hint() {
    Hint_Box.classList.toggle("show");
    Background_Theme_Music.pause();
}

// Display the Start Menu
function Menu_Start() {
    var Start_Menu_text = document.getElementById('Title_Screen_Text');
    var Player_Menu = document.getElementById('Player_Menu')
    Start_Menu_text.classList.toggle("Show_No_Animation");
    Player_Menu.classList.toggle("Show_No_Animation");
}

// Number of players calculater 
function Total_Click(click) {
    const Total_Clicks = document.getElementById("Total_Clicks");
    const Sum_Value = parseInt(Total_Clicks.innerText) + click;
    Total_Clicks.innerText = Sum_Value;

    if(Sum_Value < 0) {
        Total_Clicks.innerText = 0;
    } else if (Sum_Value > 4) {
        Total_Clicks.innerText = 4;
        Sum_Value = 4;

    }

    Player_Count = Sum_Value;
}

// Close the Start menue and adds the player icons at the bottom of the screen
function Close_Screen() {
    document.getElementById('Title_Screen').classList.toggle("hidden");
    const Player_Card_Holder = document.getElementById('Player_Card_Container');
    const template = document.getElementById('Player_Card_Template');
    const Template_ID = template.id;

    template.removeAttribute('id');

    for (let i = 0; i < Player_Count; i++ ){ 
        let num = i + 1;
        const content = template.content.cloneNode(true);
        template.id = Template_ID;
        const Player_Icon = content.querySelector('.Player_Icon');
        const Player_Number = content.querySelector('.Player_Name');
        const Point_Counter = content.querySelector('.Point_Text');
        const Add_Button = content.querySelector(".Add_Point");

         Point_Counter.id = 'Player_' + num.toString() + '_Card';
        if(Player_Icon){
            Player_Icon.src = Get_Random();
        }
        if(Player_Number) {
            let num = i + 1;
            Player_Number.innerText = 'Player ' + num.toString();
        }
        if(Point_Counter) {
            Point_Counter.innerText = '0';
        }

        Add_Button.addEventListener("mousedown", () => {
            let score = parseInt(Point_Counter.innerText);
            score += points;
            Point_Counter.innerText = score;
            points = 0;
        });
        Player_Card_Holder.appendChild(content);
    }



}
