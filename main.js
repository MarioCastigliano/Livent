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
        prezzo: "12.5",
        part: 60,
        int: 10
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
        prezzo: "12.5",
        part: 150,
        int: 20
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
        prezzo: "12.5",
        part: 66,
        int: 8
    },
    {
        nome : "Concerto indie2",
        luogo: "Napoli",
        indirizzo: "Via grande n1",
        organizzatore: "caterina@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "01/07/20",
        img: "https://notiziemusica.it/wp-content/uploads/2019/10/FB_Kaiser_Chiefs-1200x800.jpg",
        prezzo: "12.5",
        part: 60,
        int: 10
    },
    {
        nome : "Festival2",
        luogo: "Roma",
        indirizzo: "Via grande n2",
        organizzatore: "mario@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "22/07/20",
        img: "https://s3-eu-central-1.amazonaws.com/chasingthelightart/wp-content/uploads/20190212151037/editors011-696x465.jpg",
        prezzo: "12.5",
        part: 150,
        int: 20
    },
    {
        nome : "Concerto rock2",
        luogo: "Milano",
        indirizzo: "Via grande n3",
        organizzatore: "caterina@gmail.com",
        band: ["\"Campos band\"", "\"Black Pistol Fire\""],
        generi: ["\"Indie rock\"", "\"Indie\""],
        data: "22/07/20",
        img: "https://www.rollingstone.com/wp-content/uploads/2019/08/the-strokes-lollapalooza.jpg",
        prezzo: "12.5",
        part: 66,
        int: 8
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
                $("#loginemail").val( '' );
                $("#loginpsw").val( '' );
                return true;
        }
    });
    if(usr === undefined){
        alert('Utente non trovato');
    }
    return;

}

function signup(){
    var email = $("#signupemail").val();
    var psw1 = $("#signuppsw").val();
    var nome = $("#signupnome").val();
    var cognome = $("#signupcogn").val();
    var checked = false; 

    this.usrs.forEach(u => {
        if(u.mail === email){
            alert("Utente già registrato");
            return false;
        }
    });

    if ($("#check").is(":checked")){
        checked = true;
        console.log("organizzatore eventi")
    }

    this.usrs.push(
        {
            mail : email,
            psw : psw1,
            nome : nome,
            cognome: cognome,
            organizzatore: checked,
            events_part: [],
            events_int: []
        }
    );
    this.usr = {
        mail : email,
        psw : psw1,
        nome : nome,
        cognome: cognome,
        organizzatore: checked,
        events_part: [],
        events_int: []
    };

    this.logged = true;
    alert('Registrazione avvenuta con successo');
    $(".login-buttons").css("display", "none");
    $(".logout-buttons").css("display", "inline");
    this.navigateHome();

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

    var row = '<div class="row">'
    var string1 = '<div class="col-4" onclick="navigateEvent(\''
    var string1_5 = '\')"> <div class="event"><img class="thumbnail" src="'; 
    var string2 = '"><h3>';
    var string3 = '</h3><h5>';
    var string4 = '</h5></div></div>';
    var total = '';

    this.events.forEach((e,index) => {
        if(index % 3 === 0){
            total = total.concat(row);
        }
        total = total.concat(string1, this.hash(e), string1_5, e.img, string2, e.nome, string3, e.luogo, ' | ', e.data, string4);
        if(index % 3 === 2){
            total = total.concat('</div>');
        }
    });

    if(this.events.length%3 !== 0){
        total = total.concat('</div>');
    }

    if(this.usr !== undefined && this.usr.organizzatore === true){
        var addbutton = '<button type="button" class="add_sumbit mx-y" onclick="navigateAdd()">Crea evento</button>';
        total = total.concat( addbutton );
    }



    $("#homecont").html( total );

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

    let results = [];

    this.events.forEach(e => {
        if(e.nome.toLowerCase().includes( keyword.toLowerCase() )){
            results.push(e);
        }
    });

    let header  = '<h4 class="my-4"> Risulati per "'
    let header2 = '"</h4>'

    header = header.concat(keyword, header2);

    let res = '<div class="row my-4 box-border"><div class="col-3 my-2 clickable" onclick="navigateEvent(' //hash
    let res1 = ')"><img class="thumbnail" src="' //img
    let res2 = '"></div><div class="col-6 my-2 clickable" onclick="navigateEvent(' //hash
    let res3 = ')"><h4 class="my-2">'//nome evento
    let res4 = '</h4><h6 class="uppercase">' //luogo + ' | ' + data
    
    let res5 = '</h6></div><div class="col-3 my-auto text-center"><button onclick="submitEvent(\'' //hash
    let res6 = '\')" class="fast-link btn mx-2">Partecipa</button><p></p><button onclick="intEvent(\''//hash
    let res7 = '\')" class="fast-link btn mx-2">Mi interessa</button></div></div>'

    let res8 = '</h6></div><div class="col-3 my-auto text-center"><button onclick="navigateEvent(\'' //hash
    let res9 = '\')" class="fast-link btn mx-2">Visualizza</button><p></p><button onclick="navigateMod(\''//hash
    let res10 = '\')" class="fast-link btn mx-2">Modifica</button></div></div>'

    results.forEach(e => {
        let hash = this.hash(e);
        header = header.concat(res, hash, res1, e.img, res2, hash, res3, e.nome, res4, e.luogo, ' | ', e.data);
        if(!logged || (logged && e.organizzatore !== this.usr.mail)) {
            header = header.concat(res5, hash, res6, hash, res7);
        }else {
            header = header.concat(res8, hash, res9, hash, res10);
        }
    });

    $("#search").html( header ); 

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
    });
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
        $("#counter").html( '' );

    } else if(display.organizzatore === this.usr.mail) {
        var box3 = '<span>Ciao ';
        var box4 =  ' desideri cancellare l\'evento?  </span><input type="password" id="cancelpsw" class="my-2 form-control" placeholder="Password"><small id="emailHelp" class="form-text text-muted">Inserisci la password per confermare.</small><button type="button" class="cancel-submit btn my-2 mx-2" onclick="cancelEvent(\''
        var box7 = '\')">Cancella</button>';
        box3 = box3.concat(usr.nome, box4, this.hash(display), box7);
        $("#no-org").html( box3 );

        var box5 = '<span> Vuoi modificare l\'evento?</span><button type="button" class="signup-submit btn my-2 mx-2" onclick="navigateMod(\''
        var box6 = '\')">Modifica</button>';
        box5 = box5.concat(this.hash(display), box6);
        $("#event_mod").html( box5 );

        var counter = '<span>Partecipanti: ';
        var counter2 = '</span><p></p><span>Interessati: ';
        counter = counter.concat(display.part, counter2, display.int, '</span>');

        $("#counter").html( counter );
    }

    $(".unhide").toggleClass("unhide");
    $("#event").toggleClass("unhide");
}

