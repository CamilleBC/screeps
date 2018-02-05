var memoryClear = require('memory.clear');
var roleHarvester = require('role.harvester');
var roleBuilder = require('role.builder');
var roleUpgrader = require('role.upgrader');
var spawnHarvester = require('spawn.harvester');
var visualSpawning = require('visual.spawning');

module.exports.loop = function () {

    memoryClear.run();
    
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harversters: ' + harvesters.length);  
    
    var spawn = Game.spawns['Spawn1'];
    if (harvesters.length < 2) {
        spawnHarvester.run(spawn);
    }
    if(spawn.spawning) { 
        visualSpawning.run(spawn);
    }
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        } else if (creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        } else if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}