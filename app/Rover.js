module.exports = class Rover {
    position = [0,0];
    orientation;
   constructor(position, orientation) {
        if (position) {
            this.position = position;
        }
            this.orientation = orientation;

    }
    move(commands) {

       commands.forEach(command => this.execute(command));

    }
    execute(command) {
       if (command === 'f') {
           this.forward();
       }
        if (command === 'b') {
            this.back();
        }
        if (command === 'r') {
            this.right();
        }
    }
    right() {
       if (this.orientation == 'n') { this.orientation = 'e'}
       if (this.orientation == 'e') { this.orientation = 's'}
       if (this.orientation == 's') { this.orientation = 'w'}
       if (this.orientation == 'w') { this.orientation = 'n'}
    }
    back() {
        if ( this.orientation === 'n') {this.position[1] = this.position[1] - 1 }
        if ( this.orientation === 's') {this.position[1] = this.position[1] + 1 }
        if ( this.orientation === 'e') {this.position[0] = this.position[0] - 1 }
        if ( this.orientation === 'w') {this.position[0] = this.position[0] + 1 }

    }
    forward(){
        if ( this.orientation === 'n') {this.position[1] = this.position[1] + 1 }
        if (this.orientation === 's') {this.position[1] = this.position[1] - 1 }
        if ( this.orientation === 'e') {this.position[0] = this.position[0] + 1 }
        if (this.orientation === 'w') {this.position[0] = this.position[0] - 1 }

    }




}





