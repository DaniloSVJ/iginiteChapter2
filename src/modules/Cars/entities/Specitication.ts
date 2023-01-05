import {v4 as  uuidv4} from 'uuid'


class Specitication{
    id?: string;
    name: string;
    description:string;
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4();
        }
    }
}

export{Specitication}