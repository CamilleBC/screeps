
var spawnHarvester = {
    
    /** @param {Spawn} spawn structure **/
    run: function(spawn) {
        var newName = 'Harvester' + Game.time;
        console.log('Spawning new harvester: ' + newName);
        spawn.spawnCreep([CARRY, MOVE, WORK], newName, {memory: {role: 'harvester'}});
    }
};

module.exports = spawnHarvester;