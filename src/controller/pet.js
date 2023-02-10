let Pet = require("../model/pet");
var FCM = require('fcm-node')
const Server_key = 'AAAAXdg_118:APA91bEVZLvJ2g1mgi--7RqdkknlLqy9g-9VpsoAY2Ve8n9xd2tyMV2Ag-4V-OA6fPnTYZFXGur3nMd-qX7xdN2ryE0n4KvnngC-eUw7hsUMZQf6uWWNeIUN_v2cIDE64Pk_Hv88n7I6'

var fcm = new FCM(Server_key);
/*
 * GET /pets route to retrieve all the pets.
 */
let getPets = (req, res) => {
    Pet.find((err, pets) => {
        if (err) {
            res.send(err); // :D
            return;
        }
        res.send(pets);
    });
};

/*
 * POST /pets to save a new pet.
 */
let postPet = (req, res) => {
    let pet = req.body;
    Pet.save(pet, (err, newPet) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            message: "Pet successfully added!",
            pet: newPet
        });
    });
};
/*
 * GET /pets/:id route to retrieve a pet given its id.
 */
let getPet = (req, res) => {
    Pet.findById(req.params.id, (err, pet) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            pet
        });
    })
};
/*
 * DELETE /pets/:id to delete a pet given its id.
 */
let deletePet = (req, res) => {
    Pet.delete(req.params.id, (err, result) => {
        res.json({
            message: "Pet successfully deleted!",
            result
        });
    })
};

/*
 * PUT /pets/:id to update a pet given its id
 */
let updatePet = (req, res) => {
    Pet.update(req.params.id, req.body, (err, pet) => {
        if(err) {
            res.send(err);
            return;
        }
        res.send({
            message: "Pet updated!",
            pet
        });
    })
};


let pushNoti = (req, res) => {
    try {
        var message = {
          to: 'cfA5Luw8Rmexm3Hvk-nNOX:APA91bEGZptKxVkssWglYuzoBl_WGcu11fYnQ7urI47cOJEwxTuEts5ysZnkrHAJvjPHU3Sjm4hb_jdOmJJWN17Y6sfXMG_z_NvkQiccDXxAGVNwjy_gs4ggUduQkpoNmJp8X6jrDxSO',
          data: { //you can send only notification or only data(or include both)
            title: 'test chết app',
            body: 'ddddddddddđ',
            idOder: "RJ2096268",
            image: "https://danviet.mediacdn.vn/2021/1/6/13197933916907312977860828685791406656205212o-16099346980101815349486.jpg"
          },
          android: {
            "priority": "high"
          }
        };
    
        fcm.send(message, function (err, response) {
          if (err) {
            res.status(401).json({
              messege: false
            })
          } else {
            res.status(200).json({
              messege: true
            })
          }
    
        });
      } catch (error) {
        res.status(401).json({
          messege: false
        })
      }
}
//export all the functions
module.exports = {
    getPets,
    postPet,
    getPet,
    deletePet,
    updatePet,
    pushNoti
};