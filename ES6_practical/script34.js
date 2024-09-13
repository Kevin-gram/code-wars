class Eve extends Adam {
  constructor(name) {
    super(name, "Female");
  }
}

const eve = new Eve("Eve");
eve.speak();
