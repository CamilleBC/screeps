var roleUpgrader = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var target = creep.room.controller;
        var source = creep.pos.findClosestByRange(creep.room.find(FIND_SOURCES));
        
        if (creep.carry.energy < creep.carryCapacity) {
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source, {visualizePathStyle: {stroke: 'white'}});
                creep.say('🔄 harvest');
            }
        } else {
            if (creep.upgradeController == ERR_NOT_IN_RANGE) {
                creep.moveTo(target, {visualizePathStyle: {stroke: 'violet'}});
                creep.say('⬆️ upgrade');
            }
        }
    }
};

module.exports = roleUpgrader;