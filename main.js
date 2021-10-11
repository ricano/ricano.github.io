var World = Matter.World;
var Body = Matter.Body;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;
var Composites = Matter.Composites;
var Engine = Matter.Engine;
var Events = Matter.Events;
var Render = Matter.Render;
var Query = Matter.Query;
var Bounds = Matter.Bounds;
var Vector = Matter.Vector;
var Mouse = Matter.Mouse;
var MouseConstraint = Matter.MouseConstraint;


var w = window.innerWidth;
var h = window.innerHeight;
var margin = 10;

var dimensions

var newt, circle2, render, plat1, plat2, plat3, plat4, stick1, stick2, ball1, machine1, mouse, mouseConstraint

var domino = []

const XS = {
    NEWT: {
        X: w / 2 - 5 * w / 50,
        Y: 50,
        NUMBER: 5,
        SIZE: w / 50,
        LENGHT: w / 8
    },
    PLAT1: {
        X: w / 5,
        Y: h / 4,
        WIDTH: w / 2.5,
        HEIGHT: h / 100,
        OPTIONS: {
            angle: 0.05,
            isStatic: true
        }
    },
    PLAT2: {
        X: w - w / 5,
        Y: h / 4,
        WIDTH: w / 2.5,
        HEIGHT: h / 100,
        OPTIONS: {
            angle: -0.05,
            isStatic: true
        }
    },
    STICK1: {
        X: 260,
        Y: 60,
        WIDTH: 40,
        HEIGHT: 6,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0.01,
            density: 5
        }
    },

    STICK2: {
        X: 340,
        Y: 120,
        WIDTH: 6,
        HEIGHT: 40,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 1,
            density: 1
        }
    },
    STICK3: {
        X: 340,
        Y: 295,
        WIDTH: 10,
        HEIGHT: 40,
        OPTIONS: {
            restitution: 0.1,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 1,
            density: 3,
            isStatic: true

        }
    },
    STICK4: {
        X: 250,
        Y: 294,
        WIDTH: 10,
        HEIGHT: 40,
        OPTIONS: {
            restitution: 0.1,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0.5,
            density: 1,
            isStatic: false
        }
    },
    STICK5: {
        X: 320,
        Y: 260,
        WIDTH: 60,
        HEIGHT: 6,
        OPTIONS: {
            restitution: 0.1,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 1,
            density: 3
        }
    },
    PLAT3: {
        X: 130,
        Y: 270,
        WIDTH: 180,
        HEIGHT: 10,
        OPTIONS: {
            restitution: 1,
            frictionStatic: 0,
            friction: 0.9,
            frictionAir: 0,
            density: 1,
            isStatic: true,
            angle: 0
        }
    },
    PLAT4: {
        X: 190,
        Y: 200,
        WIDTH: 250,
        HEIGHT: 10,
        OPTIONS: {
            restitution: 1,
            frictionStatic: 0,
            friction: 1,
            frictionAir: 0,
            density: 1,
            isStatic: true,
            angle: -0.1
        }
    },
    PLAT5: {
        X: 12,
        Y: 230,
        WIDTH: 40,
        HEIGHT: 10,
        OPTIONS: {
            restitution: 1,
            frictionStatic: 0,
            friction: 1,
            frictionAir: 0,
            density: 1,
            isStatic: true,
            angle: 0.8
        }
    },
    PLAT6: {
        X: 12,
        Y: 310,
        WIDTH: 40,
        HEIGHT: 10,
        OPTIONS: {
            restitution: 1,
            frictionStatic: 0.5,
            friction: 1,
            frictionAir: 0.5,
            density: 1,
            isStatic: true,
            angle: 0.8
        }
    },
    PLAT7: {
        X: 300,
        Y: 320,
        WIDTH: 100,
        HEIGHT: 10,
        OPTIONS: {
            restitution: 1,
            frictionStatic: 0.5,
            friction: 1,
            frictionAir: 0.5,
            density: 1,
            isStatic: true,
            angle: 0
        }
    },
    PIECE: {
        X: 60,
        Y: 250,
        WIDTH: 6,
        HEIGHT: 30,
        OPTIONS: {
            density: 0.5,
            restitution: 0.1,
            frictionStatic: 0.5,
            friction: 0.8,
            frictionAir: 0.001,
            density: 0.5,
        }
    },
    BALL1: {
        X: 292,
        Y: 80,
        RADIUS: 50,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 1,
            // label:"ball1"

        }
    },
    BALL2: {
        X: 200,
        Y: 260,
        RADIUS: 10,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 0.2

        }
    },
    BALL3: {
        X: 300,
        Y: 260,
        RADIUS: 10,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 0.2

        }
    },
    BALL4: {
        X: 310,
        Y: 260,
        RADIUS: 10,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 0.2

        }
    },
    BALL5: {
        X: 310,
        Y: 280,
        RADIUS: 10,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 0.2

        }
    },
    BALL6: {
        X: 300,
        Y: 280,
        RADIUS: 10,
        OPTIONS: {
            restitution: 0.6,
            frictionStatic: 0.001,
            frictionAir: 0.001,
            friction: 0,
            density: 0.2

        }
    },
}

