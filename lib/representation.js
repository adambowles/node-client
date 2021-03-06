'use strict';

import extend from 'deep-extend';

class Representation {

  constructor(client, properties, parent) {
    this.client = client;
    extend(this, properties);
    this.parent = parent;
  }


  save(callback) {
    return this.client._saveRepresentation(this, callback);
  }


  delete(callback) {
    return this.client._deleteRepresentation(this, callback);
  }

}

export default Representation;
