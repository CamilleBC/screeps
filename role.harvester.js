var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var source = creep.pos.findClosestByRange(creep.room.find(FIND_SOURCES));
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: '#ffaa00'}})
                creep.say('🔄 harvest');
            }
        }
        else {
            var target = creep.pos.findClosestByRange(creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return ((structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN)
                        && structure.energy < structure.energyCapacity);
                }
            }));
            if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: 'white'}});
            }
            
        }
	}
};

module.exports = roleHarvester;