var img;

function preload() {
    img = loadImage('./exo2.png');
}





//check screen size to assign corresponding values to bodys
if (window.matchMedia("(max-width: 480px)").matches) {
   dimensions=XS
} else if (window.matchMedia("(max-width: 768px)").matches) {
    dimensions=XS

} else if (window.matchMedia("(max-width: 1024px)").matches) {
    dimensions=XS

} else if (window.matchMedia("(max-width: 1200px)").matches) {
    dimensions=XS

} else {
    dimensions=XS

}



function setup() {
    engine = Engine.create();
    world = engine.world


    //canvas = createCanvas(w - margin, h - margin);
    noCanvas()


    // newt = new nCradle(XS.NEWT.X, XS.NEWT.Y, XS.NEWT.NUMBER, XS.NEWT.SIZE, XS.NEWT.LENGHT);


    // Body.translate(newt.newtonsCradle.bodies[0], {
    //     x: -1,
    //     y: -2*XS.NEWT.LENGHT
    // });

    machine1 = new Machine(w / 2, h / 2, 100, 108);
    machine2 = new Machine(w / 2, h /3+70, 100, 220);


    // circle2 = new Box(10, 10, 10, 20, {
    //     inertia: Infinity,
    //     restitution: 1.04,
    //     friction: 0,
    //     frictionAir: 0,
    //     slop: 1
    // })
    // Composite.add(world, circle2);



    // upper platform

    plat1 = new Ground(XS.PLAT1.X, XS.PLAT1.Y, XS.PLAT1.WIDTH, XS.PLAT1.HEIGHT, XS.PLAT1.OPTIONS)
    plat2 = new Ground(XS.PLAT2.X, XS.PLAT2.Y, XS.PLAT2.WIDTH, XS.PLAT2.HEIGHT, XS.PLAT2.OPTIONS)


    ball1 = new Circle(w / 4, h / 10, XS.BALL1.RADIUS, XS.BALL1.OPTIONS)

    // for (let i = 0; i < 6; i++) {
    //     let piece = new Box(XS.PIECE.X + i * XS.PIECE.HEIGHT * 2 / 3, XS.PIECE.Y, XS.PIECE.WIDTH, XS.PIECE.HEIGHT, XS.PIECE.OPTIONS)


    //     domino.push(piece)
    // }
    // Matter.World.add(world, Matter.Composites.pyramid(286, 274, 3, 3, 0, 0, (x, y) => {
    //     return Matter.Bodies.circle(x, y, XS.BALL1.RADIUS, {
    //         isStatic: '',
    //         density: 1
    //     })
    // }));

    //render
    render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: window.innerWidth,
            height: window.innerHeight,
          //  showVelocity: true,
           // showCollisions: true,
            hasBounds: true,
            width: w - margin,
            height: h - margin,
            wireframes: false
        }
    });

    mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    Composite.add(world, mouseConstraint);

    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        focus: true
    })

    // keep the mouse in sync with rendering
    render.mouse = mouse;


    var balls = []
    Events.on(mouseConstraint, "mousedown", () => {
        if (mouseConstraint.body && mouseConstraint.body.label === "ball1")
            myModal.show()
        else {
            var newB = new Circle(mouse.position.x, mouse.position.y-10, 20, {
                restitution: 0.6,
                frictionStatic: 0.001,
                frictionAir: 0.001,
                friction: 0,
                force:{x:Math.random() * ((0.05) - (-0.05))  -0.05,
                y:-0.085},
                render: {
                    fillStyle: "#FF0000"
                }
            })
        }

    })


    // run the renderer
    Render.run(render);

    Matter.Engine.run(engine)

}

function draw() {
    // console.log(newt.newtonsCradle.bodies[0].position)
    // background(255, 255, 128);
    // // A rectangle
    // fill(200, 200, 200);
    // noStroke();
    // rectMode(CENTER)
    // rect(200, h / 2, rectW, rectH);
    // // uses global variables for width and height
    // circle2.show()

    // newt.show()
}










window.onresize = () => {
    location.reload();
}