function cancelEvent (hash) {
    if($("#cancelpsw").val() === this.usr.psw) {
        this.events.forEach(e => {
            if(this.hash(e) === hash){
                this.events.splice('%d', 1)
            }
        });
        alert("Evento annullato");
        this.navigateHome();
    }
}

function navigateAdd() {

    let header  = '<h4 class="my-4">Ciao '
    let header2 = ', crea il tuo evento!</h4>'

    header = header.concat(this.usr.nome, header2);

    $("#eventName").val( '' );
    $("#eventDate").val( '' );
    $("#eventBands").val( '' );
    $("#eventGenres").val( '' );
    $("#eventPrice").val( '' );
    $("#eventCity").val( '' );
    $("#eventAddress").val( '' );
    $("#eventImg").val( '' );

    $("#eventAddHeader").html( header );

    $(".unhide").toggleClass("unhide");
    $("#event_add").toggleClass("unhide");
}

function addEvent() {
    let nome = $("#eventName").val();

    let date = new Date($("#eventDate").val());
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    date = '';
    date = date.concat(day, '/', month, '/', year);
    let bands = $("#eventBands").val();
    let band = bands.split(',');
    let genres = $("#eventGenres").val();
    let genre = genres.split(',');

    let price = parseFloat($("#eventPrice").val());
    let city = $("#eventCity").val();
    let address = $("#eventAddress").val();
    let img = $("#eventImg").val();

    events.push({
        nome : nome,
        luogo: city,
        indirizzo: address,
        organizzatore: this.usr.mail,
        band: band,
        generi: genre,
        data: date,
        img: img,
        prezzo: price,
        part: 0,
        int: 0
    });

    alert('Evento aggiunto con success!');
    navigateHome();
}

function submitEvent(hash) {

    if(this.usr === undefined){
        alert ('Effettua il login per interessarti agli eventi');
        return;
    }

    this.events.forEach(e => {
        if(this.hash(e) === hash){
            if(this.usr.events_part.indexOf(e) == -1){
                this.usr.events_part.push(e);
                e.part = e.part + 1;
                alert('Parteciperai a questo evento');
            }
            
        
            this.usr.events_int.forEach(ev => {
                if(ev === e ){
                    this.usr.events_int.splice('%d', 1);
                    e.int = e.int -1;
                }
            });
        }
    });
}

function intEvent(hash) {

    if(this.usr === undefined){
        alert ('Effettua il login per interessarti agli eventi');
        return;
    }

    this.events.forEach(e => {
        if(this.hash(e) === hash){
            if(this.usr.events_int.indexOf(e) == -1){
                this.usr.events_int.push(e);
                e.int = e.int + 1;
                alert('Questo evento ti interessa');
            }
        
            this.usr.events_part.forEach(ev => {
                if(ev === e ){
                    this.usr.events_part.splice('%d', 1);
                    e.part = e.part - 1;
                }
            });
        }
    });
}

function navigateMod(hash) {
    let temp;
    this.events.forEach(e => {
        if(hash === this.hash(e)) {
            temp = e;
            this.events.splice('%d', 1);
        }
    });

    let header  = '<h4 class="my-4">Ciao '
    let header2 = ', modifica il tuo evento!</h4>'

    header = header.concat(this.usr.nome, header2);

    $("#eventModName").val( temp.nome );
    $("#eventModDate").val( temp.data );
    $("#eventModBands").val( temp.band.join(',') );
    $("#eventModGenres").val( '' );
    $("#eventModPrice").val( '' );
    $("#eventModCity").val( '' );
    $("#eventModAddress").val( '' );
    $("#eventModImg").val( '' );

    $("#eventModHeader").html( header );

    $(".unhide").toggleClass("unhide");
    $("#event_mod").toggleClass("unhide");

}

function cancelCreation() {
    $("#cancelCreation").css("display", "inline");
}

function dismiss() {
    $("#cancelCreation").css("display", "none");
}