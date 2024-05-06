class God{
    constructor(gender,name){
      this.gender=gender;
      this,name=name;
    }
      static create(){
    return [new Man,new Woman]
      }
    }
    class Human extends God{
      constructor(name,gender,talk){
         super(gender,name);
        this.talk=talk;
      }
    }
    class Man extends Human{
      constructor(name,gender,talk){
         super(gender='male',name);
        this.gender=gender;
        this.talk=talk;
      }
    }
    class Woman extends Human{
      constructor(name,gender='female',talk){
         super(gender,name);
          this.gender=gender;
        this.talk=talk;
      }
    }
    