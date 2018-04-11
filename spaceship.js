class Spaceship {

  constructor(name, crewMember, phasers, shields, cloaked=false, warpDrive='disengaged', docked=true, phasersCharge='uncharged') {
    this.name = name
    this.crew = []
    this.crewMember = crewMember
    this.phasers = phasers
    this.shields = shields
    this.cloaked = cloaked
    this.warpDrive = warpDrive
    if(this.crewMember.length > 0) {
      this.docked = false
      this.crewM()
      this.c()
    } else {
      this.docked = docked
    }
    this.phasersCharge = phasersCharge
  }

  crewM() {
    this.crewMember.forEach(member => member.currentShip = this)
  }

  c() {
    this.crewMember.forEach(member => this.crew.push(member))
  }
}
