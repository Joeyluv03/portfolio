
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// example of global var that can be used between scenes


////////////////////////////// 1 /////////////////

function intro() {

   var playButton;
   var helpButton;
   var infoButton;



   this.setup = function () {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

      title = loadImage("assets/title.png");

      textAlign(CENTER);
      textSize(29);

      playButton = new Button({
         x: width / 2, y: height / 2,
         width: 180, height: 70,
         align_x: 0, align_y: 0,
         content: 'Play',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(scene2, true);
            playclick();
         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      helpButton = new Button({
         x: width / 2, y: 500,
         width: 180, height: 70,
         align_x: 0, align_y: 0,
         content: 'Help',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(help, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      infoButton = new Button({
         x: 40, y: 760,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'About',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(info, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });



   }

   // enter() will be called each time SceneManager switches
   // to this scene
   this.enter = function () {
      console.log("We are at entering scene1");
      // textX = 10;
      // textY = 0;

      // loy = 100;
      // background("red");

   }

   this.draw = function () {

      image(bg, 0, 0, width, height);


      textAlign(CENTER);
      // textSize(80);
      fill(255);

      playButton.draw();
      helpButton.draw();
      infoButton.draw();


      push();
     
      translate(-100,50)
      image(title, 0, 0, 800, 450);

      pop();


   }

   this.mousePressed = function () {
      if (click.isPlaying()) {

         click.pause(); // .play() will resume from .pause() position

      } else {
         click.play();

      }


   }

}




///////////////////////  2  ////////////////////////

function scene2() {

   let hairdown;
   let halfup;
   let bun;
   let ponytail;
   let beanie;

   let currentImage;
   let currentImage2;
   let currentImage3;
   let currentImage4;

   var helpButton;
   var titleButton;
   var saveButton;
   var infoButton;
   var switchButton;
   var topswitchButton;
   var bottomswitchButton;
   var shoesswitchButton;

   this.setup = function () {
      background(0);
      console.log("We are at setup for scene2");

      body = loadImage("assets/body.png");

      //hair
      hairdown = loadImage("assets/hairdown.png");
      halfup = loadImage("assets/halfup.png");
      bun = loadImage("assets/bun.png");
      ponytail = loadImage("assets/ponytail.png");
      beanie = loadImage("assets/beanie.png");

      currentImage = loadImage("assets/hairdown.png");

      //tops
      currentImage2 = loadImage("assets/blacktube.png");

      tube = loadImage("assets/blacktube.png");
      blacklong = loadImage("assets/blacklong.png");
      gorillaz = loadImage("assets/gorillaz.png");
      offshoulder = loadImage("assets/offshoulder.png");
      pinklong = loadImage("assets/pinklong.png");
      vest = loadImage("assets/vest.png");
      blackcrew = loadImage("assets/blackcrew.png");
      blackwhitebutton = loadImage("assets/blackwhitebutton.png");
      yellowcrew =  loadImage("assets/yellowcrew.png");
      graphic = loadImage("assets/graphicshirt.png");
      pinkbutton = loadImage("assets/pinkbutton.png");
      raiders = loadImage("assets/raider.png");
      raiderswhite = loadImage("assets/raiderswhite.png");
      silk = loadImage("assets/silkdress.png");
      star = loadImage("assets/stardress.png");


      //bottoms
      currentImage3 = loadImage("assets/blackshorts.png");

      shorts = loadImage("assets/blackshorts.png");
      jeans = loadImage("assets/jeans.png");
      flares = loadImage("assets/flares.png");
      cargos = loadImage("assets/cargos.png");
      leggings = loadImage("assets/leggings.png");
      skirt = loadImage("assets/skirt.png");
      darkjorts = loadImage("assets/darkjorts.png");
      lightjort = loadImage("assets/lightjorts.png");
      greencargo = loadImage("assets/greencargos.png");
      pleatedskirt = loadImage("assets/pleatedskirt.png");


      //shoes
      currentImage4 = loadImage("assets/socks.png");

      socks = loadImage("assets/socks.png");
      boots = loadImage("assets/boots.png");
      warmers = loadImage("assets/legwarmers.png");
      converse = loadImage("assets/converse.png");
      forces = loadImage("assets/forces.png");
      longboots = loadImage("assets/blackbootslong.png");

      switchButton = new Button({
         x: 120, y: 120,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Hair',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            //mgr.showScene(help, true);
            playclick();

            if (currentImage == hairdown) {
               currentImage = halfup;
            } else if (currentImage == halfup) {
               currentImage = bun;
            } else if (currentImage == bun) {
               currentImage = ponytail;
            } else if (currentImage == ponytail) {
               currentImage = beanie;
            } else {
               currentImage = hairdown;
            };

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      topswitchButton = new Button({
         x: 120, y: 240,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Top',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            //mgr.showScene(help, true);
            playclick();

            if (currentImage2 == tube) {
               currentImage2 = blacklong;
            } else if (currentImage2 == blacklong) {
               currentImage2 = gorillaz;
            } else if (currentImage2 == gorillaz) {
               currentImage2 = offshoulder;
            } else if (currentImage2 == offshoulder) {
               currentImage2 = pinklong;
            } else if (currentImage2 == pinklong) {
               currentImage2 = vest;
            } else if (currentImage2 == vest) {
               currentImage2 = blackcrew;
            } else if (currentImage2 == blackcrew) {
               currentImage2 = blackwhitebutton;
            } else if (currentImage2 == blackwhitebutton) {
               currentImage2 = yellowcrew;
            } else if (currentImage2 == yellowcrew) {
               currentImage2 = graphic;
            } else if (currentImage2 == graphic) {
               currentImage2 = pinkbutton;
            } else if (currentImage2 == pinkbutton) {
               currentImage2 = raiders;
            } else if (currentImage2 == raiders) {
               currentImage2 = raiderswhite;
            } else if (currentImage2 == raiderswhite) {
               currentImage2 = silk;
            } else if (currentImage2 == silk) {
               currentImage2 = star;
            } else {
               currentImage2 = tube;
            };

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      bottomswitchButton = new Button({
         x: 120, y: 360,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Bottoms',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            //mgr.showScene(help, true);
            playclick();

            if (currentImage3 == shorts) {
               currentImage3 = jeans;
            } else if (currentImage3 == jeans) {
               currentImage3 = flares;
            } else if (currentImage3 == flares) {
               currentImage3 = cargos;
            } else if (currentImage3 == cargos) {
               currentImage3 = leggings;
            } else if (currentImage3 == leggings) {
               currentImage3 = skirt;
            }  else if (currentImage3 == skirt) {
               currentImage3 = darkjorts;
            }  else if (currentImage3 == darkjorts) {
               currentImage3 = lightjort;
            }  else if (currentImage3 == lightjort) {
               currentImage3 = pleatedskirt;
            }  else if (currentImage3 == pleatedskirt) {
               currentImage3 = greencargo;
            } else {
               currentImage3 = shorts;
            };

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      shoesswitchButton = new Button({
         x: 120, y: 480,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Shoes',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            //mgr.showScene(help, true);
            playclick();

            if (currentImage4 == socks) {
               currentImage4 = boots;
            } else if (currentImage4 == boots) {
               currentImage4 = warmers;
            } else if (currentImage4 == warmers) {
               currentImage4 = converse;
            } else if (currentImage4 == converse) {
               currentImage4 = forces;
            } else if (currentImage4 == forces) {
               currentImage4 = longboots;
            } else {
               currentImage4 = socks;
            };

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      helpButton = new Button({
         x: 40, y: 40,
         width: 30, height: 30,
         align_x: 0, align_y: 0,
         content: '?',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 22,
            //  text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(help, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


      titleButton = new Button({
         x: 560, y: 40,
         width: 30, height: 30,
         align_x: 0, align_y: 0,
         content: '\u2665',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 24,
            //text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 24,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(intro, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

      // ~~~ Save work
      saveButton = new Button({
         x: 560, y: 760,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Save',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 20,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 20,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },

         on_press() {
            playclick();

            if (typeof window.print === "function") {
               window.print();
               // Set a timeout to reload the page after printing dialog is triggered
               setTimeout(function () {
                  location.reload(); // Refresh the page
               }, 100); // Delay of 100ms to allow print dialog to open
            } else {
               console.log("window.print() is not available in this browser.");
            }

            //saveFrames('outfit-0', 'png', 1, 1);
         },
         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

      infoButton = new Button({
         x: 40, y: 760,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'About',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 18,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(info, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

   }

   this.enter = function () {

      console.log("We are at  scene2 (again?)");

   }

   this.draw = function () {



      background(0);
      image(bg, 0, 0, width, height);

      image(body, 0, 0, width, height);

      //image(hairdown, 0, 0, width, height);
      // Draw the current hairstyle image
      image(currentImage, 0, 0, width, height);
      //shoes
      image(currentImage4, 0, 0, width, height);
      //bottoms
      image(currentImage3, 0, 0, width, height);
      //tops
      image(currentImage2, 0, 0, width, height);






      helpButton.draw();
      titleButton.draw();
      infoButton.draw();
      saveButton.draw();
      switchButton.draw();
      topswitchButton.draw();
      bottomswitchButton.draw();
      shoesswitchButton.draw();





   }


   this.mousePressed = function () {
      //console.log("exit");
      //this.sceneManager.showNextScene();
   }





}


//////////////////////about page/////////////////////////


function info() {

   var titleButton;



   this.setup = function () {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.

      background(255, 205, 158);

      textAlign(CENTER);
      textSize(29);


      titleButton = new Button({
         x: 560, y: 40,
         width: 30, height: 30,
         align_x: 0, align_y: 0,
         content: '\u2665',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 24,
            //text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffcea6',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(intro, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

   }

   // enter() will be called each time SceneManager switches
   // to this scene
   this.enter = function () {
      console.log("We are at entering scene1");
      // textX = 10;
      // textY = 0;

      // loy = 100;
      // background("red");

   }

   this.draw = function () {

      // image(bg, 0, 0, width, height);
      background(255, 205, 158);


      textAlign(CENTER);
      // textSize(80);
      fill(240, 110, 160);
      textSize(24);
      text("About", 300, 100);



      titleButton.draw();



      push();
      //
      translate(100, 80);
      fill(240, 110, 160);
      textSize(15);
      text("Fashion is more than threads and fabric.\n It can be a language, a reflection of self identity, and a powerful\n form of expression. The way we dress can influence our feelings\n but also the way others perceive us. We can communicate to others\n aspects of our personalities or even emotions without a word.  It becomes unspoken dialogue,\n  shaping the ways we connect with others in the world around us. Fashion\n is often the first thing that people notice about you,\n influencing their judgement about who we are as people.", 200, 150);
      text("My Dress Up is a hand-drawn javascript game that invites players\n to a space of creativity through the use of my personal closet. This interactive experience\n encourages players to use their judgement and dictate what they believe I should wear.\n What looks the best? What looks the worst? Fashion is subjective. This\n game explores the balance between personal style and social perception\n as players help me decide what to wear - curating \ntheir own identity into the outfits they choose for me.", 200, 305);
      text("My Dress Up is more than a game,\n it is an open conversation about self-expression, identity,\n and the transformative powers of fashion.", 200, 425)

      pop();


   }

   this.mousePressed = function () {
      if (click.isPlaying()) {

         click.pause(); // .play() will resume from .pause() position

      } else {
         click.play();

      }

   }

}



//////////////////help/////////////////

function help() {


   var titleButton;


   this.setup = function () {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.


      textAlign(CENTER);
      textSize(29);
      textFont("serif");
      textFont("assets/heart-font.ttf");



      titleButton = new Button({
         x: 560, y: 40,
         width: 30, height: 30,
         align_x: 0, align_y: 0,
         content: '\u2665',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 24,
            //text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 24,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0, 0, 0',
            border_radius: 5
         },
         on_press() {
            mgr.showScene(intro, true);
            playclick();

         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

      switchButton = new Button({
         x: 100, y: 180,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: '?',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 36,
            //  text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {


         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

      saveButton = new Button({
         x: 100, y: 260,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: 'Save',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            //text_font: 'serif',
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 22,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5
         },
         on_press() {
         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });

      homeButton = new Button({
         x: 100, y: 340,
         width: 50, height: 50,
         align_x: 0, align_y: 0,
         content: '\u2665',
         style_default: {
            color: '#fff',
            background: '#f56998',
            text_size: 36,
            //  text_font: loadFont('assets/heart-font.ttf'),
            text_font: 'serif',
            border_width: 2,
            border_color: '0,0,0',
            border_radius: 5

         },

         style_pressed: {
            color: '#fff',
            background: '#ffccf0',
            text_size: 36,
            text_font: loadFont('assets/heart-font.ttf'),
            border_width: 0,
            border_color: '',
            border_radius: 5
         },
         on_press() {


         },

         style_hover: {
            background: '#f2b6cd',
            color: '#111',
         },
      });


   }

   // enter() will be called each time SceneManager switches
   // to this scene
   this.enter = function () {
      console.log("We are at entering scene1");


   }

   this.draw = function () {

      //image(bg, 0, 0, width, height);

      background(255, 205, 158);



      textAlign(CENTER);
      // textSize(80);
      fill(255);


      titleButton.draw();
      saveButton.draw();


      fill(240, 110, 160);
      textSize(60);
      text("Controls", width / 2, 80);

      fill(240, 110, 160);
      textSize(60);
      text("Shortcuts", width / 2, 460);

      fill(240, 110, 160);
      textSize(18);
      textFont("serif");
      text("This button goes to the Help page. ", 326, 180);


      fill(240, 110, 160);
      textSize(18);
      text("This button allows you to save or print your work.", 381, 260);

      fill(240, 110, 160);
      textSize(18);
      text("This button goes to the Title page.", 323, 340);


      fill(240, 110, 160);
      textSize(22);
      text("Title Page - 1", width / 2, 540);
      text("Main Page - 2", width / 2, 580);
      text("Info Page - 3", width / 2, 620);
      text("Help Page - 4, H, h", width / 2, 660);







      switchButton.draw();
      homeButton.draw();




   }

   this.mousePressed = function () {
      if (click.isPlaying()) {

         click.pause(); // .play() will resume from .pause() position

      } else {
         click.play();

      }

   }

}


