export class Income{
  
  constructor(private value:number, private description:string){}

  get_value() : number{
    return this.value;
  }

  get_description() : string {
    return this.description
  }
}
