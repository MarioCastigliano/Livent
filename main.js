var logged = false;

var usr = undefined;

var usrs = [
    {
        mail : "caterina@gmail.com",
        psw : "cat123",
        nome : "Caterina",
        cognome: "Masi",
        organizzatore: true,
        events_part: [],
        events_int: []
    },
    {
        mail : "mario@gmail.com",
        psw : "mar123",
        nome : "Mario",
        cognome: "Miccio",
        organizzatore: true,
        events_part: [],
        events_int: []
    },
    {
        mail : "bartolomeo@gmail.com",
        psw : "bart123",
        nome : "Bartolomeo",
        cognome: "Sannino",
        organizzatore: false,
        events_part: [],
        events_int: []
    }
]; 
var display;
var events = [
    {
        nome : "Concerto indie",
        luogo: "Napoli",
        indirizzo: "Via grande n1",
        organizzatore: "caterina@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "01/07/20",
        img: "https://notiziemusica.it/wp-content/uploads/2019/10/FB_Kaiser_Chiefs-1200x800.jpg",
        prezzo: "12.5"
    },
    {
        nome : "Festival",
        luogo: "Roma",
        indirizzo: "Via grande n2",
        organizzatore: "mario@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "22/07/20",
        img: "https://s3-eu-central-1.amazonaws.com/chasingthelightart/wp-content/uploads/20190212151037/editors011-696x465.jpg",
        prezzo: "12.5"
    },
    {
        nome : "Concerto rock",
        luogo: "Milano",
        indirizzo: "Via grande n3",
        organizzatore: "caterina@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "22/07/20",
        img: "https://www.rollingstone.com/wp-content/uploads/2019/08/the-strokes-lollapalooza.jpg",
        prezzo: "12.5"
    }
]

window.onload = () => {
    console.log('Pagina ricaricata');
    this.navigateHome();
    if(this.logged) {
        $(".login-buttons").css("display", "none");
        $(".logout-buttons").css("display", "inline");
    }
};

function login() {

    var email = $("#loginemail").val();
    var psw1 = $("#loginpsw").val();

    this.usrs.forEach(u => {
        if(u.mail === email && u.psw === psw1){
                this.usr = u;
                this.logged = true;
                $(".login-buttons").css("display", "none");
                $(".logout-buttons").css("display", "inline");
                this.navigateHome();
                return true;
        }
    });
    if(usr === undefined){
        alert('Utente non trovato');
    }
    return;

}

function logout() {
    $(".logout-buttons").css("display", "none");
    $(".login-buttons").css("display", "inline");
    this.usr = undefined;
    this.logged = false;
    this.navigateHome();
}

function navigateLogin() {
    $(".unhide").toggleClass("unhide");
    $("#login").toggleClass("unhide");
};

function navigateHome() {

    var string1 = '<div class="col-4" onclick="navigateEvent(\''
    var string1_5 = '\')"> <div class="event"><img class="thumbnail" src="'; 
    var string2 = '"><h3>';
    var string3 = '</h3><h5>';
    var string4 = '</h5></div></div>';
    var total = '';

    this.events.forEach(e => {
        total = total.concat(string1, this.hash(e), string1_5, e.img, string2, e.nome, string3, e.luogo, ' | ', e.data, string4);
    });

    $(".catalog").html(total);

    $(".unhide").toggleClass("unhide");
    $("#home").toggleClass("unhide");
}

function navigateSignup() {
    $(".unhide").toggleClass("unhide");
    $("#signup").toggleClass("unhide");
}

function navigateSearch() {
    var keyword = $("input#searchbar").val();
    if(keyword.length == 0){
        return
    }
    console.log( keyword );

    $(".unhide").toggleClass("unhide");
    $("#search").toggleClass("unhide");
}

function hash(e) {
    var string = '';
    string = string.concat(e.nome, e.luogo, e.organizzatore);
    return string.split(' ').join('_');
}

function getAll(ar) {
    var string = '';
    ar.forEach(s => {
        string = string.concat(s, ' ');
        console.log(s)
    });
    console.log( string )
    return string;
}

function navigateEvent (e) {
    this.events.forEach(ev => {
        if(e === this.hash(ev)){
            this.display = ev;
        }
    });

    var header = '';
    var string1 = '<h2 class="text-center mt-4">';
    var string2 = '</h2><h4 class="text-center">Evento organizzato da ';
    var string3 = '</h4>';

    header = header.concat(string1, display.nome, string2, display.organizzatore, string3);
    $("#event_header").html(header);

    var infos = '';
    var string4 = '<li><span class="bold">Data:</span> ';
    var string5 = '</li><li><span class="bold">Band:</span> ';
    var string6 = '</li><li><span class="bold">Generi:</span> ';
    var string7 = '</li><li><span class="bold">Prezzo:</span> ';
    var string8 = '</li><li><span class="bold">Città:</span> ';
    var string9 ='</li><li><span class="bold">Indirizzo:</span>';
    var string10 = '</li>';

    infos = infos.concat(string4, display.data, string5, getAll(display.band), string6, getAll(display.generi), string7, display.prezzo, '€', string8, display.luogo, string9, display.indirizzo, string10);
    $("#event_body").html(infos);

    var img = '<img class="preview" src="';
    var img2= '"></img>';

    img = img.concat(display.img, img2);
    $("#event_img").html( img );

    if(!logged || (logged && display.organizzatore !== this.usr.mail)) {
        var box = '<span>Ti piace questo evento?   </span><button onclick="submitEvent(\'';
        var box1 = '\')" class="signup-submit btn mx-2">Partecipa</button><p></p><span>Interessato all\'evento? Faccelo sapere   </span><button onclick="intEvent(\'';
        var box2 = '\')" class="signup-submit btn mx-2">Mi interessa</button>'; 
        var hash = this.hash(display);
        box = box.concat(hash, box1, hash, box2);
        $("#no-org").html( box );
        $("#event_mod").html( '' );

    } else if(display.organizzatore === this.usr.mail) {
        var box3 = '<span>Ciao ';
        var box4 =  ' desideri cancellare l\'evento?  </span><input type="password" class="my-2 form-control" placeholder="Password"><small id="emailHelp" class="form-text text-muted">Inserisci la password per confermare.</small><button type="button" class="cancel-submit btn my-2 mx-2" onclick="cancelEvent(\''
        var box7 = '\')">Cancella</button>';
        box3 = box3.concat(usr.nome, box4, this.hash(display), box7);
        $("#no-org").html( box3 );

        var box5 = '<span> Vuoi modificare l\'evento?</span><button type="button" class="signup-submit btn my-2 mx-2" onclick="modifyEvent(\''
        var box6 = '\')">Modifica</button>';
        box5 = box5.concat(this.hash(display), box6);
        $("#event_mod").html( box5 );
    }

    $(".unhide").toggleClass("unhide");
    $("#event").toggleClass("unhide");
}

function submitEvent(hash) {
    let temp;
    this.events.forEach(e => {
        if(this.hash(e) === hash){
            temp = e;
        }
    });
    this.usr.events_part.push(temp);

}

function intEvent(hash) {

}