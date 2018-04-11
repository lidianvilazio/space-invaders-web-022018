class CrewMember{
  constructor(position){
    this.position = position
    this.currentShip = 'Looking for a Rig'

    }

    engageWarpDrive() {
      if(this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }

    setsInvisibility() {
      debugger
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
        return this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }

    chargePhasers() {
      if(this.currentShip === 'Looking for a Rig') {
        return 'had no effect'
      }
    }
  }
